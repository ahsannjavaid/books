import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

const DB = process.env.DATABASE
mongoose.set('strictQuery', true);
mongoose.connect(DB).then(() => {
    console.log("Database is connected!")
}).catch((err) => {
    console.log(err);
})