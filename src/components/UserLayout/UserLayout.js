import React from "react";

export default function UserLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-4">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <ul className="mt-4">
          <li className="py-2 px-3 hover:bg-blue-700 cursor-pointer">Overview</li>
          <li className="py-2 px-3 hover:bg-blue-700 cursor-pointer">Analytics</li>
          <li className="py-2 px-3 hover:bg-blue-700 cursor-pointer">Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
}
