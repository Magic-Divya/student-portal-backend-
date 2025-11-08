import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 text-center">
      <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Dashboard</h2>
      <p className="text-gray-600">Welcome to your student portal. Manage your students easily!</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
        <div className="bg-indigo-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-bold text-indigo-700">Total Students</h3>
          <p className="text-3xl font-semibold mt-2">42</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-bold text-green-700">Active</h3>
          <p className="text-3xl font-semibold mt-2">38</p>
        </div>
        <div className="bg-pink-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-bold text-pink-700">Inactive</h3>
          <p className="text-3xl font-semibold mt-2">4</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
