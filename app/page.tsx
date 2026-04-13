"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import CourseCard from "@/components/CourseCard";
import TutorCard from "@/components/TutorCard";
import { courses } from "@/data/courses";
import { tutors } from "@/data/tutors";

const stats = [
  { value: "100+", label: "Active Students" },
  { value: "20+", label: "Expert Courses" },
  { value: "5.0★", label: "Courses Rating" },
  { value: "4.9★", label: "Average Rating" },
];

const features = [
  {
    icon: "💻",
    title: "Technology Education",
    desc: "From web dev to AI/ML — learn the skills that power the modern world.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: "🗣️",
    title: "Speech & Language Therapy",
    desc: "Work with licensed SLPs to improve communication, fluency, and voice.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: "🤖",
    title: "AI-Powered Learning",
    desc: "Our AI assistant adapts to your pace and helps you learn smarter, not harder.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: "📅",
    title: "Flexible Booking",
    desc: "Book 1-on-1 sessions with expert tutors on your schedule, from anywhere.",
    color: "bg-green-50 text-green-600",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs font-medium px-4 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Now with AI-powered tutoring assistant
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6"
          >
            TechTutors
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">.ai</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/70 font-medium mb-4"
          >
            Learn Tech. Learn Communication. Learn Anything.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base text-white/50 max-w-2xl mx-auto mb-10"
          >
            The only platform that combines technology education, speech & language therapy, and AI-powered tutoring — all in one place.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <CTAButton href="/tutors" variant="primary" size="lg">
              Find a Tutor
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </CTAButton>
            <CTAButton href="/courses" variant="outline" size="lg">
              Browse Courses
            </CTAButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20 max-w-3xl mx-auto"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-extrabold text-white">{stat.value}</div>
                <div className="text-xs text-white/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Everything you need to grow
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              One platform. Multiple domains. Unlimited potential.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center text-2xl mb-4`}>
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">Featured Courses</h2>
              <p className="text-gray-500">Handpicked by our team for maximum impact</p>
            </div>
            <Link href="/courses" className="text-sm font-semibold text-blue-600 hover:text-blue-700 hidden sm:block">
              View all courses →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.slice(0, 4).map((course, i) => (
              <motion.div
                key={course.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10 sm:hidden">
            <Link href="/courses" className="text-sm font-semibold text-blue-600">
              View all courses →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tutors */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">Top Tutors</h2>
              <p className="text-gray-500">Learn from verified experts in tech and communication</p>
            </div>
            <Link href="/tutors" className="text-sm font-semibold text-blue-600 hover:text-blue-700 hidden sm:block">
              Browse all tutors →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutors.slice(0, 3).map((tutor, i) => (
              <motion.div
                key={tutor.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <TutorCard tutor={tutor} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant Teaser */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-medium px-4 py-2 rounded-full mb-6">
            <span>🤖</span> Coming Soon
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Meet Your AI Learning Assistant
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            An intelligent tutor that knows your learning style, tracks your progress, and answers questions 24/7 — powered by the latest AI.
          </p>
          <CTAButton href="/ai-assistant" variant="secondary" size="lg">
            Try the Preview
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </CTAButton>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Ready to start learning?
          </h2>
          <p className="text-gray-500 mb-8">
            Join thousands of students already learning on TechTutors.ai
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/courses" variant="primary" size="lg">
              Browse Courses
            </CTAButton>
            <CTAButton href="/tutors" variant="secondary" size="lg">
              Find a Tutor
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
