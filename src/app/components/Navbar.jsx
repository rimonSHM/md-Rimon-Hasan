"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("HOME");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const nextMode = !prev;
      if (nextMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return nextMode;
    });
  };

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-[999] transition-all duration-300 ${
        isDarkMode
          ? isScrolled
            ? "bg-[#0b0705]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/60"
            : "bg-[#0b0705] border-b border-white/5"
          : isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-md"
          : "bg-white border-b border-zinc-100"
      }`}
    >
      {/* ফিক্সড স্লিম হাইট: h-16 (64px) */}
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <Link 
          href="/" 
          className={`text-xl md:text-2xl font-serif italic tracking-wide flex items-center gap-1 group transition-colors ${
            isDarkMode ? "text-white" : "text-zinc-900"
          }`}
        >
          Rimon 
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff5722] inline-block group-hover:scale-125 transition-transform"></span>
        </Link>

        {/* Center Capsule Nav */}
        <div 
          className={`hidden md:flex items-center gap-1 rounded-full p-1 transition-colors ${
            isDarkMode
              ? "bg-[#18110b] border border-white/10"
              : "bg-zinc-100 border border-zinc-200"
          }`}
        >
          {navLinks.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                className={`px-4 py-1 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-[#2d1a10] text-[#ff6a3d] border border-[#ff5722]/40 shadow-sm"
                    : isDarkMode
                    ? "text-zinc-400 hover:text-white hover:bg-white/5"
                    : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2 rounded-full border transition-all cursor-pointer ${
              isDarkMode
                ? "text-zinc-400 hover:text-white hover:bg-white/10 border-transparent hover:border-white/10"
                : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 border-transparent hover:border-zinc-300"
            }`}
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-[#ff8f00]" />
            ) : (
              <Moon className="w-4 h-4 text-amber-500" />
            )}
          </button>

          <Link
            href="#contact"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-[#ff5722] to-[#ff7a00] text-white text-xs font-bold tracking-wider uppercase shadow-md shadow-[#ff5722]/30 hover:brightness-110 active:scale-95 transition-all"
          >
            Let&apos;s Connect
          </Link>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-1.5 transition-colors cursor-pointer ${
              isDarkMode ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-zinc-950"
            }`}
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-[#ff8f00]" /> : <Moon className="w-5 h-5 text-amber-500" />}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className={`p-1.5 transition-colors cursor-pointer ${
              isDarkMode ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-zinc-950"
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div 
          className={`md:hidden border-b px-6 py-4 flex flex-col gap-2.5 transition-colors ${
            isDarkMode
              ? "bg-[#0b0705] border-white/10"
              : "bg-white border-zinc-200"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveTab(link.name);
                setIsOpen(false);
              }}
              className={`text-sm font-semibold tracking-wider uppercase py-1.5 px-3 rounded-lg transition-colors ${
                activeTab === link.name
                  ? "bg-[#2d1a10] text-[#ff6a3d]"
                  : isDarkMode
                  ? "text-zinc-300 hover:bg-white/5"
                  : "text-zinc-700 hover:bg-zinc-100"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-2 rounded-full bg-[#ff5722] text-white text-xs font-bold tracking-wider uppercase mt-1 shadow-md"
          >
            Let&apos;s Connect
          </Link>
        </div>
      )}
    </header>
  );
}