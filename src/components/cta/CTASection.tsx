"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import type { CtaDictionary } from "@/lib/dictionaries";

export function CTASection({ locale, dict }: { locale: string; dict: CtaDictionary }) {
  return (
    <section className="py-24 relative overflow-hidden bg-white" id="cta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[3.5rem] bg-[#010314] px-8 py-24 sm:px-20 text-center shadow-[0_40px_80px_-20px_rgba(1,3,20,0.4)]"
        >
          {/* — Background Elements — */}

          {/* Deep Gradient Base */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#010314] via-[#050a24] to-[#010314]" />

          {/* Technical Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px"
            }}
          />

          {/* Ambient Glowing Orbs */}
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
          <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/5 blur-[100px] pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-[1.05]">
              {dict.title_prefix} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-cyan-400 italic">
                {dict.title_highlight}
              </span>.
            </h2>

            <p className="text-slate-400 text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              {dict.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href={`/${locale}/contact`}
                className="group relative w-full sm:w-auto overflow-hidden rounded-2xl"
              >
                {/* Button Glow */}
                <div className="absolute inset-0 bg-primary/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-center justify-center gap-3 px-10 py-5 bg-white text-[#010314] font-black text-xl transition-all duration-300 group-hover:bg-slate-50 group-hover:scale-[1.03] active:scale-95 shadow-xl">
                  {dict.primary_button}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300" strokeWidth={3} />
                </div>
              </Link>

              <a
                href="mailto:hello@ereborhub.cloud"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Mail className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                {dict.secondary_button}
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
