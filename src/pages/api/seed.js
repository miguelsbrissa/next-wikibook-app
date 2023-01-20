import db from "database/db"
import Categorie from "models/Categorie"
import data from "database/data"
import Book from "models/Book"
import Author from "models/Author"

const handler = async (req, res) => {
    await db.connect()

    await Categorie.deleteMany()
    await Categorie.insertMany(data.categories)

    await Book.deleteMany()
    await Book.insertMany(data.books)

    await Author.deleteMany()
    await Author.insertMany(data.author)

    await db.disconnect()

    res.send({ message: 'Seeded successfully' })
}

export default handler