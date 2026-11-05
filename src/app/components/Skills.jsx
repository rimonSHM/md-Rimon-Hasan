"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const toolset = [
    {
      category: "FRONTEND",
      icon: "< >",
      skills: [
        { name: "Next.js", icon: "N", bg: "bg-black", text: "text-white" },
        { name: "React.js", icon: "⚛", bg: "bg-[#0d151c]", text: "text-cyan-400" },
        { name: "Tailwind CSS", icon: "≈", bg: "bg-[#09151e]", text: "text-sky-400" },
        { name: "JavaScript", icon: "JS", bg: "bg-[#252009]", text: "text-[#f7df1e]" },
        { name: "TypeScript", icon: "TS", bg: "bg-[#0e1726]", text: "text-[#3178c6]" },
        { name: "HTML5/CSS3", icon: "5", bg: "bg-[#24110b]", text: "text-[#e34f26]" },
        { name: "Framer Motion", icon: "▲", bg: "bg-[#1f0f29]", text: "text-fuchsia-400" },
      ],
    },
    {
      category: "BACKEND",
      icon: "⚙",
      skills: [
        { name: "Node.js", icon: "⬡", bg: "bg-[#0c180e]", text: "text-emerald-500" },
        { name: "Express.js", icon: "ex", bg: "bg-[#18110c]", text: "text-zinc-300 font-mono" },
        { name: "REST APIs", icon: "⚏", bg: "bg-[#0c1622]", text: "text-blue-400" },
        { name: "JWT Auth", icon: "❋", bg: "bg-[#1a0f1b]", text: "text-pink-400" },
        { name: "Middleware", icon: "≡", bg: "bg-[#211208]", text: "text-orange-400" },
      ],
    },
    {
      category: "DATABASE",
      icon: "🗄",
      skills: [
        { name: "MongoDB", icon: "🍃", bg: "bg-[#0b170e]", text: "text-emerald-400" },
        { name: "Mongoose", icon: "🦡", bg: "bg-[#1d0d0b]", text: "text-red-400" },
        { name: "MySQL", icon: "🐬", bg: "bg-[#0d1622]", text: "text-cyan-500" },
      ],
    },
    {
      category: "TOOLS & DEPLOYMENT",
      icon: "🔧",
      skills: [
        { name: "Git", icon: "ᛦ", bg: "bg-[#220e0a]", text: "text-[#f05032]" },
        { name: "GitHub", icon: "🐙", bg: "bg-[#141414]", text: "text-white" },
        { name: "Vercel", icon: "▲", bg: "bg-black", text: "text-white" },
        { name: "Netlify", icon: "💠", bg: "bg-[#0a1818]", text: "text-teal-400" },
        { name: "npm", icon: "npm", bg: "bg-[#230909]", text: "text-red-500 font-black text-[10px]" },
        { name: "Yarn", icon: "🧶", bg: "bg-[#0c1622]", text: "text-blue-400" },
        { name: "VS Code", icon: "⚡", bg: "bg-[#081524]", text: "text-sky-500" },
        { name: "Postman", icon: "🚀", bg: "bg-[#24130a]", text: "text-orange-500" },
        { name: "DevTools", icon: "⚙", bg: "bg-[#12161b]", text: "text-zinc-400" },
      ],
    },
  ];

  return (
    <section 
      id="skills" 
      className="relative min-h-screen py-24 bg-[#080504] text-white px-6 md:px-12 overflow-hidden"
    >
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff5722]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center sm:text-left mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 justify-center sm:justify-start"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff5722]">
              MY TOOLSET
            </span>
            <span className="w-10 h-[1.5px] bg-[#ff5722]/60"></span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-3"
          >
            Languages &amp;{" "}
            <span className="text-[#ff6a3d]">Frameworks.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 text-sm mt-3"
          >
            An honest overview of my technological focus and everyday tech stack.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {toolset.map((group, groupIdx) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: groupIdx * 0.1 }}
              className="space-y-4"
            >
              {/* Category Title Badge */}
              <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-zinc-400">
                <span className="text-zinc-500 font-mono">{group.icon}</span>
                <span>{group.category}</span>
              </div>

              {/* Skill Cards Flow */}
              <div className="flex flex-wrap gap-3.5">
                {group.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIdx * 0.04 }}
                    whileHover={{ y: -6, scale: 1.05 }}
                    className="flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#110b08]/80 border border-white/5 hover:border-[#ff5722]/50 hover:shadow-[0_8px_25px_rgba(255,87,34,0.15)] transition-all duration-300 group cursor-pointer"
                  >
                    {/* Inner Icon Box */}
                    <div 
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-base sm:text-lg font-bold border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-inner ${skill.bg} ${skill.text}`}
                    >
                      {skill.icon}
                    </div>

                    {/* Skill Name */}
                    <span className="text-[10px] sm:text-[11px] font-medium text-zinc-400 group-hover:text-white transition-colors mt-2 text-center px-1 truncate w-full">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}