import Categorie from "models/Categorie";
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

    // const cat = await Categorie.findOne({link: req.query.single_cat}) por seguranca melhor buscar por id
    const cat = await Categorie.findById(req.query.single_cat)

    await db.disconnect()
    res.send(cat)
}

const putHandler = async (req, res) => {
    await db.connect()
    const cat = await Categorie.findById(req.query.single_cat)

    if (cat) {
        cat.name = req.body.name
        cat.img = req.body.img
        cat.link = req.body.link
    }

    const newCat = await cat.save()
    await db.disconnect();
    res.status(201).send({ message: 'Categorie updated successfully', newCat });
}

const deleteHandler = async (req, res) => {
    await db.connect()

    const cat = await Categorie.findById({ _id: req.query.single_cat })
    if (cat) {
        // await cat.remove() tambem funciona
        await Categorie.deleteOne({ _id: req.query.single_cat })
        await db.disconnect();
        res.send({ message: 'Categorie deleted successfully' });
    } else {
        await db.disconnect();
        res.status(404).send({ message: 'Categorie not found' });
    }
}

export default handler