import User from "../models/user.js";
import jwt from "jsonwebtoken";
class UserControllers {
  static async createUser(req, res) {
    try {
      const { name, cpf, email, password, avatarUrl } = req.body;
      const user = await User.create({
        name,
        cpf,
        email,
        password,
        avatarUrl,
      });
     user.password = undefined
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: "aconteceu algo de errado!" });
    }
  }
  static async findAll(req, res) {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (error) {
      return res.status(500).json({ error: "algo deu errado" });
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
  static async addTreiners(req,res){
    try {
      const {id}= req.params
      const {trainers} = req.body
      const userUpdated = await User.findByIdAndUpdate(
        
        id,
        {
          trainers:[...trainers], 
          updatedAt: new Date(),
          new: true,
        },
        {
          returnDocument: "after",
        }
        );
        console.log(userUpdated)
        res.status(201).json(userUpdated)
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: "aconteceu algo de errado!" });
    }
  }
  static async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { password, avatarUrl } = req.body;

      const userUpdated = await User.findByIdAndUpdate(
        id,
        {
          password,
          avatarUrl,
          updatedAt: new Date(),
          new: true,
        },
        {
          returnDocument: "after",
        }
      );

      res.json(userUpdated);
    } catch (error) {
      res.status(500).json({ error: "aconteceu algo de errado!" });
    }
  }
  static async deleteUser(req, res) {
    const { id } = req.params;
    await User.findByIdAndRemove(id);
    try {
      res.status(204).json({});
    } catch (error) {
      res.status(500).json({ error: "aconteceu algo de errado!" });
    }
  }
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        email,
      }).select("+password");
      if (!user) {
        return res.status(404).json({ error: "usuario n??o encontrado" });
        // throw new Error("usu??rio n??o encontrado")
      }

      if (user.password !== password) {
        // return res.status(409).json({"error": "senha inv??lida "})
        throw new Error("senha incorreta");
      }

      const token = jwt.sign({ id: user.id }, process.env.SECRET, {
        expiresIn: "1d",
      });
      res.json({ token: token, userId:user.id });
    } catch (error) {
      res.status(500).json({ error: "aconteceu algo de errado!" });
    }
  }
}

export default UserControllers;
