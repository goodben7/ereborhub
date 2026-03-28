"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Delivered", detail: "Global Scale" },
  { value: "99.9%", label: "System Uptime", detail: "Mission Critical" },
  { value: "24/7", label: "Expert Support", detail: "Round the clock" },
  { value: "100%", label: "Security Verified", detail: "Audit Ready" },
];

export function StatsSection() {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center lg:text-left"
            >
              <p className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2 mt-1 gradient-text">
                {stat.value}
              </p>
              <p className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-slate-400 font-medium tracking-wide italic">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
