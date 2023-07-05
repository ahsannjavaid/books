import express from "express"
import cors from "cors"
import "./db/configure.js"
import dotenv from "dotenv"
import BookRoutes from "./routes/BookRoutes.js"

dotenv.config()
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json())

// APIs
app.use("/api/v1/books", BookRoutes)

app.get("/", async(req, res) => {
    console.log("Home page displayed.")
    res.send("<h1>Home page displayed.</h1>")
})

app.listen(port, () => {
    console.log(`Server started at port ${port}.`);
})