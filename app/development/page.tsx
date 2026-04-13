"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "923XXXXXXXXX";

const services = [
  {
    icon: "🖥️",
    title: "Frontend Development",
    desc: "Pixel-perfect, responsive UIs built with React, Next.js, Tailwind CSS, and modern animation libraries. Fast, accessible, and production-ready.",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: "⚙️",
    title: "Backend Development",
    desc: "Scalable APIs and server-side systems using Node.js, Ruby on Rails, Laravel, and PHP. REST, GraphQL, authentication, and database design.",
    tags: ["Node.js", "Ruby on Rails", "Laravel", "PHP", "PostgreSQL"],
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: "🌐",
    title: "Full-Stack Web Apps",
    desc: "End-to-end web applications from database to UI. We handle architecture, development, deployment, and ongoing maintenance.",
    tags: ["Full-Stack", "Next.js", "Rails", "MySQL", "Redis"],
    color: "from-green-500 to-teal-600",
  },
  {
    icon: "🛒",
    title: "E-Commerce Solutions",
    desc: "Custom online stores with payment integration, inventory management, and admin dashboards. Shopify, WooCommerce, or fully custom builds.",
    tags: ["Shopify", "WooCommerce", "Stripe", "PayPal", "Custom"],
    color: "from-orange-500 to-amber-600",
  },
  {
    icon: "🤖",
    title: "AI-Powered Features",
    desc: "Integrate AI into your product — chatbots, content generation, smart search, recommendation engines, and automation using the latest LLMs.",
    tags: ["OpenAI", "Claude", "LangChain", "Python", "Automation"],
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: "🔧",
    title: "Bug Fixes & Error Resolution",
    desc: "Senior engineers using AI-assisted debugging to find and fix issues fast — legacy codebases, performance bottlenecks, security vulnerabilities.",
    tags: ["Debugging", "Performance", "Security", "Legacy Code", "AI Tools"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: "📱",
    title: "Responsive & Mobile-First",
    desc: "Every site we build works flawlessly on all screen sizes. Mobile-first design with cross-browser compatibility guaranteed.",
    tags: ["Mobile-First", "PWA", "Cross-Browser", "SEO", "Performance"],
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: "🚀",
    title: "Deployment & DevOps",
    desc: "CI/CD pipelines, cloud deployment on Vercel, AWS, or DigitalOcean, Docker containerisation, and domain/SSL setup.",
    tags: ["Vercel", "AWS", "Docker", "CI/CD", "SSL"],
    color: "from-slate-500 to-gray-700",
  },
];

const techStack = [
  { name: "Next.js", icon: "▲", color: "bg-black text-white" },
  { name: "React", icon: "⚛", color: "bg-blue-100 text-blue-700" },
  { name: "TypeScript", icon: "TS", color: "bg-blue-600 text-white" },
  { name: "Ruby on Rails", icon: "💎", color: "bg-red-100 text-red-700" },
  { name: "Laravel", icon: "🔴", color: "bg-orange-100 text-orange-700" },
  { name: "PHP", icon: "🐘", color: "bg-indigo-100 text-indigo-700" },
  { name: "Node.js", icon: "🟢", color: "bg-green-100 text-green-700" },
  { name: "Python", icon: "🐍", color: "bg-yellow-100 text-yellow-700" },
  { name: "PostgreSQL", icon: "🐘", color: "bg-blue-100 text-blue-800" },
  { name: "MySQL", icon: "🗄️", color: "bg-orange-100 text-orange-800" },
  { name: "Tailwind CSS", icon: "🎨", color: "bg-cyan-100 text-cyan-700" },
  { name: "Docker", icon: "🐳", color: "bg-sky-100 text-sky-700" },
  { name: "AWS", icon: "☁️", color: "bg-yellow-100 text-yellow-800" },
  { name: "Vercel", icon: "▲", color: "bg-gray-900 text-white" },
  { name: "OpenAI / Claude", icon: "🤖", color: "bg-purple-100 text-purple-700" },
  { name: "HTML / CSS / JS", icon: "🌐", color: "bg-orange-100 text-orange-600" },
];

const portfolio = [
  {
    title: "EduPlatform SaaS",
    desc: "Full-stack learning management system with live sessions, course marketplace, and AI tutor assistant.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "AI"],
    type: "SaaS",
    color: "from-blue-500 to-indigo-600",
    icon: "🎓",
  },
  {
    title: "E-Commerce Store",
    desc: "Custom WooCommerce store with inventory management, multi-currency support, and admin dashboard.",
    tags: ["PHP", "WooCommerce", "MySQL", "Stripe"],
    type: "E-Commerce",
    color: "from-green-500 to-teal-600",
    icon: "🛒",
  },
  {
    title: "Healthcare Booking System",
    desc: "Patient appointment booking with Google Calendar sync, WhatsApp notifications, and therapist dashboards.",
    tags: ["Rails", "React", "Google API", "WhatsApp"],
    type: "Healthcare",
    color: "from-pink-500 to-rose-600",
    icon: "🏥",
  },
  {
    title: "Real Estate Portal",
    desc: "Property listing platform with advanced search filters, map integration, and agent CRM.",
    tags: ["Laravel", "Vue.js", "MySQL", "Google Maps"],
    type: "Portal",
    color: "from-orange-500 to-amber-600",
    icon: "🏠",
  },
  {
    title: "AI Chatbot Integration",
    desc: "Custom GPT-powered support chatbot embedded into a SaaS product with context-aware responses.",
    tags: ["Python", "OpenAI", "Node.js", "React"],
    type: "AI",
    color: "from-purple-500 to-violet-600",
    icon: "🤖",
  },
  {
    title: "Legacy App Rescue",
    desc: "Diagnosed and fixed critical performance issues in a 6-year-old Rails app — 10x speed improvement.",
    tags: ["Ruby on Rails", "PostgreSQL", "Redis", "DevOps"],
    type: "Bug Fix",
    color: "from-cyan-500 to-blue-500",
    icon: "🔧",
  },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "We understand your project, goals, timeline, and budget on a free WhatsApp or video call.", icon: "💬" },
  { step: "02", title: "Proposal & Quote", desc: "You receive a clear scope of work, tech stack recommendation, timeline, and fixed price.", icon: "📋" },
  { step: "03", title: "Design & Build", desc: "Our senior team builds your project with regular updates and demos throughout.", icon: "🛠️" },
  { step: "04", title: "Testing & Launch", desc: "Thorough QA, bug fixes, deployment, and handover with full documentation.", icon: "🚀" },
];

const faqs = [
  { q: "How long does a typical project take?", a: "A landing page takes 3–5 days. A full web app typically 4–8 weeks depending on complexity. We give you a clear timeline upfront." },
  { q: "Do you fix bugs in existing projects?", a: "Yes — this is one of our specialties. We use AI-assisted debugging tools to diagnose and fix issues in any codebase, including legacy apps." },
  { q: "What languages and frameworks do you support?", a: "We work with any modern stack — Next.js, React, Ruby on Rails, Laravel, PHP, Node.js, Python, and more. If it's code, we can work with it." },
  { q: "How do I get started?", a: "Just tap the WhatsApp button, describe your project briefly, and we'll set up a free discovery call within 24 hours." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" as const },
  }),
};

export default function DevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const waLink = (msg: string) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 py-28 px-4 overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-semibold px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Senior Development Team · Available Now
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
          >
            We Build
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Web Products
            </span>
            That Work.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Full-stack development, AI integration, bug fixes, and everything in between.
            Frontend, backend, or end-to-end — any language, any framework, any scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={waLink("Hi! I'm interested in web development services from TechTutors.ai. I'd like to discuss my project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-2xl transition-colors text-base shadow-lg shadow-green-500/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Discuss Your Project
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/10 transition-colors text-base"
            >
              View Our Work
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-2xl mx-auto"
          >
            {[
              { v: "50+", l: "Projects Delivered" },
              { v: "Any Stack", l: "Language Support" },
              { v: "AI-Powered", l: "Bug Fixing" },
              { v: "24hr", l: "Response Time" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-2xl font-extrabold text-white">{s.v}</div>
                <div className="text-xs text-white/40 mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3 block">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Development Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">From a simple landing page to a complex SaaS platform — we've got the full stack covered.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 p-6 flex flex-col group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-2xl mb-4`}>
                  {s.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md font-medium">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-3 block">Our Stack</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Any Language. Any Framework.</h2>
            <p className="text-gray-500 max-w-lg mx-auto">We work with the latest technologies and support legacy stacks too. If it's code, we can build it.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold ${t.color} border border-gray-100`}
              >
                <span>{t.icon}</span>
                {t.name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio ─────────────────────────────────────────── */}
      <section id="portfolio" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-green-600 uppercase tracking-widest mb-3 block">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Recent Work</h2>
            <p className="text-gray-500 max-w-xl mx-auto">A selection of projects we've built, fixed, and shipped.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((p, i) => (
              <motion.div
                key={p.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${p.color}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{p.icon}</span>
                    <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{p.type}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-blue-50 text-blue-600 px-2.5 py-1 rounded-lg font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-3 block">How We Work</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Simple, Transparent Process</h2>
            <p className="text-gray-500">No surprises. No hidden costs. Just clean execution.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                  {p.icon}
                </div>
                <div className="text-xs font-bold text-blue-500 mb-1">Step {p.step}</div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-semibold text-gray-900 text-sm">{faq.q}</span>
                  <svg
                    className={`w-4 h-4 text-gray-400 flex-shrink-0 ml-4 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-950 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Have a project in mind?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Drop us a message on WhatsApp. We respond within 24 hours and offer a free discovery call.
          </p>
          <a
            href={waLink("Hi TechTutors.ai! I have a web development project I'd like to discuss.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-10 py-4 rounded-2xl transition-colors text-base shadow-xl shadow-green-500/20"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Start on WhatsApp
          </a>
          <p className="text-white/30 text-xs mt-4">Free consultation · No commitment required</p>
        </div>
      </section>

    </div>
  );
}
