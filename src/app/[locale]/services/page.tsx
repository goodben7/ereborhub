"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { services } from "@/lib/data/services";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { getDictionaryByLocale } from "@/lib/client-dictionaries";

const AnimatedHeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Slow pulsing grand orbs */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 40, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -50, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-30%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen"
      />

      {/* Static Tech Grid Base */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }}
      />

      {/* Cyberpunk Vertical Scanning Lines */}
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

export default function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = use(params);
  const locale = rawLocale as "en" | "fr";
  const dict = getDictionaryByLocale(locale);
  const pageDict = dict.services_page;

  return (
    <div className="bg-white min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative bg-[#010314] pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden border-b border-white/5">

        {/* Animated Cyber Background */}
        <AnimatedHeroBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]"
          >
            {pageDict.hero.title_prefix} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
              {pageDict.hero.title_highlight}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            {pageDict.hero.description}
          </motion.p>
        </div>
      </section>

      {/* Structured Services Detail List */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {services.map((service, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                {/* Text Block - Reordered on Desktop via CSS Grid Order */}
                <div className={cn("space-y-8", !isEven && "lg:order-2")}>
                  <h2 id={`title-${service.id}`} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                    {service.fullTitle[locale]}
                  </h2>

                  <p className="text-lg text-slate-500 leading-relaxed font-medium">
                    {service.fullDescription[locale]}
                  </p>

                  <div className="pt-4 border-t border-slate-100">
                    <ul
                      className="grid grid-cols-1 sm:grid-cols-1 gap-x-6 gap-y-4"
                      aria-label={pageDict.features_aria_label.replace("{service}", service.fullTitle[locale])}
                    >
                      {service.features[locale].map((feature: string) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="mt-1" style={{ color: service.colorHex }}>
                            <CheckCircle2 className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />
                          </div>
                          <span className="text-sm font-medium text-slate-600 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual Glassmorphism Card */}
                <div className={cn("relative", !isEven && "lg:order-1")}>
                  <div className="relative aspect-square sm:aspect-[4/3] rounded-[2.5rem] bg-[#060918] border border-slate-200/50 shadow-2xl overflow-hidden group">

                    {/* Background Service Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.bgImage})` }}
                    />

                    {/* Premium Overlays */}
                    <div className="absolute inset-0 bg-[#060918]/60 group-hover:bg-[#060918]/40 transition-colors duration-700" />
                    
                    {/* Directional Glow */}
                    <div
                      className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-1000 ease-out"
                      style={{ background: `radial-gradient(circle at center, ${service.glowUrl}, transparent 80%)` }}
                    />

                    {/* Abstract Tech Grid Overlay */}
                    <div className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                        backgroundSize: '32px 32px'
                      }}
                    />

                    {/* Circuit Elements / Floating Decorations */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
                      <svg width="100%" height="100%" className="absolute inset-0">
                        <pattern id={`pattern-${service.id}`} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                          <circle cx="2" cy="2" r="1.5" fill={service.colorHex} />
                        </pattern>
                        <rect x="0" y="0" width="100%" height="100%" fill={`url(#pattern-${service.id})`} />
                      </svg>
                    </div>

                    {/* Center Icon Container - Glass Effect */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="relative w-32 h-32 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl overflow-hidden"
                        style={{ boxShadow: `0 25px 50px -12px ${service.glowUrl}` }}
                        role="img"
                        aria-label={pageDict.icon_aria_label.replace("{service}", service.fullTitle[locale])}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
                        <service.icon className="w-12 h-12 relative z-10" style={{ color: service.colorHex }} strokeWidth={1.5} aria-hidden="true" />
                        
                        {/* Animated Inner Shine */}
                        <motion.div 
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
                        />
                      </motion.div>
                    </div>

                  </div>

                  {/* Decorative Accents */}
                  <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-slate-50 rounded-full blur-3xl opacity-50" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
