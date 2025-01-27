import express from "express"
import cors from "cors"
import listroutes from "./routes/listRoutes.js"
import connectdb from "./config/connectdb.js"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const port = process.env.PORT
app.use(cors())
connectdb()
app.use(express.json())

app.use("/api/list",listroutes)




app.listen(port, ()=>{
    console.log("server is runing ")
})