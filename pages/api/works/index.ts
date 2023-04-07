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


    if (req.method === 'POST') {
        if(!session){
            return res.status(401)
        }
        try {
            dbConnect()
            const work = await WorkModel.create(req.body)
            return res.status(201).json({work, message: "Work ajouté"})
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'Internal server error'})
        }


        return res.status(201).json({ message: 'POST' })
    }

    if (req.method === 'GET') {
        try {
            dbConnect()
            const works = await WorkModel.find({})
            return res.status(200).json({ works, message: 'OK' })
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Internal server error' })
        }
    }
}

export default handler
