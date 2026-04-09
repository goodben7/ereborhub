"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { NavDictionary } from "@/lib/dictionaries";


export function Navbar({ locale, dict }: { locale: string; dict: NavDictionary }) {
  const [openPathname, setOpenPathname] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const currentPath = pathname ?? `/${locale}`;
  const isOpen = openPathname === currentPath;

  const navLinks = [
    { label: dict.home, href: `/${locale}` },
    { label: dict.services, href: `/${locale}/services` },
    { label: dict.projects, href: `/${locale}/projects` },
    { label: dict.about, href: `/${locale}/about` },
    { label: dict.contact, href: `/${locale}/contact` },
  ];

  const getAlternatePath = (l: string) => {
    if (!pathname) return `/${l}`;
    const segments = pathname.split("/");
    segments[1] = l;
    return segments.join("/");
  };

  // Determine if the current page has a dark hero background
  const isDarkTop = [`/${locale}/services`, `/${locale}/projects`, `/${locale}/about`, `/${locale}/contact`].includes(pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-500 ease-in-out px-4 py-4 sm:px-6 lg:px-8",
        scrolled ? "top-2" : "top-0"
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto transition-all duration-500 ease-in-out rounded-2xl border",
          scrolled 
            ? "glass-card py-2 px-6 shadow-lg border-white/20" 
            : "bg-transparent py-4 px-4 border-transparent"
        )}
      >
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2 group">
            <div className="w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Image 
                src="/eroborlogo-1.png" 
                alt={dict.logo_alt} 
                width={40} 
                height={40} 
                className="object-contain"
                priority
              />
            </div>
            <span className={cn(
              "text-xl font-bold tracking-tight transition-colors duration-300",
              (!scrolled && isDarkTop) ? "text-white" : "text-slate-900"
            )}>
              Erebor<span className="text-primary">Hub</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isDarkHeader = !scrolled && isDarkTop;
              
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors",
                    isDarkHeader 
                      ? "text-slate-300 hover:text-white" 
                      : "text-slate-600 hover:text-primary",
                    isActive && (isDarkHeader ? "text-white" : "text-primary")
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-primary rounded-full mx-4"
                    />
                  )}
                </Link>
              );
            })}

            {/* Language Switcher */}
            <div className="flex items-center gap-2 ml-4 px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
              <Link
                href={getAlternatePath("en")}
                className={cn(
                  "text-[10px] font-bold tracking-widest transition-all",
                  locale === "en" 
                    ? "text-primary scale-110" 
                    : ((!scrolled && isDarkTop) ? "text-slate-400 hover:text-white" : "text-slate-400 hover:text-slate-900")
                )}
              >
                EN
              </Link>
              <span className="text-slate-700/30 text-[10px]">|</span>
              <Link
                href={getAlternatePath("fr")}
                className={cn(
                  "text-[10px] font-bold tracking-widest transition-all",
                  locale === "fr" 
                    ? "text-primary scale-110" 
                    : ((!scrolled && isDarkTop) ? "text-slate-400 hover:text-white" : "text-slate-400 hover:text-slate-900")
                )}
              >
                FR
              </Link>
            </div>

            <Link
              href={`/${locale}/contact`}
              className="ml-4 px-5 py-2 rounded-xl bg-primary text-white text-sm font-semibold shadow-lg shadow-primary/25 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              {dict.start_short}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpenPathname(isOpen ? null : currentPath)}
            className={cn(
              "md:hidden p-2 transition-colors",
              (!scrolled && isDarkTop) ? "text-white" : "text-slate-600 hover:text-primary"
            )}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenPathname(null)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[-1]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[280px] bg-white shadow-2xl z-50 p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-xl font-bold">{dict.menu}</span>
                <button onClick={() => setOpenPathname(null)} className="p-2">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-4 mb-8 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{dict.language}</span>
                <div className="flex items-center gap-3 ml-auto">
                  <Link
                    href={getAlternatePath("en")}
                    className={cn(
                      "text-sm font-bold transition-all",
                      locale === "en" ? "text-primary" : "text-slate-400"
                    )}
                  >
                    EN
                  </Link>
                  <span className="text-slate-200">|</span>
                  <Link
                    href={getAlternatePath("fr")}
                    className={cn(
                      "text-sm font-bold transition-all",
                      locale === "fr" ? "text-primary" : "text-slate-400"
                    )}
                  >
                    FR
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpenPathname(null)}
                    className={cn(
                      "px-4 py-3 rounded-xl text-lg font-medium transition-all",
                      pathname === link.href 
                        ? "bg-primary/5 text-primary" 
                        : "text-slate-600 hover:bg-slate-50"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <Link
                href={`/${locale}/contact`}
                onClick={() => setOpenPathname(null)}
                className="w-full mt-auto py-4 rounded-2xl bg-primary text-white font-bold text-center shadow-xl shadow-primary/20"
              >
                {dict.start_project}
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
