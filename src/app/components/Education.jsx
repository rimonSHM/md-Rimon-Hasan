"use client";

import { motion } from "framer-motion";
import { GraduationCap, Terminal, MapPin, Calendar } from "lucide-react";

export default function Education() {
  const academicData = [
    {
      category: "ACADEMIC EDUCATION",
      title: "Ranigonj 2nd B.L High School, and College, Dinajpur",
      institution: "Dinajpur Polytechnic Institute, Bangladesh",
      year: "2022 - 2026",
      icon: <GraduationCap className="w-5 h-5 text-[#ff5722]" />,
      bgWatermark: <GraduationCap className="w-44 h-44 text-white/[0.02] -rotate-12 absolute -right-6 -bottom-6 pointer-events-none" />,
    },
  ];

  const certificationData = [
    {
      category: "PROFESSIONAL TRAINING",
      title: "Complete Web Development Course (MERN Stack, Batch 13)",
      institution: "Programming Hero",
      year: "2025 - 2026",
      icon: <Terminal className="w-5 h-5 text-[#ff5722]" />,
      bgWatermark: <Terminal className="w-44 h-44 text-white/[0.02] rotate-6 absolute -right-6 -bottom-6 pointer-events-none" />,
    },
  ];

  return (
    <section 
      id="education" 
      className="relative py-24 bg-[#080504] text-white px-6 md:px-12 overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#ff5722]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff5722]">
              MY EDUCATION
            </span>
            <span className="w-8 h-[1.5px] bg-[#ff5722]/60"></span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            Academic <span className="text-[#ff6a3d]">Background.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 text-xs sm:text-sm mt-3"
          >
            A foundation in computer technology, followed by self-directed specialization in modern web engineering.
          </motion.p>
        </div>

        <div className="space-y-12">
          
          {/* 1. Academic Education Card */}
          <div className="space-y-4">
            {academicData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="relative rounded-2xl bg-[#0f0a07] border border-white/5 p-6 sm:p-8 flex items-start gap-5 hover:border-[#ff5722]/40 hover:shadow-[0_8px_30px_rgba(255,87,34,0.08)] transition-all duration-300 group overflow-hidden"
              >
                {/* Background Watermark Icon */}
                {item.bgWatermark}

                {/* Left Mini Icon Box */}
                <div className="p-3 rounded-xl bg-[#1a100a] border border-white/5 shrink-0 group-hover:border-[#ff5722]/40 transition-colors">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="space-y-2 relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#ff5722] bg-[#221008] px-2.5 py-0.5 rounded-full border border-[#ff5722]/20">
                    {item.category}
                  </span>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-zinc-100 transition-colors">
                    {item.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-zinc-400 font-medium pt-1">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      {item.institution}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      {item.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 2. Courses & Certifications Sub-heading & Card */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff5722]">
                COURSES &amp; CERTIFICATIONS
              </span>
              <span className="w-8 h-[1.5px] bg-[#ff5722]/60"></span>
            </motion.div>

            {certificationData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="relative rounded-2xl bg-[#0f0a07] border border-white/5 p-6 sm:p-8 flex items-start gap-5 hover:border-[#ff5722]/40 hover:shadow-[0_8px_30px_rgba(255,87,34,0.08)] transition-all duration-300 group overflow-hidden"
              >
                {/* Background Watermark Icon */}
                {item.bgWatermark}

                {/* Left Mini Icon Box */}
                <div className="p-3 rounded-xl bg-[#1a100a] border border-white/5 shrink-0 group-hover:border-[#ff5722]/40 transition-colors">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="space-y-2 relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#ff5722] bg-[#221008] px-2.5 py-0.5 rounded-full border border-[#ff5722]/20">
                    {item.category}
                  </span>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-zinc-100 transition-colors">
                    {item.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-zinc-400 font-medium pt-1">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      {item.institution}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      {item.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}