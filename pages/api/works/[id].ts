import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/utils/mongodb';
import WorkModel from '@/models/WorkModel';
import { IWork } from '@/@types/work'
import {session} from "next-auth/core/routes";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

type Data = {

    works?: IWork[]
    work?: IWork
    message: string

}
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getServerSession(req,res,authOptions)

    const {
        query: { id },
        method,
    } = req

    if (req.method === 'GET') {
        if(!session){
            return res.status(401)
        }
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
        if(!session){
            return res.status(401)
        }
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
        if(!session){
            return res.status(401)
        }
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

    return res.status(405)
}
export default handler
