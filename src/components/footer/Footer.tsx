import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Twitter, Linkedin, Github, ExternalLink, Globe } from "lucide-react";

export function Footer({ locale }: { locale: string }) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    [locale === "fr" ? "Services" : "Services"]: [
      { label: locale === "fr" ? "Logiciels Sur Mesure" : "Custom Software", href: `/${locale}/services#software` },
      { label: locale === "fr" ? "Identité Numérique" : "Digital Identity", href: `/${locale}/services#identity` },
      { label: locale === "fr" ? "Infrastructure Cloud" : "Cloud Solutions", href: `/${locale}/services#cloud` },
      { label: locale === "fr" ? "Solutions Entreprise" : "Business Software", href: `/${locale}/services#business` },
    ],
    [locale === "fr" ? "Entreprise" : "Company"]: [
      { label: locale === "fr" ? "À Propos" : "About Us", href: `/${locale}/about` },
      { label: locale === "fr" ? "Projets" : "Projects", href: `/${locale}/projects` },
      { label: locale === "fr" ? "Contact" : "Contact", href: `/${locale}/contact` },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/ereborhub", label: "LinkedIn", color: "hover:text-blue-500" },
  ];

  return (
    <footer className="bg-[#010314] text-slate-400 relative border-t border-white/5 overflow-hidden">
      {/* ── BACKGROUND EFFECTS ───────────────────────── */}

      {/* Top glowing ambient line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Technical Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />

      {/* Ambient Glows */}
      <div className="absolute -top-[200px] -left-[100px] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-[100px] -right-[50px] w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Large Background Watermark Logo (Very low opacity) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] scale-[3] pointer-events-none select-none">
        <Image src="/eroborlogo-1.png" alt="" width={400} height={400} className="grayscale brightness-0 invert" />
      </div>

      {/* ── MAIN FOOTER CONTENT ────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand & Description (4 columns) */}
          <div className="lg:col-span-4 pr-0 lg:pr-12">
            <Link href={`/${locale}`} className="flex items-center gap-3 group mb-8 inline-flex">
              <div className="w-11 h-11 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl group-hover:scale-105 group-hover:border-primary/40 group-hover:bg-white/10 transition-all duration-500 shadow-xl ring-1 ring-white/5">
                <Image
                  src="/eroborlogo-1.png"
                  alt="EreborHub Logo"
                  width={26}
                  height={26}
                  className="object-contain"
                />
              </div>
              <span className="font-black text-2xl text-white tracking-tighter">
                Erebor<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Hub</span>
              </span>
            </Link>
            <p className="text-[15px] text-slate-500 leading-relaxed mb-10 max-w-sm">
              {locale === "fr" 
                ? "Conception d'infrastructures numériques haute performance et d'écosystèmes sécurisés pour la prochaine génération d'innovateurs mondiaux."
                : "Architecting high-performance digital infrastructure and regulatory-compliant ecosystems for the next generation of global innovators."}
            </p>

            {/* Social links as compact cards */}
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 ${color} transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-white/20`}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections (Explicited for better spacing) */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2 flex flex-col">
              <h3 className="text-white font-black text-[11px] mb-8 tracking-[0.25em] uppercase opacity-90">
                {title}
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-slate-500 hover:text-white transition-all duration-300 inline-block group"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column (4 columns) */}
          <div className="lg:col-span-4 pl-0 lg:pl-12">
            <h3 className="text-white font-black text-[11px] mb-8 tracking-[0.25em] uppercase opacity-90">
              {locale === "fr" ? "Contactez-nous" : "Get in touch"}
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors group">
                <div className="mt-0.5 w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 group-hover:bg-blue-500/20 transition-all duration-500">
                  <MapPin className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[14px] text-slate-300 leading-snug">N° 63, Avenue Colonel Mondjiba, Commune de la Gombe, Kinshasa</span>
                </div>
              </div>

              <a
                href="mailto:hello@ereborhub.cloud"
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary/20 hover:bg-primary/[0.03] transition-all duration-500 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-all duration-500">
                  <Mail className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[14px] text-slate-300 font-bold truncate block">hello@ereborhub.cloud</span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-600 ml-auto group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ─────────────────────────────────── */}
      <div className="border-t border-white/5 relative z-10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <p className="text-[13px] font-medium text-slate-600 tracking-wide">
                © {currentYear} EreborHub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
