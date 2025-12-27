import type {NextApiRequest, NextApiResponse} from "next";
import { prisma } from '@/server/lib/prisma'
import type { Project as PrismaProject } from '@prisma/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse<PrismaProject[]>) {
    const allProjects = await prisma.project.findMany()
    res.status(200).json(allProjects);
}
