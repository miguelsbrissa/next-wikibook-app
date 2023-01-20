import mongoose from "mongoose";

const categorieSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        img: { type: String, required: true }
    },
    {
        timestamps: true
    }
)

const Categorie = mongoose.models.Categorie || mongoose.model('Categorie', categorieSchema)
export default Categorie