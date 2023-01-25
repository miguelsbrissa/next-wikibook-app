import Author from "models/Author";
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

  const newAuthor = new Author({
    name: req.body.name,
    img: req.body.img,
    history: req.body.history,
    books: req.body.books,
    link: req.body.link
  })

  const author = await newAuthor.save()
  await db.disconnect();
  res.status(201).send({ message: 'Author created successfully', author });
}

const getAllHandler = async (req, res) => {
  await db.connect()

  const author = await Author.find().lean()

  await db.disconnect()
  res.send(author)
}

export default handler