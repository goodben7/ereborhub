"use client";

import { motion, Variants } from "framer-motion";
import { Rocket, Lock, Layers, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FeaturesDictionary } from "@/lib/dictionaries";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

export function FeaturesSection({ dict }: { dict: FeaturesDictionary }) {
  const features = [
    {
      icon: Rocket,
      color: "from-blue-500 to-cyan-400",
      shadow: "group-hover:shadow-blue-500/10",
      border: "group-hover:border-blue-200"
    },
    {
      icon: Lock,
      color: "from-indigo-500 to-purple-400",
      shadow: "group-hover:shadow-indigo-500/10",
      border: "group-hover:border-indigo-200"
    },
    {
      icon: Layers,
      color: "from-sky-400 to-blue-500",
      shadow: "group-hover:shadow-sky-500/10",
      border: "group-hover:border-sky-200"
    },
    {
      icon: Users,
      color: "from-violet-500 to-fuchsia-400",
      shadow: "group-hover:shadow-violet-500/10",
      border: "group-hover:border-violet-200"
    },
  ];

  return (
    <section className="section-padding bg-[#fafafa] relative overflow-hidden" id="why-us">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[120px] pointer-events-none translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left: Animated Header */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="pr-0 lg:pr-8"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
              {dict.title_prefix}<br />
              <div className="relative inline-block mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 relative z-10">
                  {dict.title_highlight}
                </span>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  className="absolute bottom-1.5 left-0 h-3 bg-blue-100/60 -z-0 rounded-sm"
                />
              </div>
            </h2>

            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-10 max-w-lg">
              {dict.description}
            </p>

            {/* Animated Decorative Bar */}
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                initial={{ width: 0 }} whileInView={{ width: 48 }} transition={{ delay: 0.5, duration: 0.6 }}
                className="h-1.5 rounded-full bg-blue-600"
              />
              <motion.div
                initial={{ width: 0 }} whileInView={{ width: 24 }} transition={{ delay: 0.7, duration: 0.4 }}
                className="h-1.5 rounded-full bg-sky-400"
              />
              <motion.div
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.9, type: "spring" }}
                className="h-1.5 w-3 rounded-full bg-slate-300"
              />
            </motion.div>
          </motion.div>

          {/* Right: Highly Animated Feature Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const item = dict.items[index];
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative h-full cursor-default"
                >
                  {/* Glassmorphic Container Layer */}
                  <div className={cn(
                    "absolute inset-0 bg-white rounded-3xl border border-slate-200 shadow-sm transition-all duration-500",
                    "group-hover:shadow-2xl",
                    feature.shadow,
                    feature.border
                  )} />

                  {/* Subtle Gradient Glow inside the card on Hover */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden pointer-events-none">
                    <div className={cn("absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-bl opacity-20 blur-[40px] rounded-full", feature.color)} />
                  </div>

                  <div className="relative p-8 flex flex-col h-full">
                    {/* Animated Icon Container */}
                    <div className="relative mb-6">
                      <motion.div
                        className={cn(
                          "w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm relative z-10 transition-colors duration-500 overflow-hidden"
                        )}
                      >
                        {/* Hover reveal background */}
                        <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br", feature.color)} />

                        <Icon className="w-6 h-6 text-slate-700 group-hover:text-blue-600 transition-colors duration-500 relative z-10" strokeWidth={1.5} />
                      </motion.div>

                      {/* Decorative outer ring on hover */}
                      <div className="absolute top-1 left-1 -right-1 -bottom-1 -z-0 rounded-2xl border-2 border-slate-100 opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                    </div>

                    <h3 className="text-base font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-blue-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
