import Author from "models/Author";
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

    const author = await Author.findById(req.query.single_author)

    await db.disconnect()
    res.send(author)
}

const putHandler = async (req, res) => {
    await db.connect()
    const author = await Author.findById(req.query.single_author)

    if (author) {
        author.name = req.body.name
        author.img = req.body.img
        author.history = req.body.history
        author.books = req.body.books
        author.link = req.body.link
    }

    const newAuthor = await author.save()
    await db.disconnect();
    res.status(201).send({ message: 'Author updated successfully', newAuthor });
}

const deleteHandler = async (req, res) => {
    await db.connect()

    const author = await Author.findById({ _id: req.query.single_author })
    if (author) {
        await author.remove()
        await db.disconnect();
        res.send({ message: 'Author deleted successfully' });
    } else {
        await db.disconnect();
        res.status(404).send({ message: 'Author not found' });
    }
}

export default handler