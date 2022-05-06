import mongoose from "../database/index.js";

const TrainerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  repetions: {
    type: String,
    required: true,
  },
  userId:{
    type: String,
    required:true,
  },
  createdAt: {
    type: String,
    default: Date.now,
  },
  updateAt: {
    type: String,
    default: null,
  },
});

const Trainer = mongoose.model("Trainer", TrainerSchema);
export default Trainer;
