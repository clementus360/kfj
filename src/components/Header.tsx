"use client"

import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed z-50 flex justify-between bg-green-600 text-white font-semibold w-full shadow-lg px-8 lg:px-24 py-4 m-auto">
      <a href="/">
        <img src="/wiv.svg" className="w-16" alt="logo" />
      </a>

      {/* Mobile dropdown menu */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center px-3 py-2 border rounded text-white border-white focus:outline-none"
        >
          <svg
            className="h-4 w-4 fill-current mr-2"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M2 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM2 9a1 1 0 100 2h14a1 1 0 100-2H2zm0 6a1 1 0 110-2h14a1 1 0 110 2H2z"
              clipRule="evenodd"
            />
          </svg>
          Menu
        </button>
        {isMenuOpen && (
          <div className="mt-2 px-4 py-2 border rounded">
            <a href="/" className="block py-1">HOME</a>
            <a href="/about" className="block py-1">ABOUT</a>
            <a href="/properties" className="block py-1">PROPERTIES</a>
            <a href="/cars" className="block py-1">CARS</a>
            <a href="/contact" className="block py-1">CONTACT US</a>
          </div>
        )}
      </div>

      {/* Desktop menu */}
      <ul className="hidden sm:flex gap-8 font-Regular items-center">
        <a href="/"><li>HOME</li></a>
        <a href="/about"><li>ABOUT</li></a>
        <a href="/properties"><li>PROPERTIES</li></a>
        <a href="/cars"><li>CARS</li></a>
        <a href="/contact"><li className="bg-white rounded-md text-green-600 px-4 py-2">CONTACT US</li></a>
      </ul>
    </div>
  );
};