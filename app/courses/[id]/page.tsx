"use client";

import { use, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { courses } from "@/data/courses";
import { roadmaps } from "@/data/roadmaps";
import Link from "next/link";

const WHATSAPP_NUMBER = "923XXXXXXXXX";

const typeStyles = {
  lesson:  { bg: "bg-blue-100",   text: "text-blue-700",   label: "Lesson",   icon: "📖" },
  quiz:    { bg: "bg-yellow-100", text: "text-yellow-700", label: "Quiz",     icon: "✏️" },
  project: { bg: "bg-green-100",  text: "text-green-700",  label: "Project",  icon: "🛠️" },
  session: { bg: "bg-purple-100", text: "text-purple-700", label: "1-on-1",   icon: "🎓" },
};

export default function CoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const courseId = parseInt(id);
  const course = courses.find((c) => c.id === courseId);
  const roadmap = roadmaps.find((r) => r.courseId === courseId);
  const [openWeek, setOpenWeek] = useState<number | null>(1);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-5xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Course not found</h2>
          <p className="text-gray-500 mb-6">This course doesn't exist or may have moved.</p>
          <Link href="/courses" className="text-blue-600 font-semibold hover:underline">← Back to Courses</Link>
        </div>
      </div>
    );
  }

  // Group roadmap items by week
  const weeks = roadmap
    ? Array.from(new Set(roadmap.roadmap.map((r) => r.week))).map((w) => ({
        week: w,
        items: roadmap.roadmap.filter((r) => r.week === w),
      }))
    : [];

  const waMsg = encodeURIComponent(
    `Hi! I'm interested in enrolling in *${course.title}* on TechTutors.ai. Please share payment details.`
  );

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <div className={`bg-gradient-to-br ${course.color} py-20 px-4`}>
        <div className="max-w-5xl mx-auto">
          <Link href="/courses" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Courses
          </Link>

          <div className="flex items-start gap-6">
            <div className="text-5xl">{course.icon}</div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">{course.category}</span>
                <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">{course.level}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">{course.title}</h1>
              <p className="text-white/80 text-lg max-w-2xl">{course.description}</p>

              <div className="flex flex-wrap gap-6 mt-6 text-white/80 text-sm">
                <span className="flex items-center gap-1.5">⏱ {course.duration}</span>
                {roadmap && <span className="flex items-center gap-1.5">🕐 {roadmap.totalHours} total hours</span>}
                {roadmap && <span className="flex items-center gap-1.5">🎓 {roadmap.tutorSessions} tutor sessions</span>}
                <span className="flex items-center gap-1.5">⭐ {course.rating} ({course.students.toLocaleString()} students)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ── Roadmap ───────────────────────────────────────── */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Course Roadmap</h2>
            <p className="text-gray-500 text-sm mb-8">
              A structured week-by-week journey — from fundamentals to real projects. Daily quizzes and practice sessions keep you sharp throughout.
            </p>

            {roadmap ? (
              <div className="space-y-3">
                {weeks.map(({ week, items }) => (
                  <div key={week} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                    <button
                      onClick={() => setOpenWeek(openWeek === week ? null : week)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                          W{week}
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900 text-sm">Week {week}</span>
                          <span className="text-gray-400 text-xs ml-2">· {items.length} {items.length === 1 ? "item" : "items"}</span>
                        </div>
                        <div className="flex gap-1 ml-2">
                          {items.map((item, i) => (
                            <span key={i} title={typeStyles[item.type].label} className="text-sm">{typeStyles[item.type].icon}</span>
                          ))}
                        </div>
                      </div>
                      <svg
                        className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ${openWeek === week ? "rotate-180" : ""}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {openWeek === week && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 space-y-4 border-t border-gray-100 pt-4">
                            {items.map((item, i) => {
                              const style = typeStyles[item.type];
                              return (
                                <div key={i} className="flex gap-4">
                                  {/* Timeline dot */}
                                  <div className="flex flex-col items-center">
                                    <div className={`w-8 h-8 rounded-xl ${style.bg} flex items-center justify-center text-base flex-shrink-0`}>
                                      {style.icon}
                                    </div>
                                    {i < items.length - 1 && <div className="w-0.5 bg-gray-100 flex-1 mt-1" />}
                                  </div>
                                  <div className="flex-1 pb-2">
                                    <div className="flex items-center gap-2 mb-1">
                                      <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${style.bg} ${style.text}`}>
                                        {style.label}
                                      </span>
                                    </div>
                                    <ul className="space-y-1">
                                      {item.topics.map((topic, j) => (
                                        <li key={j} className="flex items-start gap-2 text-xs text-gray-500">
                                          <span className="text-gray-300 mt-0.5">•</span>
                                          {topic}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center text-gray-400">
                Roadmap coming soon for this course.
              </div>
            )}

            {/* Legend */}
            <div className="flex flex-wrap gap-3 mt-6">
              {Object.entries(typeStyles).map(([key, s]) => (
                <span key={key} className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full ${s.bg} ${s.text}`}>
                  {s.icon} {s.label}
                </span>
              ))}
            </div>
          </div>

          {/* ── Sidebar ───────────────────────────────────────── */}
          <div className="space-y-5">

            {/* Pricing card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm sticky top-20">
              <div className="text-3xl font-extrabold text-gray-900 mb-1">
                ${course.price}
                <span className="text-sm font-normal text-gray-400 ml-1">/ course</span>
              </div>

              {/* What's included */}
              <div className="space-y-2.5 my-5">
                {[
                  { icon: "📅", text: `${course.duration} structured programme` },
                  { icon: "🕐", text: roadmap ? `${roadmap.totalHours} total learning hours` : "30–40 total hours" },
                  { icon: "🎓", text: roadmap ? `${roadmap.tutorSessions} × 1-on-1 tutor sessions (1 hr each)` : "1-on-1 tutor sessions" },
                  { icon: "✏️", text: "Daily quizzes & practice exercises" },
                  { icon: "🛠️", text: "Real-world mini projects" },
                  { icon: "📜", text: "Certificate of completion" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="flex-shrink-0">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>

              {/* Course material — locked */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
                <div className="flex items-center gap-2 mb-1">
                  <span>🔒</span>
                  <span className="text-xs font-bold text-amber-800">Unlocked on Purchase</span>
                </div>
                <p className="text-xs text-amber-700 leading-relaxed">
                  {roadmap?.selfPacedHours ?? "8–12 hrs"} of recorded course material, exercises, and resources — available immediately after enrolment.
                </p>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 rounded-xl transition-colors text-sm shadow-lg shadow-green-500/20"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enrol via WhatsApp
              </a>
              <p className="text-xs text-gray-400 text-center mt-3">Contact us to enrol · Secure & personal</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
