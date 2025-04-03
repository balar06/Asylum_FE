import React from "react";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome</h1>
      <p className="text-gray-600 mt-2">
        Here is an overview of your activities.
      </p>

      {/* Example Stats Section */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">File I-598 applicaion</h2>
          <p className="text-blue-600 text-2xl font-bold">Test</p>
        </div>
      </div>
    </div>
  );
}
