"use client";

import { useState } from "react";

const navLinks = ["Home", "Features", "About"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="text-xl font-bold text-gray-900">Vexa AI</span>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-gray-900 transition-colors">{link}</a>
            </li>
          ))}
        </ul>

        <a href="#get-started" className="hidden md:inline-block bg-gray-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-700 transition-colors">
          Get Started
        </a>

        <button className="md:hidden text-gray-900" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isOpen ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-white border-t border-gray-100">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-700 font-medium" onClick={() => setIsOpen(false)}>
              {link}
            </a>
          ))}
          <a href="#get-started" className="bg-gray-900 text-white text-center font-medium px-5 py-2.5 rounded-full" onClick={() => setIsOpen(false)}>
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}