import jwt from "jsonwebtoken";
import Trainer from "../models/trainers.js";
import User from "../models/user.js";

class TrainersControllers {
  static async createTrainer(req, res) {
    try {
      const { name, type, repetions, userId } = req.body;
      const trainer = await Trainer.create({
        name,
        type,
        repetions,
        userId,
      });
      res.status(201).json(trainer);
    } catch (error) {
      res.status(500).json({ error: "aconteceu algo de errado!" });
    }
  }
  static async findAllTrainers(req, res) {
    try {
      const trainer = await Trainer.find();
      res.status(200).json(trainer);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "aconteceu algo de errado!" });
    }
  }
  static async findById(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      return res.json(user);
    } catch (error) {
      return res.status(500).json({ error: "algo deu errado" });
    }
  }
}

export default TrainersControllers;
