"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Assignment 8 Project",
      subtitle: "Full-Stack Web Application built with Next.js & Tailwind CSS",
      tag: "FULL STACK",
      image: "https://bongodorshon.com/wp-content/uploads/2026/08/old_university.jpg",
      techIcons: [
        { label: "N", bg: "bg-black text-white" },
        { label: "JS", bg: "bg-[#f7df1e] text-black font-extrabold" },
        { label: "⚛", bg: "bg-[#0d151c] text-cyan-400" },
      ],
      extraTech: "+3 MORE",
      liveUrl: "https://assignment-8-next-projects.vercel.app/",
    },
    {
      title: "Assignment 9 Project",
      subtitle: "Interactive Multi-feature Application with Seamless User Experience",
      tag: "FULL STACK",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
      techIcons: [
        { label: "N", bg: "bg-black text-white" },
        { label: "⚛", bg: "bg-[#0d151c] text-cyan-400" },
        { label: "ex", bg: "bg-[#160e0a] text-zinc-300 font-mono" },
      ],
      extraTech: "+2 MORE",
      liveUrl: "https://assigment-9-perject.vercel.app/",
    },
    {
      title: "Books Management Platform",
      subtitle: "Digital Library and Book Showcase Management System",
      tag: "FULL STACK",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600&auto=format&fit=crop",
      techIcons: [
        { label: "N", bg: "bg-black text-white" },
        { label: "JS", bg: "bg-[#f7df1e] text-black font-extrabold" },
        { label: "≈", bg: "bg-[#09151e] text-sky-400" },
      ],
      extraTech: "+4 MORE",
      liveUrl: "https://books-project-snowy.vercel.app/",
    },
  ];

  return (
    <section 
      id="projects" 
      className="relative min-h-screen py-24 bg-[#080504] text-white px-6 md:px-12 overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-[#ff5722]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff5722]">
                MY PROJECTS
              </span>
              <span className="w-8 h-[1.5px] bg-[#ff5722]/60"></span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
            >
              Projects That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7a00] to-[#ff3d00]">
                Speak For Themselves.
              </span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="https://github.com/rimonSHM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-[#ff5722] transition-colors group"
            >
              VIEW ALL PROJECTS
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-[#0f0a07] border border-white/10 p-4 flex flex-col justify-between hover:border-[#ff5722]/50 hover:shadow-[0_10px_30px_rgba(255,87,34,0.15)] transition-all duration-300 group relative"
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-20 rounded-3xl"
                aria-label={`Open ${project.title}`}
              />

              <div>
                {/* Browser Frame Preview */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#18110c] border border-white/5 mb-5">
                  <div className="absolute top-0 left-0 right-0 h-6 bg-[#160f0b]/90 backdrop-blur-md px-3 flex items-center justify-between z-10 border-b border-white/5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500/80"></span>
                      <span className="w-2 h-2 rounded-full bg-amber-500/80"></span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500/80"></span>
                    </div>
                    <span className="text-[9px] font-semibold tracking-wider text-zinc-400 bg-black/40 px-2 py-0.5 rounded-full border border-white/5">
                      {project.tag}
                    </span>
                  </div>

                  {/* Screenshot Image */}
                  <div className="w-full h-full pt-6 relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="px-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#ff7a00] transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-[#ff5722] transition-colors" />
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1.5 line-clamp-2 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              <div className="px-2 pt-6">
                {/* Tech Pills */}
                <div className="flex items-center gap-2 mb-5 pb-5 border-b border-white/5">
                  {project.techIcons.map((tech, i) => (
                    <div
                      key={i}
                      className={`w-6 h-6 rounded-md border border-white/10 flex items-center justify-center text-[10px] ${tech.bg}`}
                    >
                      {tech.label}
                    </div>
                  ))}
                  <span className="text-[10px] font-semibold text-zinc-500 ml-1">
                    {project.extraTech}
                  </span>
                </div>

                {/* Bottom Action Footer */}
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-400">
                  <span className="flex items-center gap-1.5 group-hover:text-[#ff5722] transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                    LIVE PROJECT
                  </span>

                  <span className="flex items-center gap-1 group-hover:text-white transition-colors">
                    OPEN PREVIEW
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}