import { useEffect, useState } from "react";

export default function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Fetch all students on load
  useEffect(() => {
    fetch("http://localhost:5000/api/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error("Error fetching students:", err));
  }, []);

  // Add new student
  const addStudent = async (e) => {
    e.preventDefault();
    if (!name || !email) return alert("Please fill all fields");

    const res = await fetch("http://localhost:5000/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });

    if (res.ok) {
      const newStudent = await res.json();
      setStudents([...students, newStudent]);
      setName("");
      setEmail("");
    } else {
      alert("Failed to add student");
    }
  };

  const activeCount = students.filter((s) => s.status === "Active").length;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Student Portal</h1>

      {/* Add Student Form */}
      <form
        onSubmit={addStudent}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md mb-6"
      >
        <h2 className="text-lg font-semibold mb-3">Add New Student</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded mb-3"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded mb-3"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Student
        </button>
      </form>

      {/* Stats */}
      <div className="bg-white p-4 rounded-xl shadow-md flex gap-8 mb-6">
        <p className="text-green-600 font-semibold">Active: {activeCount}</p>
        <p className="text-blue-600 font-semibold">Total: {students.length}</p>
      </div>

      {/* Student List */}
      <div className="bg-white rounded-xl shadow-md w-full max-w-2xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s._id} className="border-b hover:bg-gray-50">
                <td className="p-3">{s.name}</td>
                <td className="p-3">{s.email}</td>
                <td className="p-3">{s.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
