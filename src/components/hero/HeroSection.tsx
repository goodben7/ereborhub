"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Cloud, Code } from "lucide-react";
import { useRef } from "react";
import { BackgroundSquares } from "./BackgroundSquares";
import type { HeroDictionary } from "@/lib/dictionaries";

export function HeroSection({ locale, dict }: { locale: string; dict: HeroDictionary }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Modern Background Squares System */}
      <BackgroundSquares />

      {/* Background Glows - Optimized for Mobile */}
      <div className="absolute top-0 left-[-10%] md:left-1/4 w-[280px] h-[280px] lg:w-[500px] lg:h-[500px] bg-primary/10 rounded-full blur-[80px] lg:blur-[120px] animate-glow pointer-events-none opacity-60 lg:opacity-100" />
      <div className="absolute bottom-0 right-[-10%] md:right-1/4 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] bg-accent/10 rounded-full blur-[70px] lg:blur-[100px] animate-glow animate-delay-2000 pointer-events-none opacity-50 lg:opacity-100" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="text-left">

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-8"
            >
              {dict.title} <br />
              <span className="text-primary text-glow">{dict.subtitle}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl text-slate-500 max-w-xl leading-relaxed mb-10"
            >
              {dict.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href={`/${locale}/contact`}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-primary text-white font-bold text-lg shadow-2xl shadow-primary/25 hover:bg-primary/95 transition-all hover:scale-[1.02] active:scale-[0.98]"
                aria-label={dict.cta_primary}
              >
                {dict.cta_primary}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={`/${locale}/projects`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white border border-slate-200 text-slate-600 font-bold text-lg hover:bg-slate-50 transition-all hover:border-slate-300 shadow-sm"
                aria-label={dict.cta_secondary}
              >
                {dict.cta_secondary}
              </Link>
            </motion.div>
          </div>

          {/* ── FLOATING UI ECOSYSTEM ───────────────────────── */}
          <div className="relative h-[600px] lg:h-[700px] hidden lg:block perspective-1000">

            {/* SVG Connecting Flow Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 600" fill="none">
              <motion.path
                d="M380 150 Q 250 300 120 450"
                stroke="url(#flowGradient)"
                strokeWidth="2"
                strokeDasharray="10 10"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.2 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
            </svg>

            {/* Card 1: Digital Identity (Top Right) */}
            <motion.div
              style={{ y: y1, rotateX: 5, rotateY: -10 }}
              initial={{ opacity: 0, x: 40, y: 0 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05, rotateX: 0, rotateY: 0, z: 50 }}
              transition={{ duration: 1, delay: 0.4, type: "spring" }}
              className="absolute top-10 right-0 w-[340px] bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[2rem] p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] z-20"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Shield className="text-primary w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-lg tracking-tight">{dict.labels.digital_identity}</h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{dict.labels.global_protocol}</p>
                  </div>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping" />
              </div>

              <div className="space-y-5">
                <div className="flex justify-between items-end">
                  <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider">{dict.labels.verification_trust}</span>
                  <span className="text-2xl font-black text-primary tabular-nums">98.4%</span>
                </div>
                <div className="h-3 w-full bg-slate-100/50 rounded-full overflow-hidden border border-slate-200/50 p-0.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "98.4%" }}
                    transition={{ duration: 2, delay: 1, ease: "circOut" }}
                    className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                  />
                </div>
                <div className="flex gap-1.5 pt-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-1.5 flex-1 bg-blue-500/10 rounded-full" />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Card 2: Infra Scale (Bottom Left) */}
            <motion.div
              style={{ y: y2, rotateX: -5, rotateY: 15 }}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05, rotateX: 0, rotateY: 0, z: 50 }}
              transition={{ duration: 1, delay: 0.6, type: "spring" }}
              className="absolute bottom-10 left-[-40px] w-[320px] bg-[#020617] rounded-[2rem] p-8 shadow-[0_40px_100px_-20px_rgba(2,6,23,0.5)] border border-white/10 z-20"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                  <Cloud className="text-emerald-400 w-7 h-7" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-black text-white text-lg tracking-tight">{dict.labels.infra_scale}</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <div className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </div>
                    <div className="relative overflow-hidden px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 group/badge">
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest relative z-10">
                        {dict.labels.multi_region_active}
                      </span>
                      {/* Animated scanning glow */}
                      <motion.div
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent skew-x-12"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.15
                    }}
                    className="h-10 bg-white/5 rounded-xl border border-white/5"
                  />
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{dict.labels.server_load}</span>
              </div>
            </motion.div>

            {/* Card 3: Engineering Kernel (Center) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1, rotate: [-1, 1, -1] }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-5 shadow-[0_50px_100px_-20px_rgba(0,0,80,0.2)] border border-blue-100 z-30"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                  <Code className="text-white w-5 h-5" strokeWidth={2.5} />
                </div>
                <div className="pr-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-black text-slate-900 tracking-tight">{dict.labels.core_engine}</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-bold mt-0.5 tracking-wide flex items-center gap-1">
                    {dict.labels.optimized_runtime}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
