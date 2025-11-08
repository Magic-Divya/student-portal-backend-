import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  status: { type: String, enum: ["Active", "Completed"], default: "Active" },
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
