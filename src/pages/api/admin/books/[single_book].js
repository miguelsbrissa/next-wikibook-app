import Book from "models/Book";
import db from "database/db"

const handler = async (req, res) => {
    if (req.method === 'GET') {
        return getByIdHandler(req, res);
    } else if (req.method === 'PUT') {
        return putHandler(req, res);
    } else if (req.method === 'DELETE') {
        return deleteHandler(req, res);
    } else {
        return res.status(400).send({ message: 'Method not allowed' });
    }
}

const getByIdHandler = async (req, res) => {
    await db.connect()

    const book = await Book.findById(req.query.single_book)

    await db.disconnect()
    res.send(book)
}

const putHandler = async (req, res) => {
    await db.connect()
    const book = await Book.findById(req.query.single_book)

    if (book) {
        book.name = req.body.name
        book.img = req.body.img
        book.author = req.body.author
        book.categorie = req.body.categorie
        book.synopsis = req.body.synopsis
        book.link = req.body.link
    }

    const newBook = await book.save()
    await db.disconnect();
    res.status(201).send({ message: 'Book updated successfully', newBook });
}

const deleteHandler = async (req, res) => {
    await db.connect()

    const book = await Book.findById({ _id: req.query.single_book })
    if (book) {
        await book.remove()
        await db.disconnect();
        res.send({ message: 'Book deleted successfully' });
    } else {
        await db.disconnect();
        res.status(404).send({ message: 'Book not found' });
    }
}

export default handler