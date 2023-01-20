import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        img: { type: String, required: true },
        author: { type: String, required: true },
        categorie: { type: String, required: true },
        synopsis: { type: String, required: true },
        link: {type: String, required: true}
    },
    {
        timestamps: true
    }
)

const Book = mongoose.models.Book || mongoose.model('Book', bookSchema)
export default Book