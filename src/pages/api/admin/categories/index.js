import Categorie from "models/Categorie";
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

  const newCat = new Categorie({
    name: req.body.name,
    img: req.body.img,
    link: req.body.link
  })

  const cat = await newCat.save()
  await db.disconnect();
  res.status(201).send({ message: 'Categorie created successfully', cat });
}

const getAllHandler = async (req, res) => {
  await db.connect()

  const cat = await Categorie.find().lean()

  await db.disconnect()
  res.send(cat)
}

export default handler