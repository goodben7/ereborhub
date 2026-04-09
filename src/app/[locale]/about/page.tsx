"use client";

import { use } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  ShieldCheck,
  Heart,
  ArrowRight,
  Eye,
  Zap,
  MapPin
} from "lucide-react";
import Link from "next/link";
import { getDictionaryByLocale } from "@/lib/client-dictionaries";

const AnimatedHeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3], x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2], x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-30%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen"
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <motion.div
        animate={{ y: ["-100%", "200%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute left-[20%] top-0 w-[1px] h-[200px] bg-gradient-to-b from-transparent via-cyan-400/80 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.8)]"
      />
      <motion.div
        animate={{ y: ["-100%", "200%"] }}
        transition={{ duration: 10, delay: 1, repeat: Infinity, ease: "linear" }}
        className="absolute left-[50%] top-0 w-[2px] h-[400px] bg-gradient-to-b from-transparent via-primary/40 to-transparent shadow-[0_0_15px_rgba(56,189,248,0.5)]"
      />
      <motion.div
        animate={{ y: ["-100%", "300%"] }}
        transition={{ duration: 14, delay: 3, repeat: Infinity, ease: "linear" }}
        className="absolute right-[30%] top-0 w-[1px] h-[150px] bg-gradient-to-b from-transparent via-indigo-400/60 to-transparent shadow-[0_0_10px_rgba(129,140,248,0.6)]"
      />
    </div>
  );
};

export default function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = use(params);
  const locale = rawLocale as "en" | "fr";
  const dict = getDictionaryByLocale(locale);
  const pageDict = dict.about_page;

  const values = [
    {
      icon: Target,
      color: "text-blue-500",
    },
    {
      icon: Eye,
      color: "text-indigo-500",
    },
    {
      icon: Heart,
      color: "text-violet-500",
    },
    {
      icon: ShieldCheck,
      color: "text-sky-500",
    },
  ];

  const stats = pageDict.mission.stats.map((stat, index) => ({
    ...stat,
    icon: [Zap, Users, MapPin, ShieldCheck][index],
  }));

  const team = pageDict.team.members.map((member, index) => ({
    ...member,
    gradient: [
      "from-blue-700 to-indigo-600",
      "from-sky-600 to-blue-500",
      "from-indigo-700 to-violet-600",
      "from-violet-600 to-purple-500",
    ][index],
  }));
  return (
    <div className="bg-white min-h-screen">

      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative bg-[#010314] pt-32 pb-28 lg:pt-44 lg:pb-36 overflow-hidden border-b border-white/5">
        <AnimatedHeroBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.08]"
          >
            {pageDict.hero.title_prefix}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
              {pageDict.hero.title_highlight}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            {pageDict.hero.description}
          </motion.p>
        </div>
      </section>

      {/* ── MISSION + STATS ──────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
                {pageDict.mission.title_prefix}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                  {pageDict.mission.title_highlight}
                </span>
              </h2>
              <div className="space-y-4 text-slate-500 text-lg leading-relaxed">
                {pageDict.mission.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="grid grid-cols-2 gap-5"
            >
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="group relative bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                      <Icon className="w-5 h-5 text-blue-600" strokeWidth={1.75} />
                    </div>
                    <div className="text-4xl font-black text-slate-900 tracking-tight mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-slate-500">{stat.label}</div>
                    {/* Accent bar */}
                    <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-primary to-cyan-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </motion.div>
                );
              })}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────── */}
      <section className="relative py-32 bg-[#010314] overflow-hidden">

        {/* — Floating Orbs — */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.12, 0.06], x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-15%] left-[-5%] w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px] pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.09, 0.04], x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 18, delay: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] right-[-5%] w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[130px] pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.07, 0.03] }}
          transition={{ duration: 10, delay: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500 rounded-full blur-[100px] pointer-events-none"
        />

        {/* — Circuit SVG Lines — */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(56,189,248,0)" />
                <stop offset="50%" stopColor="rgba(56,189,248,0.5)" />
                <stop offset="100%" stopColor="rgba(56,189,248,0)" />
              </linearGradient>
              <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(129,140,248,0)" />
                <stop offset="50%" stopColor="rgba(129,140,248,0.4)" />
                <stop offset="100%" stopColor="rgba(129,140,248,0)" />
              </linearGradient>
              <linearGradient id="lineGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(34,211,238,0)" />
                <stop offset="50%" stopColor="rgba(34,211,238,0.35)" />
                <stop offset="100%" stopColor="rgba(34,211,238,0)" />
              </linearGradient>
            </defs>

            {/* Horizontal scanning lines */}
            <motion.line x1="0" y1="30%" x2="100%" y2="30%"
              stroke="url(#lineGrad1)" strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
            <motion.line x1="0" y1="70%" x2="100%" y2="70%"
              stroke="url(#lineGrad2)" strokeWidth="0.8"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
            />

            {/* Vertical dotted lines at card boundaries */}
            {["25%", "50%", "75%"].map((x, idx) => (
              <motion.line key={x} x1={x} y1="0" x2={x} y2="100%"
                stroke="url(#lineGrad3)" strokeWidth="0.6" strokeDasharray="4 12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.8 + idx * 0.2 }}
              />
            ))}

            {/* Animated traveling dot on horizontal line */}
            <motion.circle r="3" cy="30%" fill="rgba(56,189,248,0.9)"
              filter="drop-shadow(0 0 6px rgba(56,189,248,0.9))"
              animate={{ cx: ["0%", "100%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
            />
            <motion.circle r="2.5" cy="70%" fill="rgba(129,140,248,0.9)"
              filter="drop-shadow(0 0 6px rgba(129,140,248,0.9))"
              animate={{ cx: ["100%", "0%"] }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
            />

            {/* Corner node dots */}
            {[[0, 0], [100, 0], [0, 100], [100, 100]].map(([cx, cy], idx) => (
              <motion.circle key={idx} cx={`${cx}%`} cy={`${cy}%`} r="3"
                fill="none" stroke="rgba(56,189,248,0.3)" strokeWidth="1"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 + idx * 0.2, duration: 0.5 }}
              />
            ))}
          </svg>
        </div>

        {/* — Floating Particles — */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { w: 2, h: 2, l: "10%", t: "20%", dur: 8, delay: 0 },
            { w: 3, h: 3, l: "85%", t: "15%", dur: 10, delay: 1 },
            { w: 2, h: 2, l: "60%", t: "80%", dur: 7, delay: 2 },
            { w: 4, h: 4, l: "30%", t: "60%", dur: 12, delay: 0.5 },
            { w: 2, h: 2, l: "70%", t: "40%", dur: 9, delay: 3 },
            { w: 3, h: 3, l: "20%", t: "75%", dur: 11, delay: 1.5 },
            { w: 2, h: 2, l: "90%", t: "55%", dur: 6, delay: 2.5 },
            { w: 3, h: 3, l: "45%", t: "10%", dur: 13, delay: 0.8 },
          ].map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-cyan-400"
              style={{ width: p.w, height: p.h, left: p.l, top: p.t, opacity: 0.4 }}
              animate={{ y: [0, -20, 0], opacity: [0.2, 0.7, 0.2], scale: [1, 1.4, 1] }}
              transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>

        {/* — Subtle grid — */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "48px 48px" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-24"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {pageDict.values.title_prefix}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                {pageDict.values.title_highlight}
              </span>
            </h2>
            <p className="mt-4 text-slate-400 text-lg max-w-xl mx-auto">
              {pageDict.values.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => {
              const item = pageDict.values.items[i];
              const Icon = val.icon;
              const accentColors: Record<string, string> = {
                "text-blue-500": "from-blue-500 to-cyan-400",
                "text-indigo-500": "from-indigo-500 to-blue-400",
                "text-violet-500": "from-violet-500 to-indigo-400",
                "text-sky-500": "from-sky-500 to-blue-400",
              };
              const gradient = accentColors[val.color] ?? "from-primary to-cyan-400";

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative bg-white/[0.03] border border-white/8 rounded-3xl p-8 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-400 overflow-hidden"
                >
                  {/* Large background number */}
                  <div className="absolute -top-3 -right-2 text-[7rem] font-black leading-none text-white/[0.03] select-none pointer-events-none group-hover:text-white/[0.06] transition-colors duration-500">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Corner accent glow */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-full`} />

                  {/* Icon with animated ring on hover */}
                  <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} p-[1px] mb-7`}>
                    <div className="w-full h-full rounded-2xl bg-[#060b1d] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                    </div>
                    <motion.div
                      className={`absolute -inset-[3px] rounded-[18px] bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-30 blur-sm`}
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    />
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>

                  {/* Animated bottom line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>



      {/* ── TEAM ─────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              {pageDict.team.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Avatar */}
                <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-2xl font-black mb-5 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  {member.initials}
                  {/* Halo ring */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500`} />
                </div>

                <h3 className="text-base font-extrabold text-slate-900 mb-1 tracking-tight">{member.name}</h3>
                <p className="text-xs font-bold text-primary mb-3 uppercase tracking-wider">{member.role}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{member.description}</p>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-8 right-8 h-[2px] rounded-full bg-gradient-to-r ${member.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ────────────────────────────── */}
      <section className="relative py-28 bg-[#010314] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#010314] via-[#050a24] to-[#010314] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >


            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
              {pageDict.cta.title_prefix} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-cyan-400">
                {pageDict.cta.title_highlight}
              </span>
            </h2>

            <p className="text-slate-400 text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              {pageDict.cta.description}
            </p>

            <Link
              href={`/${locale}/contact`}
              className="group relative inline-flex items-center justify-center"
            >
              {/* Button Glow */}
              <div className="absolute inset-0 bg-primary/40 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex items-center gap-3 px-10 py-5 bg-white text-slate-950 rounded-2xl font-black text-xl hover:bg-white hover:scale-[1.03] active:scale-95 transition-all duration-300 shadow-[0_20px_40px_-10px_rgba(34,211,238,0.3)]">
                {pageDict.cta.button}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300" strokeWidth={3} />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
