"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";

type FormState = "idle" | "loading" | "success";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export function ContactForm({ locale }: { locale: string }) {
  const [state, setState] = useState<FormState>("idle");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = locale === "fr" ? "Le nom est requis" : "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = locale === "fr" ? "L'adresse email est requise" : "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = locale === "fr" ? "Veuillez entrer un email valide" : "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = locale === "fr" ? "Le message est requis" : "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setState("loading");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1800));
    setState("success");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {locale === "fr" ? "Message envoyé !" : "Message Sent!"}
        </h3>
        <p className="text-slate-600">
          {locale === "fr" ? "Nous vous répondrons dans les 24 heures." : "We'll get back to you within 24 hours."}
        </p>
      </motion.div>
    );
  }

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 ${
      errors[field]
        ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-100"
        : "border-slate-200 bg-slate-50 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
            {locale === "fr" ? "Nom Complet" : "Full Name"} <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jean-Claude Mutombo"
            className={inputClass("name")}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
            {locale === "fr" ? "Adresse Email" : "Email Address"} <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className={inputClass("email")}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-600">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
          {locale === "fr" ? "Entreprise" : "Company"} <span className="text-slate-400 font-normal">({locale === "fr" ? "optionnel" : "optional"})</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          placeholder={locale === "fr" ? "Votre Entreprise" : "Your Company"}
          className={inputClass("company")}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
          {locale === "fr" ? "Message" : "Message"} <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder={locale === "fr" ? "Dites-nous en plus sur votre projet..." : "Tell us about your project..."}
          className={`${inputClass("message")} resize-none`}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-600">{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-blue-200 hover:shadow-lg"
      >
        {state === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            {locale === "fr" ? "Envoi en cours..." : "Sending..."}
          </>
        ) : (
          <>
            {locale === "fr" ? "Envoyer le message" : "Send Message"}
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
