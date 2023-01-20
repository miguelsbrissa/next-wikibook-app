import mongoose from "mongoose";

const conection = {}

async function connect() {
    if (conection.isConected) {
        console.log('Already connected!')
        return
    }

    if (mongoose.connections.length > 0) {
        conection.isConected = mongoose.connections[0].readyState
        if (conection.isConected === 1) {
            console.log('Use previous connection!')
            return
        }
        await mongoose.disconnect()
    }

    const db = await mongoose.connect(process.env.MONGODB_URL)
    console.log('New connection!')
    conection.isConected = db.connections[0].readyState
}

async function disconnect() {
    if (conection.isConected) {
        if (process.env.NODE_ENV === 'production') {
            await mongoose.disconnect()
            conection.isConected = false
        } else {
            console.log('Not disconnected')
        }
    }
}

const db = { connect, disconnect }
export default db 