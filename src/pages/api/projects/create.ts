import type { NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable'
import fs from 'fs'
import { put } from '@vercel/blob'
import { prisma } from '@/server/lib/prisma'

export const config = {
    api: { bodyParser: false },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return res.status(405).end()

    const form = formidable({})

    form.parse(req, async (err, fields, files) => {
        if (err) return res.status(500).json({ error: 'Form parse error' })

        const name = Array.isArray(fields.name) ? fields.name[0] : fields.name
        const description = Array.isArray(fields.description) ? fields.description[0] : fields.description
        const github_url = Array.isArray(fields.github_url) ? fields.github_url[0] : fields.github_url

        const imageFile = Array.isArray(files.image) ? files.image[0] : files.image

        if (!name || !description || !imageFile) {
            return res.status(400).json({ error: 'Missing required fields' })
        }

        try {
            const fileBuffer = fs.readFileSync(imageFile.filepath)

            const blob = await put(
                imageFile.originalFilename || `project-${Date.now()}.jpg`,
                fileBuffer,
                {
                    access: 'public',
                    contentType: imageFile.mimetype || 'image/jpeg',
                }
            )

            const project = await prisma.project.create({
                data: {
                    name,
                    description,
                    github_url: github_url || "https://github.com/zstoimchev",
                    image_url: blob.url,
                },
            })

            res.status(200).json(project)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Upload failed' })
        }
    })
}