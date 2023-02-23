// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'



type Data = {
    error?: string,
    token?: string
}


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if(req.method === 'POST'){
        const postedUsername = req.body.username
        const  postedPassword = req.body.password
        let jwt = require('jsonwebtoken')
        const token = jwt.sign({ foo: 'bar' }, 'ok')

        if( (postedPassword == process.env.ADMIN_PASSWORD) && (postedUsername == process.env.ADMIN_NAME)){
            res.status(200).json({token: token})
        } else {
            res.status(401).json({error: "Identifiants incorrects"})
        }
    }
}
