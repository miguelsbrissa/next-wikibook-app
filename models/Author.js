import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        img: { type: String, required: true },
        history: { type: String, required: true },
        books: { type: [String], required: true },
        link: {type: String, required: true}
    },
    {
        timestamps: true
    }
)

const Author = mongoose.models.Author || mongoose.model('Author', authorSchema)
export default Author