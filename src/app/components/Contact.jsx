"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Try again!");
      }
    } catch {
      setStatus("Something went wrong!");
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 bg-[#080504] text-white px-6 md:px-12 overflow-hidden flex items-center justify-center"
    >
      {/* Background Glow */}
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#ff5722]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-left mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff5722]">
              GET IN TOUCH
            </span>
            <span className="w-8 h-[1.5px] bg-[#ff5722]/60" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
          >
            Let&apos;s Build Something <br />
            <span className="text-[#ff6a3d]">Awesome.</span>
          </motion.h2>
        </div>

        {/* Contact Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-[#0f0a07] border border-white/5 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl"
        >

          {/* Left Column: Form */}
          <div className="lg:col-span-7 p-8 sm:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs text-zinc-400 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-zinc-800 focus:border-[#ff5722] py-2 text-sm text-zinc-200 outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs text-zinc-400 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-zinc-800 focus:border-[#ff5722] py-2 text-sm text-zinc-200 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs text-zinc-400 font-medium">
                  Your Message
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Hi, I'd like to talk about..."
                  className="w-full bg-transparent border-b border-zinc-800 focus:border-[#ff5722] py-2 text-sm text-zinc-200 outline-none resize-none transition-colors"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={status === "Sending..."}
                  className="px-7 py-3 rounded-full bg-gradient-to-r from-[#ff5722] to-[#ff7a00] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-[#ff5722]/25 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  SEND MESSAGE
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {status && (
                <p
                  className={`text-xs mt-2 ${
                    status.includes("success")
                      ? "text-emerald-400"
                      : "text-amber-400"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* Right Column: Contact Details */}
          <div className="lg:col-span-5 p-8 sm:p-12 bg-gradient-to-br from-[#160e0a] to-[#0c0705] border-t lg:border-t-0 lg:border-l border-white/5 flex flex-col justify-between">

            <div className="space-y-8">

              {/* Header */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#ff5722]">
                  CONTACT INFO
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1b120c] border border-[#ff5722]/30 text-[10px] font-semibold tracking-wider uppercase text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  AVAILABLE FOR WORK
                </span>
              </div>

              <div className="space-y-6">

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-[#20130d] border border-white/5 text-[#ff5722] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block">
                      EMAIL
                    </span>
                    <a
                      href="mailto:rimon072159@gmail.com"
                      className="text-xs sm:text-sm text-zinc-300 hover:text-[#ff5722] transition-colors"
                    >
                      rimon072159@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-[#20130d] border border-white/5 text-[#ff5722] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block">
                      PHONE / WHATSAPP
                    </span>
                    <a
                      href="tel:+8801700000000"
                      className="text-xs sm:text-sm text-zinc-300 hover:text-[#ff5722] transition-colors"
                    >
                      +8801317420674
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-[#20130d] border border-white/5 text-[#ff5722] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block">
                      LOCATION
                    </span>
                    <span className="text-xs sm:text-sm text-zinc-300">
                      Dinajpur, Bangladesh
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-white/5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block mb-3">
                FOLLOW ME
              </span>

              <div className="flex items-center gap-3">

                {/* GitHub */}
                <Link
                  href="https://github.com/rimonSHM"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2.5 rounded-xl bg-[#20130d] border border-white/5 text-zinc-400 hover:text-white hover:border-[#ff5722]/40 transition-all"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
                  </svg>
                </Link>

                {/* LinkedIn */}
                <Link
                  href="https://www.linkedin.com/in/md-rimon-hassan-476754361/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 rounded-xl bg-[#20130d] border border-white/5 text-zinc-400 hover:text-white hover:border-[#ff5722]/40 transition-all"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
                  </svg>
                </Link>

                {/* Facebook */}
                <Link
                  href="https://web.facebook.com/md.rimon.hassan.398889"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-2.5 rounded-xl bg-[#20130d] border border-white/5 text-zinc-400 hover:text-white hover:border-[#ff5722]/40 transition-all flex items-center justify-center"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>

              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}