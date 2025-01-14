import express, { json } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import TodoModel from "./models/Todo.js";

dotenv.config();
const PORT = process.env.PORT || 5001;
const MONGO_URL = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URL, {
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error"));
db.once("open", () => console.log("Database connected"));

app.get("/get", (req, res) => {
  TodoModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.post("/add", (req, res) => {
  const task = req.body.task;
  TodoModel.create({
    task: task,
  })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
