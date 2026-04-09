"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapPin, Mail, ArrowRight, Globe } from "lucide-react";
import { getDictionaryByLocale } from "@/lib/client-dictionaries";

const AnimatedHeroBackground = () => (
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
    <div className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
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

export default function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = use(params);
  const locale = rawLocale as "en" | "fr";
  const dict = getDictionaryByLocale(locale);
  const pageDict = dict.contact_page;

  return (
    <div className="bg-white min-h-screen">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative bg-[#010314] pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden border-b border-white/5">
        <AnimatedHeroBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.08]"
          >
            {pageDict.hero.title_prefix} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
              {pageDict.hero.title_highlight}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl text-slate-400 max-w-xl mx-auto leading-relaxed"
          >
            {pageDict.hero.description}
          </motion.p>
        </div>
      </section>

      {/* ── CONTACT BODY ─────────────────────────────── */}
      <section className="relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[420px_1fr]">

          {/* ── Left dark panel ────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-[#010314] overflow-hidden px-10 py-16 lg:py-24 flex flex-col justify-between border-r border-white/5"
          >
            {/* Tech Grid Background (Prolonged from header) */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                backgroundSize: '64px 64px'
              }}
            />

            {/* Scanning Lines (Prolonged from header) */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute left-[20%] top-0 w-[1px] h-[300px] bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent"
              />
              <motion.div
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 12, delay: 2, repeat: Infinity, ease: "linear" }}
                className="absolute left-[60%] top-0 w-[1px] h-[200px] bg-gradient-to-b from-transparent via-primary/30 to-transparent"
              />
            </div>

            {/* Subtle ambient glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/8 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6 tracking-tight leading-snug">
                {pageDict.intro.title_prefix} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {pageDict.intro.title_highlight}
                </span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-12">
                {pageDict.intro.description}
              </p>

              {/* Info items */}
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: pageDict.info_labels.email,
                    value: "hello@ereborhub.cloud",
                    href: "mailto:hello@ereborhub.cloud",
                    color: "text-cyan-400",
                    bg: "bg-cyan-400/10",
                  },
                  {
                    icon: MapPin,
                    label: pageDict.info_labels.location,
                    value: "N° 63, Avenue Colonel Mondjiba, Commune de la Gombe, Kinshasa",
                    href: null,
                    color: "text-blue-400",
                    bg: "bg-blue-400/10",
                  },
                  {
                    icon: Globe,
                    label: pageDict.info_labels.website,
                    value: "ereborhub.cloud",
                    href: `/${locale}`,
                    color: "text-violet-400",
                    bg: "bg-violet-400/10",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div key={item.label} className="group flex items-center gap-4">
                      <div className={`w-11 h-11 rounded-2xl ${item.bg} flex items-center justify-center shrink-0`}>
                        <Icon className={`w-5 h-5 ${item.color}`} strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">{item.label}</p>
                        <p className={`text-sm font-semibold ${item.href ? "group-hover:" + item.color : "text-white"} text-white transition-colors`}>{item.value}</p>
                      </div>
                      {item.href && (
                        <ArrowRight className={`w-4 h-4 ${item.color} ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all`} />
                      )}
                    </div>
                  );

                  return item.href ? (
                    <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* ── Right form panel ───────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#fafafa] px-8 py-16 lg:px-16 lg:py-24"
          >
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
                {pageDict.form_section.title}
              </h2>
              <p className="text-slate-500 text-sm mb-10">
                {pageDict.form_section.description}
              </p>

              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <ContactForm dict={dict.contact_form} />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
