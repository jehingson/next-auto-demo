import { getSession } from 'next-auth/client'
import db from '../../../config/db'
import Todo from '../../models/todoModel'

db()

export default async function handler(req, res) {
    switch (req.method) {
        case "post":
            await createTodo(req, res)
            break
    }
}

const createTodo = async (req, res) => {
    try {
        const session = await getSession({ req })
        console.log('sesssss', session)
    } catch (error) {
        return res.status(500).json({ msg: err.message })
    }
}