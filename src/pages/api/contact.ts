import type {NextApiRequest, NextApiResponse} from "next";
import nodemailer from "nodemailer";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") {
        return res.status(405).json({success: false, message: "Method not allowed"});
    }

    const {name, email, subject, message} = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({success: false, message: "Missing required fields!"});
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: subject?.trim()
                ? `Portfolio inquiry: ${subject.trim()}`
                : "New portfolio inquiry",
            text: `
                Name: ${name}
                Email: ${email}
                
                Message:
                ${message}
            `,
        });

        return res.status(200).json({success: true, message: "Message sent successfully!"});
    } catch (error) {
        console.error(error);
        return res.status(500).json({success: false, message: "Failed to send email."});
    }
}
