import React from "react";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to Your Dashboard</h1>
      <p className="text-gray-600 mt-2">
        Here is an overview of your activities and analytics.
      </p>

      {/* Example Stats Section */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Active Deals</h2>
          <p className="text-blue-600 text-2xl font-bold">$120,369</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Revenue Total</h2>
          <p className="text-green-600 text-2xl font-bold">$234,210</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Closed Deals</h2>
          <p className="text-red-600 text-2xl font-bold">874</p>
        </div>
      </div>
    </div>
  );
}
