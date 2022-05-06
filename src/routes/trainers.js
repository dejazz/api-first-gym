import { Router } from "express";
import TrainersControllers from "../controllers/trainers.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { isAuthenticatedTrainers } from "../middlewares/authTrainers.js";


const trainerRouter = Router();


trainerRouter.post("",isAuthenticatedTrainers,(req,res)=>TrainersControllers.createTrainer(req,res))
trainerRouter.get("/all",isAuthenticated,(req,res)=>TrainersControllers.findAllTrainers(req,res))

export default trainerRouter