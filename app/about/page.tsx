"use client";

import { motion } from "framer-motion";
import CTAButton from "@/components/CTAButton";

const values = [
  { icon: "🎯", title: "Mission-Driven", desc: "We exist to make quality education accessible — whether you're learning to code or improving your communication." },
  { icon: "🤝", title: "Expert-Led", desc: "Every tutor is vetted. Every course is built by practitioners with real-world experience." },
  { icon: "🌍", title: "Inclusive by Design", desc: "From speech therapy to software engineering, we serve learners of all backgrounds and abilities." },
  { icon: "🚀", title: "AI-Augmented", desc: "We're building the next generation of learning tools — where AI amplifies human expertise, not replaces it." },
];

const team = [
  { name: "Rehan Butt", role: "CEO & Founder", avatar: "RB", color: "from-blue-500 to-indigo-600" },
  { name: "Dr. Huma Fiaz", role: "Head of Speech Therapy", avatar: "HF", color: "from-purple-500 to-pink-600" },
  { name: "Marjan", role: "CTO Engineer", avatar: "MJ", color: "from-green-500 to-teal-600" },
  { name: "Farhan Butt", role: "COO", avatar: "FB", color: "from-orange-500 to-red-500" },
  { name: "AI Engineer", role: "AI Engineer", avatar: "AI", color: "from-cyan-500 to-blue-600" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-950 py-24 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block bg-white/10 text-white/80 text-xs font-medium px-4 py-2 rounded-full mb-6">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            We built the platform we wished existed
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            TechTutors.ai was born from a simple observation: the best learners need both technical skills and strong communication. We combined technology education, speech & language therapy, and AI-powered tutoring into one platform.
          </p>
        </motion.div>
      </div>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                We believe that learning technology and learning to communicate are two sides of the same coin. The most effective engineers, leaders, and professionals are those who can both build and articulate.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                TechTutors.ai brings together expert software engineers, licensed speech-language pathologists, and communication coaches — all in one place, powered by AI that adapts to how you learn.
              </p>
              <CTAButton href="/courses" variant="primary">
                Explore Courses
              </CTAButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { num: "12K+", label: "Active Learners" },
                { num: "500+", label: "Expert Tutors" },
                { num: "200+", label: "Courses" },
                { num: "98%", label: "Satisfaction Rate" },
              ].map((s) => (
                <div key={s.label} className="bg-gray-50 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                    {s.num}
                  </div>
                  <div className="text-sm text-gray-500">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">What we stand for</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Our values shape every decision we make.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Meet the team</h2>
            <p className="text-gray-500">The people building TechTutors.ai</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white font-bold text-xl">{member.avatar}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm">{member.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-center px-4">
        <h2 className="text-3xl font-extrabold text-white mb-4">Join us on the journey</h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">
          Whether you want to learn, teach, or build — there's a place for you at TechTutors.ai
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/courses" variant="secondary" size="lg">Browse Courses</CTAButton>
          <CTAButton href="/tutors" variant="outline" size="lg">Find a Tutor</CTAButton>
        </div>
      </section>
    </div>
  );
}
