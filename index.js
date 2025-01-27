import express from "express"
import cors from "cors"
import listroutes from "./routes/listRoutes.js"
import connectdb from "./config/connectdb.js"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(cors({
    origin: "https://special-man-ltd-frontend-s725.vercel.app", // Allow all origins for testing purposes
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true
}))

connectdb()
app.use(express.json())

app.use("/api/list", listroutes)

app.get("/", (req, res) => {
    res.json("hello")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})