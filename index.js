import express from "express"
import cors from "cors"
import listroutes from "./routes/listRoutes.js"

const app = express()

app.use(cors())

app.use(express.json())

app.use("/api/list",listroutes)



app.listen(8080, ()=>{
    console.log("server is runing ")
})