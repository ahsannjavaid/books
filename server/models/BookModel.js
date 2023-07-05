import mongoose from "mongoose"

const bookModel = mongoose.Schema({
    title: {
        type: String,
        isRequired: true,
        unique: true,
        trim: true
    },
    author: {
        type: String,
        isRequired: true
    },
    publicationYear: {
        type: Number,
        isRequired: true
    }
}, {timestamps: true})

export default mongoose.model("books", bookModel)