import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function GuestLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Header />
      <main className="w-full max-w-4xl bg-white p-8 shadow-md rounded-lg my-8 mt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
}
