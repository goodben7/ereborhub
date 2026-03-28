"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const technologies = [
  { 
    name: "React", 
    icon: (
      <svg viewBox="0 0 128 128" className="w-6 h-6">
        <path fill="#61DAFB" d="M128 64c0 16.4-1.2 33-31 43.1-4.7 1.6-9.8 2.5-15 2.8-6 6.6-14 10.7-22.9 10.7-9.3 0-17.6-4.5-22.9-11.5-3.3 0-6.7-.1-10.1-.4C6.5 106 0 85.1 0 64c0-21.1 6.5-42 26.1-44.7 3.4-.3 6.8-.4 10.1-.4 5.3-7 13.6-11.5 22.9-11.5 8.9 0 16.9 4.1 22.9 10.7 5.2.3 10.3 1.2 15 2.8 29.8 10.1 31 26.7 31 43.1zM64 17.6c-5.9 0-11 3.2-14 8h28c-3-4.8-8.1-8-14-8zm39.1 7.2c-2.4-.8-5.1-1.3-7.9-1.5-3.1 4.7-7.4 8.7-12.4 11.6 3.1 3 5.4 6.7 6.8 10.8 7.3-3.6 11.7-11.1 13.5-20.9zm-78.2 0c1.8 9.8 6.2 17.3 13.5 20.9 1.4-4.1 3.7-7.8 6.8-10.8-5-2.9-9.3-6.9-12.4-11.6-2.8.2-5.5.7-7.9 1.5zm-15.6 30c-1.8 3.3-3.1 6.8-3.9 10.5 7.1 2.2 14.1 2.5 20.4.7 1.8-8.8 6.4-16.1 12.7-21.3-4.1-1.4-8.7-2-13.4-1.6-7.8.6-12.6 5.1-15.8 11.7zm111.4 0c-3.2-6.6-8-11.1-15.8-11.7-4.7-.4-9.3.2-13.4 1.6 6.3 5.2 10.9 12.5 12.7 21.3 6.3 1.8 13.3 1.5 20.4-.7-.8-3.7-2.1-7.2-3.9-10.5zM64 45.4c-4.2 0-8.2 1.4-11.3 3.8-2 6.3-2 12.9 0 19.2 3.1 2.4 7.1 3.8 11.3 3.8 4.2 0 8.2-1.4 11.3-3.8 2-6.3 2-12.9 0-19.2-3.1-2.4-7.1-3.8-11.3-3.8zm0 46c-11.9 0-21.6-9.7-21.6-21.6S52.1 48.2 64 48.2 85.6 57.9 85.6 69.8 75.9 91.4 64 91.4zm33.3 18.7c2.8-.2 5.5-.7 7.9-1.5 1.8-9.8 6.2-17.3 13.5-20.9 1.4 4.1 3.7 7.8 6.8 10.8-5 2.9-9.3 6.9-12.4 11.6zM26.1 110.1c2.4.8 5.1 1.3 7.9 1.5 3.1-4.7 7.4-8.7 12.4-11.6-3.1-3-5.4-6.7-6.8-10.8-7.3 3.6-11.7 11.1-13.5 20.9z"/>
      </svg>
    ),
    activeColor: "group-hover/item:text-[#61DAFB]"
  },
  { 
    name: "Next.js", 
    icon: (
      <svg viewBox="0 0 312 312" className="w-6 h-6">
        <path fill="currentColor" d="M156 312c86.157 0 156-69.843 156-156S242.157 0 156 0 0 69.843 0 156s69.843 156 156 156zm0-281.25c69.17 0 125.25 56.08 125.25 125.25 0 25.594-7.688 49.344-20.844 69.188l-123-156.938h-26.656v156.938h21.938v-126.562l111.938 143.438C202.844 266.062 180.562 272 156 272 91.938 272 40 220.062 40 156S91.938 40 156 40zm45.938 75v103.125h21.938V115h-21.938z"/>
      </svg>
    ),
    activeColor: "group-hover/item:text-black"
  },
  { 
    name: "TypeScript", 
    icon: (
      <svg viewBox="0 0 128 128" className="w-6 h-6">
        <path fill="#3178C6" d="M1.5 1.5h125v125h-125z"/>
        <path fill="#FFF" d="M111.8 110.7c-5 3.2-11.4 4.8-19.1 4.8-11.2 0-21.4-6.1-21.4-23V65h11v27.5c0 10.7 6.1 14.5 12.3 14.5 4.5 0 8.8-1.5 8.8-4.1 0-2.3-1.6-3.8-6.1-5.7l-9.1-3.6c-10.7-4.3-16-10.7-16-20.2 0-14.8 12.5-22.3 26.6-22.3 9.4 0 18 3.5 18 3.5l-4.5 9.1s-7.1-3.1-13.6-3.1c-6.8 0-11.3 3.3-11.3 8.3 0 3.8 2.5 5.5 8.1 7.6l9.1 3.4c13.3 5 18.6 11.2 18.6 22.3.1 11.6-6.1 19.4-13.4 24.5zM22.5 65h15v47.5h11V65h15v-9.5H22.5z"/>
      </svg>
    ),
    activeColor: "group-hover/item:text-[#3178C6]"
  },
  { 
    name: "Node.js", 
    icon: (
      <svg viewBox="0 0 128 128" className="w-6 h-6">
        <path fill="#5FA04E" d="M64 6.7L18.4 33v52.5L64 111.9l45.6-26.4V33L64 6.7zm28.3 48.7L64 71.7V88l33.8-19.5V47.2L64 30.6v16.3l28.3 16.3v2.2zm-56.5 0L64 71.7V88L30.2 68.5V47.2L64 30.6v16.3l-28.3 16.3v2.2z"/>
      </svg>
    ),
    activeColor: "group-hover/item:text-[#5FA04E]"
  },
  { 
    name: "Docker", 
    icon: (
      <svg viewBox="0 0 128 128" className="w-6 h-6">
        <path fill="#2496ED" d="M125 76c-4.4-1.3-9-1.3-13.4 0 2-7.6 1.3-15.6-2-22.7-8.8 4.6-17.1 11.2-24 19.3-11.2-6.5-24.6.1-24.6.1s0-4.3 0-12.8h-4.3v8.5H52.4v-4.3h-4.3v4.3H43.8V44.5h-4.3v4.3h-4.3v-4.3h-4.3v4.3h-4.3V44.5h-4.3v4.3h-4.3v-4.3h-4.3v4.3h-4.3V44.5H5.4v38.4s0 14.6 24 23.8C41.7 111.4 57.9 111 57.9 111s21.7-.5 35.8-9.8c15.1-10 17.7-22.1 17.7-22.1s8.9.7 12.3-3.9c1-1.3 1.1-2.9.7-4.5-1.1-4.7-6.2-7.5-11.6-9zm-72.1 12.5h-8.5v-8.5h8.5v8.5zm17.1 0H49v-8.5h8.5v8.5z"/>
      </svg>
    ),
    activeColor: "group-hover/item:text-[#2496ED]"
  },
  { 
    name: "Redis", 
    icon: (
      <svg viewBox="0 0 128 128" className="w-6 h-6">
        <path fill="#D82C20" d="M64 0L14.7 18.4v91.2L64 128l49.3-18.4V18.4z"/>
        <path fill="#FFF" d="M37.3 42.7h53.3v42.7H37.3z"/>
      </svg>
    ),
    activeColor: "group-hover/item:text-[#D82C20]"
  },
  { 
    name: "PostgreSQL", 
    icon: (
      <svg viewBox="0 0 128 128" className="w-6 h-6">
        <path fill="#336791" d="M118.4 69c.8-5.3-.3-11.4-2.8-16.7-2.6-5.3-7.2-10-12.8-13.1-2-.9-4.3-1.8-6.6-2.4-.1-1.2-.2-2.5-.3-3.8-.1-2.9-.6-5.8-3.1-7.8-1.5-1.2-3.4-1.9-5.3-2.1-1.3-.1-2.6-.1-3.9-.1-6.1 0-11.2 2.7-14.1 8-.7 1.3-1.1 2.8-1.3 4.3-.9 0-1.8.1-2.7.2-7 1.2-13.3 5.4-17.5 11.1-4.2 5.7-6.2 12.8-5.6 19.8.7 7 4.1 13.5 9.4 18.1 5.3 4.6 12.3 7 19.3 6.7 5-.2 9.9-1.9 14.2-4.1 4.3 2.2 9.2 3.9 14.2 4.1 7 .3 14-2.1 19.3-6.7 5.3-4.6 8.7-11.1 9.4-18.1.5-6.6-1.5-13.4-5.3-18.7z"/>
      </svg>
    ),
    activeColor: "group-hover/item:text-[#336791]"
  },
  { 
    name: "GraphQL", 
    icon: (
      <svg viewBox="0 0 128 128" className="w-6 h-6">
        <path fill="#E10098" d="M10.8 33.3L64 2.6l53.2 30.7v61.4L64 125.4l-53.2-30.7V33.3zm0 0L64 2.6l53.2 30.7v61.4L64 125.4l-53.2-30.7V33.3zM64 10.4L17.5 37.2v53.6L64 117.6l46.5-26.8V37.2L64 10.4zm0 18.8L35.2 45.4v37.2L64 98.8l28.8-16.2V45.4L64 29.2z"/>
      </svg>
    ),
    activeColor: "group-hover/item:text-[#E10098]"
  },
  { 
    name: "Framer", 
    icon: (
      <svg viewBox="0 0 128 128" className="w-6 h-6">
        <path fill="currentColor" d="M0 0h128v64H64L0 0zm0 64h64l64 64H0V64z"/>
      </svg>
    ),
    activeColor: "group-hover/item:text-black"
  },
  { 
    name: "AWS", 
    icon: (
      <svg viewBox="0 0 128 128" className="w-6 h-6">
        <path fill="#FF9900" d="M109.4 83.5c-4.6 3.1-9.9 5.3-15.8 6.5-5.9 1.1-12.2 1.7-18.8 1.7-16.2 0-28.7-4-37.4-12.1-8.7-8-13.1-19.1-13.1-33.1 0-14 4.4-25.1 13.1-33.1S58.3 1.3 74.5 1.3c16.2 0 28.7 4 37.4 12.1s13.1 19.1 13.1 33.1c0 5.4-.7 10.1-2.2 14.1s-3.7 7.5-6.6 10.4c-2.9 2.9-6.6 5.3-11.1 7.2-4.5 1.9-9.8 2.8-15.8 2.8-5.2 0-9.8-.7-13.8-2.2-4-1.5-7.3-3.6-9.9-6.3-2.6-2.7-4.5-5.9-5.7-9.6-1.2-3.7-1.8-7.8-1.8-12.4H42.7c0 10.1 2.8 17.6 8.5 22.4 5.7 4.8 13.8 7.2 24.3 7.2 9.5 0 16.9-2.1 22.1-6.3 5.2-4.2 8.5-9.6 9.8-16.1h18c-1.3 10.1-6.3 18.5-15 25.1z"/>
      </svg>
    ),
    activeColor: "group-hover/item:text-[#FF9900]"
  },
  { 
    name: "Stripe", 
    icon: (
      <svg viewBox="0 0 128 128" className="w-6 h-6">
        <path fill="#635BFF" d="M128 64c0 35.3-28.7 64-64 64S0 99.3 0 64 28.7 0 64 0s64 28.7 64 64z"/>
        <path fill="#FFF" d="M78.6 57.6c0-4.6-3.8-7.3-10.1-7.3-5 0-10.4 1.8-15.3 4.4L51 45.5c5.3-2.9 12-4.9 19-4.9 14.3 0 23.3 7.2 23.3 18.9 0 11.2-8.3 15.6-18.4 20.2-7.1 3-9.5 5.5-9.5 8.9 0 3.7 3.3 6.1 8.3 6.1 5.4 0 12.3-2.3 17.5-5.4l2.1 9.1c-4.9 3.1-13.1 5.4-20.9 5.4-15.6 0-23.7-7.9-23.7-18.1 0-13 10.4-18.4 19.3-22.1 7.4-3.1 11.1-5.1 11.1-11c-.1-.1-.1-.1-.1-.1z"/>
      </svg>
    ),
    activeColor: "group-hover/item:text-[#635BFF]"
  },
  { 
    name: "Tailwind", 
    icon: (
      <svg viewBox="0 0 128 128" className="w-6 h-6">
        <path fill="#38BDF8" d="M64 54.4c0-11.2 5.6-16.8 16.8-16.8 11.2 0 16.8 5.6 16.8 16.8v11.2c0 11.2-5.6 16.8-16.8 16.8-11.2 0-16.8-5.6-16.8-16.8V54.4zm-44.8 11.2c0-11.2 5.6-16.8 16.8-16.8 11.2 0 16.8 5.6 16.8 16.8v11.2c0 11.2-5.6 16.8-16.8 16.8-11.2 0-16.8-5.6-16.8-16.8V65.6z"/>
      </svg>
    ),
    activeColor: "group-hover/item:text-[#38BDF8]"
  },
];

export function TechStackSection() {
  return (
    <section className="py-20 bg-white overflow-hidden border-b border-slate-100" id="tech">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
            Technical Foundation
          </span>
        </motion.div>

        <div className="relative">
          {/* Edge Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Marquee Container */}
          <div className="flex overflow-hidden group">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex gap-12 py-4 shrink-0"
            >
              {[...technologies, ...technologies, ...technologies].map((tech, i) => (
                <div
                  key={`${tech.name}-${i}`}
                  className="flex items-center gap-4 group/item cursor-default"
                >
                  <div className={cn(
                    "w-12 h-12 rounded-2xl bg-white flex items-center justify-center transition-all duration-500 shadow-sm border border-slate-100 group-hover/item:border-transparent group-hover/item:shadow-xl group-hover/item:shadow-slate-200/50 group-hover/item:-translate-y-1",
                    "grayscale group-hover/item:grayscale-0"
                  )}>
                    {tech.icon}
                  </div>
                  <span className={cn(
                    "text-sm font-bold text-slate-400 group-hover/item:text-slate-900 transition-all duration-300 tracking-tight",
                    tech.activeColor
                  )}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
