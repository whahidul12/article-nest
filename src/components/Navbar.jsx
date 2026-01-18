"use client";

import { useState } from "react";
import Link from "next/link";
import logo from "../../public/logo.jpg";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#FCF8F1] bg-opacity-30 border-b">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center">
              <Image className="w-auto h-8" src={logo} alt="Logo" />
              <span className="text-black ml-2 text-2xl">Article Nest</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-10">
            <Link href="/" className="text-base text-black hover:opacity-80">
              Home
            </Link>
            <Link href="/articles" className="text-base text-black hover:opacity-80">
              Articles
            </Link>
            <Link href="/add-articles" className="text-base text-black hover:opacity-80">
              Add Article
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/login"
              className="inline-flex items-center justify-center px-5 py-2.5 font-semibold text-white bg-black rounded-full hover:bg-yellow-300 hover:text-black transition"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 text-black rounded-md lg:hidden hover:bg-gray-100"
          >
            {isOpen ? (
              // Close Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 space-y-4 pb-6">
            <Link
              href="#"
              className="block text-base text-black hover:opacity-80"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/articles"
              className="block text-base text-black hover:opacity-80"
              onClick={() => setIsOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/add-articles"
              className="block text-base text-black hover:opacity-80"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>

            <Link
              href="/login"
              className="block w-full text-center px-5 py-2.5 font-semibold text-white bg-black rounded-full hover:bg-yellow-300 hover:text-black transition"
              onClick={() => setIsOpen(false)}
            >
              Join Now
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
