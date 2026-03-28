"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Server, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  Zap,
  Activity,
  Layers,
  Database,
  ExternalLink,
  BookOpen,
  ShoppingBag
} from "lucide-react";

import { projects } from "@/lib/data/projects";


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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = use(params);
  const locale = rawLocale as "en" | "fr";

  return (
    <div className="bg-white min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative bg-[#010314] pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden border-b border-white/5">

        {/* Animated Cyber Background */}
        <AnimatedHeroBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]"
          >
            {locale === "fr" ? "Vitrine de" : "Showcase of"} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
              {locale === "fr" ? "l'Excellence Technique" : "Engineering Excellence"}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            {locale === "fr" 
              ? "Chaque projet est le fruit d'une collaboration étroite, d'une rigueur technique et d'un engagement à fournir une valeur durable."
              : "Each project is a story of deep collaboration, technical rigor, and a commitment to delivering lasting value."}
          </motion.p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {projects.map((project) => (
            <motion.article
              key={project.id}
              id={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="group rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">

                {/* ── Left accent panel ── */}
                <div className={`p-10 lg:p-12 relative overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                  {/* Glass Orbs */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none blur-3xl opacity-50" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none blur-2xl opacity-30" />
                  
                  {/* Subtle Grid Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none" 
                    style={{ 
                      backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                      backgroundSize: '24px 24px'
                    }} 
                  />
                  
                  {/* Domain Specific Background Icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.08]">
                    <project.bgIcon className="w-64 h-64 text-white" strokeWidth={0.5} />
                  </div>
                  
                  <div className="flex flex-col h-full justify-between relative z-10">
                    <p className="text-6xl font-black text-white/20 tracking-tighter leading-none mb-3">{project.year}</p>
                    <div>
                      <h3 className="text-2xl font-extrabold text-white tracking-tight leading-tight">{project.title}</h3>
                      <span className="inline-block mt-3 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold tracking-widest uppercase">
                        {project.category[locale]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── Content ── */}
                <div className="bg-white p-8 lg:p-10 flex flex-col justify-between">

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-8 text-[15px]">{project.description[locale]}</p>

                  {/* Highlights */}
                  <div className="mb-8">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                      {locale === "fr" ? "Résultats Clés" : "Key Results"}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                      {project.highlights[locale].map((h: string) => (
                        <li key={h} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" strokeWidth={2} />
                          <span className="text-sm text-slate-600 leading-snug">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stacks */}
                  <div className="flex flex-col sm:flex-row gap-6 pt-6 border-t border-slate-100">
                    {/* Backend */}
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5 mb-2.5">
                        <Server className="w-3.5 h-3.5 text-slate-400" />
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Backend</p>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.backendTech.map((tech: string) => (
                          <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-[11px] font-mono font-medium border border-slate-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Frontend — only if present */}
                    {project.frontendTech.length > 0 && (
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5 mb-2.5">
                          <Code2 className="w-3.5 h-3.5 text-blue-400" />
                          <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Frontend</p>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.frontendTech.map((tech: string) => (
                            <span key={tech} className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-[11px] font-mono font-medium border border-blue-100">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="mt-6">
                    <Link
                      href={`/${locale}/contact?project=${project.id}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group/link"
                    >
                      {locale === "fr" ? "Discuter d'un projet similaire" : "Discuss a similar project"}
                      <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>

                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
