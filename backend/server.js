import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/studentPortal")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/students", studentRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
