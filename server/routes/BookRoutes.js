import express from "express"
import { GetAllBooksController, AddNewBookController, DeleteBookController } from '../controllers/BookController.js'

const router = express.Router()

// getting books | GET
router.get("/get-all", GetAllBooksController)

// adding a new book | POST
router.post("/add-new", AddNewBookController)

// deleting a book | DELETE
router.delete("/delete/:id", DeleteBookController)

export default router