import express from "express";
import Student from "../models/Student.js";

const router = express.Router();

// ➕ Add a student
router.post("/", async (req, res) => {
  try {
    const { name, email } = req.body;
    const student = new Student({ name, email });
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 📋 Get all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
