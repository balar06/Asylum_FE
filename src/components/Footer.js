import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-200 text-gray-700 py-4 mt-auto">
      <div className="max-w-4xl mx-auto px-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Asylum Application Portal. All rights reserved.
      </div>
    </footer>
  );
}
