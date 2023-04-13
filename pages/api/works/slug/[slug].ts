import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/utils/mongodb';
import WorkModel from '@/models/WorkModel';
import { IWork } from '@/@types/work'

type Data = {

    works?: IWork[]
    work?: IWork
    message: string

}
const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    const {
        query: { slug },
        method,
    } = req

    if (req.method === 'GET') {
        try {
            dbConnect()
            const work = await WorkModel.findOne({slug})
            return res.status(200).json({ work, message: 'OK' })
        } catch (error) {
            console.error("slug.ts, error : ",error)
            return res.status(500).json({ message: 'Internal server error' })
        }
    }

    return res.status(405)
}
export default handler
