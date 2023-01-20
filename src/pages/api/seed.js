import db from "database/db"
import Categorie from "models/Categorie"
import data from "database/data"

const handler = async (req, res) => {
    await db.connect()

    await Categorie.deleteMany()
    await Categorie.insertMany(data.categories)

    await db.disconnect()

    res.send({ message: 'Seeded successfully' })
}

export default handler