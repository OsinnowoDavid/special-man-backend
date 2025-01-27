import express from "express"
import cors from "cors"
import listroutes from "./routes/listRoutes.js"
import connectdb from "./config/connectdb.js"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const port = process.env.PORT
app.use(cors({
    origin: [
        "https://special-man-ltd-frontend-dm1g.vercel.app",
        "https://special-man-ltd-frontend-6zcx.vercel.app"
    ],
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
    console.log("server is running")
})