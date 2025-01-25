import express, { Router } from "express"
import { addlist,editlist,deletelist,singlelist ,getallList} from "../controllers/controllers.js";

const listroutes = express.Router()

listroutes.post("/addlist",addlist)
listroutes.put("/editlist",editlist)
listroutes.delete("/deletelist/:id", deletelist)
listroutes.get("/singlrlist/:id",singlelist)
listroutes.get("/getalllist",getallList)



export default listroutes