import express from "express";
import userRouter from "./routes/users.js"
import {config} from "dotenv"
import trainerRouter from "./routes/trainers.js";


config()

const app = express()

app.use(express.json())
app.use("/user",userRouter)
app.use("/trainer",trainerRouter)


  
export default app
