"use client";

import Image from "next/image";
import Link from "next/link";
import { Layout, Server, Database, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const highlights = [
    {
      icon: <Layout className="w-5 h-5 text-[#ff5722]" />,
      title: "CLEAN FRONTEND UI",
      desc: "Crafting semantic interfaces, responsive layouts, and fluid state management using React, Next.js, and Tailwind CSS.",
    },
    {
      icon: <Server className="w-5 h-5 text-[#ff5722]" />,
      title: "STRUCTURED API WORKFLOWS",
      desc: "Architecting modular server routing, efficient middleware, and secure endpoints with Node.js and Express.",
    },
    {
      icon: <Database className="w-5 h-5 text-[#ff5722]" />,
      title: "SAFE DATABASE SYSTEMS",
      desc: "Designing reliable NoSQL collections, optimized MongoDB schemas, and efficient query pipelines for high-performance data handling.",
    },
  ];

  return (
    <section 
      id="about" 
      className="relative min-h-screen py-24 bg-[#080504] text-white overflow-hidden px-6 md:px-12"
    >
      {/* Background Subtle Orange Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#ff5722]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Image Card with Floating & Tilt Animation */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center sticky top-24"
          >
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-full max-w-md aspect-[4/5] rounded-3xl p-3 bg-[#110b08]/80 border border-white/10 shadow-2xl backdrop-blur-sm group cursor-pointer"
            >
              {/* Outer Decorative Glow Border */}
              <div className="absolute inset-0 rounded-3xl border border-[#ff5722]/20 transition-all duration-500 group-hover:border-[#ff5722]/60 group-hover:shadow-[0_0_30px_rgba(255,87,34,0.25)] pointer-events-none" />

              {/* Inner Image Container */}
              <div className="w-full h-full rounded-2xl overflow-hidden relative bg-[#18110c]">
                <Image
                  src="/rimon.jpg"
                  alt="Md Rimon Hasan"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-center filter brightness-95 contrast-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Code Background Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080504] via-transparent to-transparent opacity-60" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 flex flex-col space-y-7">
            
            {/* Section Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff5722]">
                ABOUT ME
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
            >
              Turning complex logic into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                seamless experiences.
              </span>
            </motion.h2>

            {/* Paragraphs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed"
            >
              <p>
                My programming journey began with a deep curiosity about how the web works. After establishing a strong foundation through intensive development bootcamps, I focused on accelerating my growth by building real-world projects through consistent, daily coding. I have developed a strong practical command of the MERN Stack—specifically JavaScript, Next.js, React, Node.js, Express.js, and MongoDB.
              </p>
              <p>
                I specialize in architecting responsive, accessible, and scalable web applications that solve practical problems. Whether crafting clean front-end interfaces or engineering robust back-end APIs, my core focus is always on writing maintainable code that delivers a truly seamless and frustration-free experience for users.
              </p>
            </motion.div>

            {/* Quote Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative p-5 rounded-xl bg-[#140c08]/80 border-l-4 border-[#ff5722] border-y border-r border-white/5 shadow-md"
            >
              <p className="italic text-zinc-300 text-sm leading-relaxed font-serif">
                &ldquo;I believe that writing quality software requires a relentless commitment to consistency, continuous learning, and a disciplined approach to solving meaningful problems.&rdquo;
              </p>
            </motion.div>

            {/* Outside of Coding Text */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-zinc-400 text-xs sm:text-sm leading-relaxed"
            >
              Outside of programming, I enjoy exploring new tech gadgets, discovering music, and diving into tech blogs. These activities help me stay creative and maintain a healthy work-life balance.
            </motion.p>

            {/* Feature / Highlight Cards with Stagger Animation */}
            <div className="space-y-3.5 pt-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 * index }}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#140d09]/60 border border-white/5 hover:border-[#ff5722]/40 hover:bg-[#1a110c] transition-all duration-300 group cursor-pointer"
                >
                  <motion.div 
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="p-2 rounded-lg bg-[#20130d] border border-white/5 group-hover:border-[#ff5722]/50 transition-colors shrink-0"
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#ff7a00] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-3"
            >
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#ff5722] to-[#ff7a00] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-[#ff5722]/25 hover:brightness-110 active:scale-95 transition-all group"
              >
                Read My Full Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}