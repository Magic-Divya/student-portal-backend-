import React, { useState } from "react";
import axios from "axios";

const StudentForm = () => {
  const [student, setStudent] = useState({ name: "", email: "", course: "" });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/students", student);
    alert("✅ Student Added Successfully!");
    setStudent({ name: "", email: "", course: "" });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">Add Student</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={student.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          name="email"
          value={student.email}
          onChange={handleChange}
          placeholder="Email"
          type="email"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          name="course"
          value={student.course}
          onChange={handleChange}
          placeholder="Course"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-medium py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Add Student
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
