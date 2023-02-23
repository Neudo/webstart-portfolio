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
        query: { id },
        method,
    } = req


    if (req.method === 'GET') {
        try {
            dbConnect()
            const work = await WorkModel.findById(id)
            return res.status(200).json({ work, message: 'OK' })
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Internal server error' })
        }
    }

    if (req.method === 'DELETE') {
        try {
            dbConnect()
            const work = await WorkModel.deleteOne({_id: id})
            return res.status(200).json({ work, message: 'OK' })
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Internal server error' })
        }
    }

    if (req.method === 'PUT') {
        try {
            dbConnect()
            const work = await WorkModel.findByIdAndUpdate(id, req.body, {
                new: true,
                runValidators: true,
            })
            return res.status(200).json({ work, message: 'OK' })
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Internal server error' })
        }
    }
}
export default handler
