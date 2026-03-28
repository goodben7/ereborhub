"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

import { projects } from "@/lib/data/projects";

const cardVariants: Variants = {
  rest: { y: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
  hover: {
    y: -8,
    boxShadow: "0px 20px 40px -10px rgba(0,0,0,0.5)",
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const bgVariants: Variants = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.5 } }
};

const pathVariants: Variants = {
  rest: { pathLength: 0, opacity: 0, transition: { duration: 0.4 } },
  hover: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } }
};

const nodeVariants: Variants = {
  rest: { scale: 0, opacity: 0 },
  hover: { scale: 1, opacity: 1, transition: { duration: 0.4, delay: 0.5, ease: "backOut" } }
};

// Abstract Network Visualizer inside cards
const NetworkVisualizer = ({ color }: { color: string }) => {
  return (
    <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id={`glow-${color}`} x1="50%" y1="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        <filter id={`blur-${color}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* Background Orb */}
      <motion.circle
        cx="200" cy="150" r="120"
        fill={`url(#glow-${color})`}
        variants={bgVariants}
      />

      <g className="mix-blend-screen opacity-80">
        {/* Main Infrastructure Line */}
        <motion.path
          d="M 50 150 L 120 150 L 160 100 L 260 100 L 300 160 L 350 160"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
        />
        {/* Secondary Branches */}
        <motion.path
          d="M 120 150 L 100 210 L 150 210 M 260 100 L 290 50 L 320 50"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.5"
          variants={pathVariants}
        />

        {/* Glowing Data Nodes */}
        <motion.circle cx="120" cy="150" r="3" fill="#FFF" filter={`url(#blur-${color})`} variants={nodeVariants} />
        <motion.circle cx="160" cy="100" r="4.5" fill="#FFF" variants={nodeVariants} />
        <motion.circle cx="260" cy="100" r="4" fill="#FFF" variants={nodeVariants} />
        <motion.circle cx="300" cy="160" r="3" fill="#FFF" variants={nodeVariants} />
        <motion.circle cx="100" cy="210" r="2" fill="#FFF" variants={nodeVariants} />
        <motion.circle cx="290" cy="50" r="2" fill="#FFF" variants={nodeVariants} />
      </g>
    </svg>
  );
};

export function ProjectsSection({ locale, dict }: { locale: "en" | "fr"; dict: any }) {
  return (
    <section className="py-20 lg:py-32 bg-[#010314] relative overflow-hidden" id="projects">
      {/* Ambient Deep Background Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]"
            >
              {dict.title.split("Impact")[0]}<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Impact</span>{dict.title.split("Impact")[1]}
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href={`/${locale}/projects`}
              className="group flex items-center gap-2 text-slate-300 font-bold hover:text-white transition-colors relative overflow-hidden py-2"
            >
              {dict.view_all}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300 ease-out" />
              {/* Animated underline */}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </Link>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects
            .filter((p) => p.id !== "kyc-manager" && p.id !== "edu-connect")
            .map((project, index) => (
            <motion.div
              key={project.id}
              initial="rest"
              whileHover="hover"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                rest: { opacity: 0, y: 30 },
                hover: { opacity: 1, y: 0 } // handled by cardVariants for hover
              }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "group block rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 backdrop-blur-sm",
                project.featured ? "md:col-span-2 lg:col-span-2" : "col-span-1"
              )}
            >
              <motion.div variants={cardVariants} className="h-full flex flex-col relative bg-[#060918]">

                {/* Visual Header Grid */}
                <div className="aspect-[16/9] relative border-b border-white/5 overflow-hidden bg-[#0A0D1D]">

                  {/* Hover Subtle Gradient Glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 50% 120%, ${project.glowUrl}, transparent 70%)` }}
                  />

                  {/* Subtle Tech Grid pattern */}
                  <div className="absolute inset-0 z-20"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                      backgroundSize: '40px 40px'
                    }}
                  />

                  {/* Visual Content: Image or Network Animation */}
                  <div className="absolute inset-0">
                    {project.imageUrl && (
                      <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out">
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                        />
                        {/* Gradient Overlay for the image to blend into the card design */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D1D] via-transparent to-transparent opacity-60" />
                      </div>
                    )}

                    {/* Re-integrated Animation Layer (always visible or overlaying image) */}
                    <div className={cn(
                      "absolute inset-0 z-10",
                      project.imageUrl ? "opacity-40 group-hover:opacity-60 transition-opacity" : "opacity-100"
                    )}>
                      <NetworkVisualizer color={project.color} />
                    </div>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-8 flex flex-col flex-1 relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                    {project.shortDescription[locale]}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {[...project.backendTech, ...project.frontendTech].slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-white/5 text-[10px] font-bold text-slate-300 uppercase tracking-widest border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/${locale}${project.href}`}
                      className="shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-primary group-hover:border-primary transition-all duration-300"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>

                {/* Border Glow line expanding on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px]"
                  style={{ backgroundColor: project.color }}
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />

              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
