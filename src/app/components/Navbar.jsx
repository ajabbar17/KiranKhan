"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ExternalLink, Menu, X } from "lucide-react"; // for icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto text-xl flex justify-center items-center py-4 px-6 relative">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden absolute top-8 left-6 text-white hover:text-orange-400 transition"
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu className=" " size={36} />
          )}
        </button>

        {/* Desktop Center Nav */}
        <div className="hidden md:flex space-x-8 border bg-black/30 backdrop-blur-2xl border-white/20 rounded-full px-6 py-3">
          <Link
            href="/"
            className="text-white hover:text-orange-400 transition"
          >
            Home
          </Link>

          <Link
            href="/profile"
            className="text-white hover:text-orange-400 transition"
          >
            Profile
          </Link>
          <Link
            href="/exhibitions"
            className="text-white hover:text-orange-400 transition"
          >
            Exhibitions
          </Link>
          <Link
            href="/teaching-experience"
            className="text-white hover:text-orange-400 transition"
          >
            Teaching Experience
          </Link>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center text-white hover:text-orange-400 transition"
            >
              Projects <ChevronDown size={16} className="ml-1" />
            </button>

            {isOpen && (
              <div className="absolute top-10 left-0 bg-black/80 text-white rounded-lg shadow-lg w-60 border border-white/20">
                <Link
                  href="/womenifesto"
                  className="block px-4 py-2 hover:bg-orange-500 transition"
                >
                  Wemend Womenifesto
                </Link>
                <Link
                  href="/death-of-booti"
                  className="block px-4 py-2 hover:bg-orange-500 transition"
                >
                  Death of Booti
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Right Side Link - Button with bottom-up fill effect */}
        <a
          href="https://tanka.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex absolute right-6 items-center px-4 py-2 border border-white text-white rounded-full overflow-hidden group transition-all duration-300 hover:text-black"
        >
          {/* Bottom-up white fill background */}
          <span className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>

          {/* Content */}
          <span className="relative z-10 flex items-center">
            Tanka <ExternalLink size={16} className="ml-1" />
          </span>
        </a>

        {/* Mobile Sidebar Overlay */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Sidebar */}
        <div
          className={`md:hidden fixed top-0 left-0 h-full w-80 bg-black/95 backdrop-blur-md border-r border-white/20 z-50 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/20">
              <h2 className="text-white text-xl font-bold">Menu</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-orange-400 transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* Sidebar Content */}
            <div className="flex flex-col flex-1 p-6 space-y-6">
              <Link
                href="/"
                className="text-white hover:text-orange-400 transition text-lg py-2 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/profile"
                className="text-white hover:text-orange-400 transition text-lg py-2 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Profile
              </Link>
              <Link
                href="/exhibitions"
                className="text-white hover:text-orange-400 transition text-lg py-2 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Exhibitions
              </Link>
              <Link
                href="/teaching-experience"
                className="text-white hover:text-orange-400 transition"
              >
                Teaching Experience
              </Link>

              {/* Mobile Projects Dropdown */}
              <div className="space-y-3">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center justify-between text-white hover:text-orange-400 transition text-lg w-full text-left py-2 border-b border-white/10"
                >
                  Projects
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-32" : "max-h-0"
                  }`}
                >
                  <div className="pl-4 space-y-3">
                    <Link
                      href="/womenifesto"
                      className="block text-white/80 hover:text-orange-400 transition py-1"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      Wemend Womenifesto
                    </Link>
                    <Link
                      href="/death-of-booti"
                      className="block text-white/80 hover:text-orange-400 transition py-1"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      Death of Booti
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Footer */}
            <div className="p-6 border-t border-white/20">
              <a
                href="https://tanka.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-3 border border-white text-white rounded-full bg-black/50 hover:bg-white hover:text-black transition text-lg w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tanka <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
