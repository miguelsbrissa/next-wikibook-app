import db from "database/db"
import Categorie from "models/Categorie"

const handler = async (req, res) => {
    await db.connect()

    const cat = await Categorie.find().lean()

    await db.disconnect()
    res.send(cat)

}

export default handler
