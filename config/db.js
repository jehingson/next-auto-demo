import mongoose from 'mongoose'

const db = () => {
    if (mongoose.connections[0].readyState) {
        console.log('Already connected')
        return
    }

    mongoose.connect(process.env.DATABASE_URL, {}, err => {
        if (err) throw err;
        console.log('connected to mongodb.')
    })
}

export default db;