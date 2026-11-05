import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-[#080504] text-white px-6 md:px-12 py-16"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#ff5722]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-72 h-72 bg-[#ff3d00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Info & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start gap-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#160f0b] border border-white/10 text-xs font-semibold tracking-wider uppercase text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available For Opportunities
          </div>

          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#ff5722]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff5722]">
              Web Developer
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15]">
            Building Fast & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7a00] to-[#ff3d00]">
              Scalable
            </span>{" "}
            <br />
            Web Applications.
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
            I&apos;m <span className="text-white font-medium">Rimon Hasan</span>, a Web Developer specializing in{" "}
            <span className="text-zinc-200"> JavaScript, Next.js, React, Node.js, Express.js,</span> and{" "}
            <span className="text-zinc-200">MongoDB</span>. I build fast, responsive, and scalable web applications with a strong focus on performance, clean architecture, and user experience.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-3">
            <Link
              href="#projects"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#ff5722] to-[#ff7a00] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-[#ff5722]/25 hover:brightness-110 active:scale-95 transition-all flex items-center gap-1.5"
            >
              View Projects
              <span className="text-sm font-mono">&lt;&gt;</span>
            </Link>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-full bg-[#18110c] hover:bg-[#231811] text-zinc-300 hover:text-white border border-white/10 text-xs font-bold tracking-wider uppercase transition-all active:scale-95 flex items-center gap-2"
            >
              Download Resume
              <Download className="w-4 h-4 text-zinc-400" />
            </a>
          </div>
        </div>

        {/* Right Column: Circular Avatar Frame & Interactive Floating Badges */}
        <div className="lg:col-span-5 flex justify-center items-center relative group">
          <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] rounded-full flex items-center justify-center">
            
            {/* Outer Orbit Line */}
            <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-[#ff5722]/30 transition-all duration-700 pointer-events-none"></div>

            {/* Glowing Orange Orbit Arc */}
            <div className="absolute inset-4 rounded-full border-2 border-transparent border-t-[#ff5722]/80 border-r-[#ff7a00]/30 -rotate-45 group-hover:rotate-12 transition-transform duration-1000 ease-out"></div>

            {/* Inner Dark Circular Frame & Profile Image */}
            <div className="w-[84%] h-[84%] rounded-full bg-gradient-to-b from-[#18120d] to-[#0d0907] border border-[#ff5722]/30 p-2 shadow-2xl shadow-[#ff5722]/10 group-hover:shadow-[#ff5722]/25 group-hover:border-[#ff5722]/60 transition-all duration-500 overflow-hidden relative flex items-end justify-center cursor-pointer">
              <Image
                src="/rimon.jpg"
                alt="Profile Image"
                width={400}
                height={400}
                priority
                className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Floating Tech Badges */}
            {/* Next.js Badge */}
            <div className="absolute top-8 right-16 w-9 h-9 rounded-full bg-[#120b08] border border-white/20 flex items-center justify-center text-xs font-black shadow-md cursor-pointer transition-all duration-300 ease-out group-hover:-translate-y-3 group-hover:translate-x-2 hover:scale-125 hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]">
              <span className="text-white text-[11px]">N</span>
            </div>

            {/* Express Badge */}
            <div className="absolute left-2 top-1/2 -translate-y-1/2 px-2.5 py-1.5 rounded-md bg-[#160e0a] border border-white/15 text-[11px] font-mono text-zinc-300 shadow cursor-pointer transition-all duration-300 ease-out group-hover:-translate-x-3 hover:scale-125 hover:border-white/50 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              ex
            </div>

            {/* React Badge */}
            <div className="absolute bottom-12 left-10 w-8 h-8 rounded-full bg-[#120b08] border border-[#ff5722]/40 flex items-center justify-center text-cyan-400 shadow cursor-pointer transition-all duration-300 ease-out group-hover:-translate-x-2 group-hover:translate-y-3 hover:scale-125 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]">
              <svg className="w-5 h-5 animate-[spin_8s_linear_infinite]" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="2" />
                <ellipse cx="12" cy="12" rx="7" ry="2.5" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(30 12 12)" />
                <ellipse cx="12" cy="12" rx="7" ry="2.5" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(90 12 12)" />
                <ellipse cx="12" cy="12" rx="7" ry="2.5" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(150 12 12)" />
              </svg>
            </div>

            {/* JavaScript Badge */}
            <div className="absolute right-4 bottom-1/3 w-8 h-8 rounded bg-[#f7df1e] text-black font-extrabold text-xs flex items-center justify-center shadow cursor-pointer transition-all duration-300 ease-out group-hover:translate-x-3 group-hover:-translate-y-2 hover:scale-125 hover:shadow-[0_0_20px_rgba(247,223,30,0.6)]">
              JS
            </div>

            {/* Node.js Badge */}
            <div className="absolute bottom-2 right-24 w-8 h-8 rounded-full bg-[#160e0a] border border-emerald-500/40 text-emerald-400 font-bold text-xs flex items-center justify-center shadow cursor-pointer transition-all duration-300 ease-out group-hover:translate-y-3 group-hover:translate-x-2 hover:scale-125 hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(52,211,153,0.5)]">
              ⬡
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}