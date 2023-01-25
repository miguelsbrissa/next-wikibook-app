import Book from "models/Book";
import db from "database/db"

const handler = async (req, res) => {
  if (req.method === 'GET') {
    return getAllHandler(req, res);
  } else if (req.method === 'POST') {
    return postHandler(req, res);
  } else {
    return res.status(400).send({ message: 'Method not allowed' });
  }
}

const postHandler = async (req, res) => {
  await db.connect()

  const newBook = new Book({
    name: req.body.name,
    img: req.body.img,
    author: req.body.author,
    categorie: req.body.categorie,
    synopsis: req.body.synopsis,
    link: req.body.link
  })

  const book = await newBook.save()
  await db.disconnect();
  res.status(201).send({ message: 'Book created successfully', book });
}

const getAllHandler = async (req, res) => {
  await db.connect()

  const book = await Book.find().lean()

  await db.disconnect()
  res.send(book)
}

export default handler