import express, { Router } from "express"
import { addlist,editlist,deletelist,singlelist ,getallList} from "../controllers/controllers.js";

const listroutes = express.Router()

listroutes.post("/addlist",addlist)
listroutes.put("/editlist/:id",editlist)
listroutes.delete("/deletelist/:id", deletelist)
listroutes.get("/singlelist/:id",singlelist)
listroutes.get("/getAllList",getallList)



export default listroutes