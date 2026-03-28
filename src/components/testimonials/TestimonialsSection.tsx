"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jean-Marie N.",
    role: "CTO, FinServe Africa",
    content:
      "EreborHub built our entire KYC/AML compliance platform from scratch. The attention to detail, performance, and regulatory understanding was exceptional.",
    rating: 5,
    initials: "JN",
    color: "bg-blue-600",
  },
  {
    name: "Sophie M.",
    role: "Founder, Likelemba",
    content:
      "The team delivered a beautiful, intuitive mobile app for our tontine platform. Communication was transparent throughout, and they hit every deadline.",
    rating: 5,
    initials: "SM",
    color: "bg-sky-600",
  },
  {
    name: "David K.",
    role: "Head of Engineering, PrintFast",
    content:
      "Our on-demand print and delivery platform went live on time and immediately scaled beyond expectations. EreborHub's cloud architecture expertise was invaluable.",
    rating: 5,
    initials: "DK",
    color: "bg-indigo-600",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 mb-4 tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Trusted by builders &
            <span className="gradient-text"> innovators</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Here's what our clients say about working with the EreborHub team.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star
                    key={si}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
