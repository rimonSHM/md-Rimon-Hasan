"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setTime(now.toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-[#080504] border-t border-white/5 text-zinc-400 text-xs pt-16 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link 
              href="/" 
              className="text-2xl font-serif italic text-white flex items-center gap-1 group w-fit"
            >
              Rimon
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5722] inline-block group-hover:scale-125 transition-transform" />
            </Link>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Building modern full-stack web applications. Passionate about intuitive frontend experiences, clean UI, and robust MERN stack applications.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <Link
                href="https://github.com/rimonSHM"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-[#140d09] border border-white/5 text-zinc-400 hover:text-white hover:border-[#ff5722]/40 transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/in/md-rimon-hassan-476754361/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-[#140d09] border border-white/5 text-zinc-400 hover:text-white hover:border-[#ff5722]/40 transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#ff5722] block">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-[11px] font-semibold tracking-wider uppercase">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-white transition-colors">
                  SKILLS
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-white transition-colors">
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link href="#education" className="hover:text-white transition-colors">
                  EXPERIENCE
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Stack */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#ff5722] block">
              CORE STACK
            </span>
            <ul className="space-y-2 text-[11px] font-semibold tracking-wider uppercase">
              <li className="text-zinc-300">REACT / NEXT.JS</li>
              <li className="text-zinc-300">NODE.JS / EXPRESS</li>
              <li className="text-zinc-300">MONGODB / MONGOOSE</li>
              <li className="text-zinc-300">TAILWIND CSS</li>
            </ul>
          </div>

          {/* Let's Connect & Location Card */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#ff5722] block">
              LET&apos;S CONNECT
            </span>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Open to junior-to-intermediate full-stack roles, freelance opportunities, and collaborative web projects.
            </p>

            {/* Time / Location Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#160f0a] border border-white/5 text-[10px] font-mono tracking-wider text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-[#ff5722] animate-pulse" />
              <span>DINAJPUR — {time || "09:41 PM"} GMT+6</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-semibold tracking-wider text-zinc-500 uppercase">
          <p>
            &copy; 2026 MD. RIMON HASAN. HANDCRAFTED WITH LOVE AND CODE.
          </p>

          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-zinc-300 transition-colors">
              DATA PRIVACY
            </Link>
            <Link href="#" className="hover:text-zinc-300 transition-colors">
              TERMS OF SERVICE
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}