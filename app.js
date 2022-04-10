import express from "express";
import connectDB from './db/connectDB.js'
import cors from 'cors'
import web from './Router/web.js'
const app = express()

// CORS Policy
app.use(cors())

const DATABASE_URL = "mongodb://localhost:27017"
connectDB(DATABASE_URL)

// JSON
app.use(express.json())

// Load Routes
app.use("/api", web)

app.listen(8000,()=>{
    console.log("http:/localhost:5000")
})