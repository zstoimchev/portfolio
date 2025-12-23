import type {NextApiRequest, NextApiResponse} from "next";

type Project = {
    name: string;
    description: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Project[]>) {
    const projects: Project[] = [
        {
            name: "Zmix",
            description: "A simple onion network in Java",
        },
        {
            name: "Zetra",
            description: "A simple blockchain in Java",
        },
    ];

    res.status(200).json(projects);
}
