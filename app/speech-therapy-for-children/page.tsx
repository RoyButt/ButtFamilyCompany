"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { courses } from "@/data/courses";

const speechCourses = courses.filter((c) => c.category === "Speech Therapy");

const signs = [
  { age: "12–18 months", sign: "Not saying any words or babbling very little" },
  { age: "2 years", sign: "Using fewer than 50 words or not combining two words" },
  { age: "3 years", sign: "Strangers can't understand most of what your child says" },
  { age: "4–5 years", sign: "Difficulty with storytelling, grammar, or following instructions" },
  { age: "School age", sign: "Struggles with reading, writing, or classroom communication" },
];

const faqs = [
  {
    q: "How do I know if my child needs speech therapy?",
    a: "If your child is not meeting speech and language milestones for their age, or if you notice difficulty being understood, following directions, or socialising — an evaluation with a licensed SLP is the best first step.",
  },
  {
    q: "Can speech therapy be done online?",
    a: "Yes. Teletherapy is highly effective for children and is often more comfortable for them in their home environment. Our licensed SLPs deliver sessions via secure video call.",
  },
  {
    q: "How long does speech therapy take?",
    a: "It varies by child and goal. Some children see significant progress in 8–12 weeks; others benefit from longer programmes. Your therapist will set clear, measurable goals from the start.",
  },
  {
    q: "What can parents do at home to help?",
    a: "A lot! Reading aloud daily, narrating activities, reducing screen time, and practising specific exercises given by your SLP all make a big difference. Our parent courses teach you exactly how.",
  },
  {
    q: "Is this suitable for children with autism?",
    a: "Absolutely. We have SLPs who specialise in AAC, social communication, and pragmatic language — all areas critical for children on the autism spectrum.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function SpeechTherapyChildrenPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-pink-200/40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">

          {/* Punjab Govt Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            {/* Punjab Govt Emblem — SVG crest */}
            <div className="flex items-center gap-3 bg-white border-2 border-green-700 rounded-2xl px-5 py-3 shadow-md">
              <svg viewBox="0 0 60 60" className="w-10 h-10 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Shield */}
                <path d="M30 4 L54 14 L54 34 C54 46 42 55 30 58 C18 55 6 46 6 34 L6 14 Z" fill="#006400" />
                <path d="M30 8 L50 17 L50 34 C50 44 40 52 30 55 C20 52 10 44 10 34 L10 17 Z" fill="#ffffff" />
                {/* Crescent */}
                <path d="M30 18 C24 18 19 23 19 29 C19 35 24 40 30 40 C26 40 22 36 22 29 C22 22 26 18 30 18Z" fill="#006400" />
                {/* Star */}
                <polygon points="36,20 37.2,24 41,24 38,26.5 39.2,30.5 36,28 32.8,30.5 34,26.5 31,24 34.8,24" fill="#006400" />
                {/* Bottom banner */}
                <rect x="12" y="47" width="36" height="7" rx="2" fill="#006400" />
                <text x="30" y="53" textAnchor="middle" fill="white" fontSize="4" fontWeight="bold" fontFamily="serif">PUNJAB</text>
              </svg>
              <div className="text-left">
                <div className="text-xs font-bold text-green-800 leading-tight">Government of Punjab</div>
                <div className="text-xs text-green-700 leading-tight">Pakistan · Licensed Therapist</div>
              </div>
            </div>
            <div className="bg-pink-100 text-pink-700 text-xs font-semibold px-4 py-3 rounded-2xl border border-pink-200">
              🏥 Specialist Health Education Programme
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
          >
            Speech & Language Therapy
            <span className="block bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              for All Ages
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            From a child's first words to an adult's professional voice — expert-led therapy and education programmes that transform communication at every stage of life.
          </motion.p>

          {/* Specialisms strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {["Articulation","Stammering","Speech & Language Delay","Autism","Voice Disorders","Dysarthria","Accent Modification"].map((s) => (
              <span key={s} className="bg-white border border-pink-200 text-pink-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                {s}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity shadow-lg shadow-pink-500/25 text-base"
            >
              Book a Free Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="#courses"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-800 font-semibold px-8 py-4 rounded-2xl border-2 border-gray-200 hover:border-pink-300 transition-colors text-base"
            >
              View Courses
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-gray-500"
          >
            {["✅ Licensed SLPs", "✅ Online Sessions", "✅ Children & Adults", "✅ Evidence-Based"].map((b) => (
              <span key={b} className="font-medium">{b}</span>
            ))}
          </motion.div>

          {/* Age groups */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 max-w-3xl mx-auto"
          >
            {[
              { icon: "👶", label: "Toddlers", sub: "1–3 years" },
              { icon: "🧒", label: "Children", sub: "4–12 years" },
              { icon: "🧑", label: "Teens", sub: "13–18 years" },
              { icon: "👨‍💼", label: "Adults", sub: "All ages" },
            ].map((g) => (
              <div key={g.label} className="bg-white/80 backdrop-blur-sm border border-pink-100 rounded-2xl p-4 text-center">
                <div className="text-2xl mb-1">{g.icon}</div>
                <div className="text-sm font-bold text-gray-900">{g.label}</div>
                <div className="text-xs text-gray-400">{g.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Why Early Intervention ───────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold text-pink-600 uppercase tracking-widest mb-3 block">Why It Matters</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
                Communication changes everything — at any age
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                Whether it's a toddler saying their first words, a child struggling in school, a teenager who stammers, or an adult wanting to speak more clearly at work — the right therapy at the right time makes a life-changing difference.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Dr. Huma Fiaz is a Government of Punjab licensed Speech-Language Pathologist with 10+ years of clinical experience treating children, teens, and adults. She works with you — not just the patient — so progress happens every day, not just in sessions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "92%", label: "of parents report improvement within 8 weeks" },
                  { num: "500+", label: "children supported on our platform" },
                  { num: "100%", label: "licensed & certified SLPs" },
                  { num: "Online", label: "sessions from the comfort of home" },
                ].map((s) => (
                  <div key={s.label} className="bg-pink-50 rounded-2xl p-4">
                    <div className="text-2xl font-extrabold text-pink-600 mb-1">{s.num}</div>
                    <div className="text-xs text-gray-500 leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 border border-pink-100"
            >
              <h3 className="font-bold text-gray-900 text-lg mb-6">Signs your child may benefit from speech therapy</h3>
              <div className="space-y-4">
                {signs.map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="bg-pink-100 text-pink-700 text-xs font-bold px-2.5 py-1 rounded-lg flex-shrink-0 mt-0.5">
                      {s.age}
                    </span>
                    <p className="text-sm text-gray-600 leading-relaxed">{s.sign}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-6 italic">
                Not sure? Book a free 15-minute consultation with one of our SLPs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Courses ──────────────────────────────────────────── */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-3 block">Programmes</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Speech Therapy Courses
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Structured programmes for parents, caregivers, and SLP students — all built around children's needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {speechCourses.map((course, i) => (
              <motion.div
                key={course.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl border border-gray-100 hover:border-pink-200 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className={`h-2 bg-gradient-to-r ${course.color}`} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{course.icon}</span>
                    <span className="text-xs font-medium text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{course.description}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
                    <span>⏱ {course.duration}</span>
                    <span>⭐ {course.rating}</span>
                    <span>👥 {course.students.toLocaleString()} enrolled</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xl font-bold text-gray-900">${course.price}</span>
                    <Link
                      href="/booking"
                      className="text-sm font-semibold bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-xl hover:opacity-90 transition-opacity"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">How it works</h2>
            <p className="text-gray-500">Simple, supportive, and built around your child</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {[
              { step: "1", icon: "📋", title: "Free Consultation", desc: "Book a free 15-min call with an SLP to discuss your child's needs." },
              { step: "2", icon: "🎯", title: "Personalised Plan", desc: "Your therapist creates a tailored therapy plan with clear goals." },
              { step: "3", icon: "💻", title: "Online Sessions", desc: "Weekly 1-on-1 video sessions from the comfort of your home." },
              { step: "4", icon: "📈", title: "Track Progress", desc: "Regular updates and home activities so you're always involved." },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                  {s.icon}
                </div>
                <div className="text-xs font-bold text-pink-500 mb-1">Step {s.step}</div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meet the SLPs ────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Meet our Speech-Language Pathologists</h2>
          <p className="text-gray-500 mb-12 max-w-xl mx-auto">
            Every therapist on TechTutors.ai is licensed, experienced, and passionate about helping children thrive.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              { name: "Dr. Huma Fiaz", title: "Head of Speech Therapy · Govt. of Punjab Licensed · 10+ yrs", avatar: "HF", color: "from-pink-500 to-rose-600", spec: "Articulation · Stammering · Language Delay · Autism · Voice · Dysarthria · Accent Modification" },
              { name: "Dr. Elena Rossi", title: "Fluency & Voice Specialist · 10 yrs experience", avatar: "ER", color: "from-purple-500 to-violet-600", spec: "Stuttering · AAC · Autism Support" },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border border-pink-100 text-left flex items-start gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold text-lg">{t.avatar}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{t.name}</h3>
                  <p className="text-xs text-gray-400 mt-0.5 mb-2">{t.title}</p>
                  <p className="text-xs text-pink-600 font-medium">{t.spec}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/tutors" className="inline-block mt-8 text-sm font-semibold text-purple-600 hover:text-purple-700">
            View all therapists →
          </Link>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500">Everything parents want to know before getting started</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{faq.q}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-pink-500 to-purple-700 text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Your child's voice matters.
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Book a free consultation today and take the first step toward confident communication.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 bg-white text-pink-600 font-bold px-10 py-4 rounded-2xl hover:bg-pink-50 transition-colors text-base shadow-xl"
          >
            Book Free Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="text-white/50 text-xs mt-4">No commitment required · 15 minutes · Free</p>
        </div>
      </section>

    </div>
  );
}
