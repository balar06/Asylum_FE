import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-200 text-gray-700 py-4 mt-auto">
      <div className="max-w-7xl mx-auto px-6 text-center text-sm font-medium">
        &copy; {new Date().getFullYear()} Asylum Application Portal. All rights reserved.
      </div>
    </footer>
  );
}
