import BookModel from "../Models/BookModel.js"

export const GetAllBooksController = async (req, res) => {
    try {
        const books = await BookModel.find()
        if (books.length) {
            res.status(200).send({
                success: true,
                message: "All books displayed.",
                booksCount: books.length,
                books
            })
        }
        else {
            res.status(202).send({
                success: true,
                message: "No book yet.",
                booksCount: books.length
            })
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({
            success: false,
            message: "Something went wrong while displaying all the books."
        })
    }
}

export const AddNewBookController = async (req, res) => {
    try {
        // fetching data from request
        const { title, author, publicationYear } = req.body

        // validation
        if (!title) {
            return res.status(404).send({
                success: false,
                message: "Title of book is mandatory."
            })
        }
        if (!author) {
            return res.status(404).send({
                success: false,
                message: "Name of book author is mandatory."
            })
        }
        if (!publicationYear) {
            return res.status(404).send({
                success: false,
                message: "Book publication year is mandatory."
            })
        }

        // existing check
        const existingBook = await BookModel.findOne({ title })
        if (existingBook) {
            return res.status(401).send({
                success: false,
                message: "This book already exists."
            })
        }

        // making new instance of a book
        const newBook = await new BookModel()

        // loading data into instance
        newBook.title = title
        newBook.author = author
        newBook.publicationYear = publicationYear

        // saving data into the database
        const result = await newBook.save()

        res.status(200).send({
            success: true,
            message: "A new book is added.",
            result
        })
    } catch (error) {
        console.log(error)
        res.status(400).send({
            success: false,
            message: "Something went wrong while adding a new book."
        })
    }
}

export const DeleteBookController = async (req, res) => {
    try {
        // destructuring id from URL parameters
        const { id } = req.params

        // checking if the book exists
        const existingBook = await BookModel.findById(id)

        // deleting the book if it exists
        if (existingBook) {
            const result = await BookModel.findByIdAndDelete(id)
            res.status(200).send({
                success: true,
                message: `The book with title ${result.title} is deleted successfuly from the database.`
            })
        }
        else {
            res.status(404).send({
                success: false,
                message: "This book does not exist."
            })
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({
            success: false,
            message: "Something went wrong while deleting the book."
        })
    }
}