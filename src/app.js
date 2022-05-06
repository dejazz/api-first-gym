import express from "express";
import userRouter from "./routes/user.js"
import {config} from "dotenv"


config()

const app = express()

app.use(express.json())
app.use("/user",userRouter)


  
export default app
