"use client";

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="relative bg-gray-900/80 text-white py-4 shadow-lg backdrop-blur-md">
      {/* Glassmorphism/gradient background effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-tr from-green-400/10 via-gray-900/80 to-green-600/10 blur-xl opacity-80" />
      </div>
      <div className="container mx-auto flex justify-between items-center px-6 relative z-10">
        {/* Logo */}
        <Link href="/" className="text-xl font-extrabold tracking-tight hover:text-green-400 transition-colors">
          RayTechnica
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/services" className="relative group transition-colors">
            <span className="hover:text-green-400 transition-colors">Services</span>
            <span className="block h-0.5 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </Link>
          <Link href="/mission" className="relative group transition-colors">
            <span className="hover:text-green-400 transition-colors">Our Mission</span>
            <span className="block h-0.5 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </Link>
          <Link href="/about" className="relative group transition-colors">
            <span className="hover:text-green-400 transition-colors">About</span>
            <span className="block h-0.5 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </Link>
        </div>

        {/* CTA Button (Desktop) */}
        <Link href="/contact" className="hidden md:block bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-2 px-6 rounded shadow-lg transition-all duration-300">
          Book now
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white backdrop-blur-md"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900/90 px-6 pb-4 pt-2 rounded-b-xl shadow-xl animate-slide-down backdrop-blur-md">
          <div className="flex flex-col space-y-4">
            <Link href="/services" className="hover:text-green-400 transition-colors" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link href="/mission" className="hover:text-green-400 transition-colors" onClick={() => setMenuOpen(false)}>Our Mission</Link>
            <Link href="/about" className="hover:text-green-400 transition-colors" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/contact" className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-2 px-4 rounded shadow-lg transition-all duration-300 text-center" onClick={() => setMenuOpen(false)}>
              Book now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;