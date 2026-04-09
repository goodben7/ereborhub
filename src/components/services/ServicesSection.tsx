"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

import { services } from "@/lib/data/services";
import type { ServicesDictionary } from "@/lib/dictionaries";

export function ServicesSection({ locale, dict }: { locale: "en" | "fr"; dict: ServicesDictionary }) {
  return (
    <section className="py-24 relative overflow-hidden bg-white" id="services" aria-labelledby="services-title">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            id="services-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            {dict.title_prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">{dict.title_highlight}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
              role="article"
              aria-labelledby={`service-title-${service.id}`}
            >
              <div className={cn(
                "absolute inset-0 bg-white rounded-3xl transition-all duration-500 ease-out border shadow-sm",
                "border-slate-100 group-hover:shadow-2xl group-hover:shadow-slate-200/50 group-hover:-translate-y-1",
                service.borderGlow,
                service.bgGlow
              )} />

              <div className="relative p-8 px-6 sm:px-8 flex flex-col h-full transform transition-transform duration-500 group-hover:-translate-y-1">
                <div className={cn(
                  "w-12 h-12 rounded-2xl mb-6 flex items-center justify-center transition-transform duration-500 ease-out shadow-sm border border-black/5 group-hover:scale-110",
                  service.iconBg
                )}>
                  <service.icon className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
                </div>

                <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                  {service.title[locale]}
                </h3>
                <h4 id={`service-title-${service.id}`} className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                  {service.subtitle[locale]}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
                  {service.description[locale]}
                </p>

                <Link
                  href={`/${locale}/services#${service.id}`}
                  className={cn(
                    "inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3",
                    service.colorClass
                  )}
                  aria-label={dict.learn_more.replace("{service}", service.subtitle[locale])}
                >
                  {dict.explore} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Impact CTA Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-32 relative overflow-hidden rounded-[2.5rem] bg-slate-950 border border-slate-800 shadow-2xl group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] group-hover:bg-blue-500/20 transition-colors duration-700" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] group-hover:bg-indigo-500/20 transition-colors duration-700 pointer-events-none" />

          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px] pointer-events-none" />

          <div className="relative z-10 p-10 sm:p-14 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center md:text-left">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight leading-[1.1]">
                {dict.cta_title_prefix}<br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 inline-block mt-2">
                  {dict.cta_title_highlight}
                </span>
              </h3>
              <p className="text-lg text-slate-400 font-medium">
                {dict.cta_description}
              </p>
            </div>

            <Link
              href={`/${locale}/contact`}
              className="relative inline-flex items-center justify-center group/btn shrink-0"
            >
              <div className="absolute inset-0 bg-blue-500/30 blur-xl rounded-2xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl ring-1 ring-white/10 group-hover/btn:ring-white/50 group-hover/btn:scale-[1.02] active:scale-95 duration-300 ease-out">
                {dict.cta_button}
                <ArrowRight className="w-5 h-5 text-blue-600 group-hover/btn:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
