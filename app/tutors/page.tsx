"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tutors, Tutor } from "@/data/tutors";

const tabs = [
  { id: "all", label: "All Tutors" },
  { id: "tech", label: "💻 Programming & AI" },
  { id: "speech", label: "🗣️ Speech Therapy" },
];

const avatarColors = [
  "from-blue-500 to-indigo-600",
  "from-purple-500 to-pink-600",
  "from-green-500 to-teal-600",
  "from-orange-500 to-red-500",
  "from-cyan-500 to-blue-500",
  "from-violet-500 to-purple-600",
];

const WHATSAPP_NUMBER = "923XXXXXXXXX";

function CalendarModal({ tutor, onClose }: { tutor: Tutor; onClose: () => void }) {
  const waMessage = encodeURIComponent(
    `Hi! I'd like to book a session with *${tutor.name}* on TechTutors.ai. Please let me know the available slots.`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${avatarColors[tutor.id % avatarColors.length]} flex items-center justify-center`}>
              <span className="text-white font-bold text-sm">{tutor.avatar}</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">{tutor.name}</h3>
              <p className="text-xs text-gray-400">{tutor.title}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Calendar or On Leave */}
        {tutor.onLeave || !tutor.calendarUrl ? (
          <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">🌴</span>
            </div>
            <h4 className="font-bold text-gray-900 text-lg mb-2">Currently on Leave</h4>
            <p className="text-gray-500 text-sm max-w-sm">
              {tutor.name} is currently on planned leave and not accepting new bookings. Please check back soon or contact us on WhatsApp for updates.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi! I'm interested in sessions with ${tutor.name}. When will they be available?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#20bd5a] transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Ask About Availability
            </a>
          </div>
        ) : (
          <>
            <div className="px-6 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Live availability · PKT (UTC+5)
              </div>
              <span className="text-xs text-gray-400">See a slot? Contact on WhatsApp to confirm</span>
            </div>
            <div style={{ height: "460px" }}>
              <iframe
                src={tutor.calendarUrl}
                className="w-full h-full border-0"
                title={`${tutor.name} availability`}
              />
            </div>
            <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between gap-4">
              <p className="text-xs text-gray-400">
                Spot something open? Tap below to confirm with {tutor.name.split(" ")[0]}.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#20bd5a] transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book via WhatsApp
              </a>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}

function TutorCard({ tutor, onViewCalendar }: { tutor: Tutor; onViewCalendar: () => void }) {
  const colorIndex = tutor.id % avatarColors.length;

  return (
    <div className={`relative bg-white rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col ${
      tutor.onLeave
        ? "border-gray-200 opacity-75"
        : "border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10"
    }`}>
      {/* On Leave banner */}
      {tutor.onLeave && (
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">
          🌴 On Leave
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${avatarColors[colorIndex]} flex items-center justify-center flex-shrink-0`}>
            <span className="text-white font-bold text-lg">{tutor.avatar}</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-bold text-gray-900 text-base">{tutor.name}</h3>
              {tutor.badge && (
                <span className="text-xs font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 py-0.5 rounded-full">
                  {tutor.badge}
                </span>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-0.5">{tutor.title}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map((s) => (
              <svg key={s} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
            <span className="text-sm font-bold text-gray-900 ml-1">{tutor.rating}</span>
            <span className="text-xs text-gray-400">({tutor.reviews})</span>
          </div>
          <span className="text-xs text-gray-400">{tutor.sessions.toLocaleString()} sessions</span>
        </div>

        {/* Bio */}
        <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1 line-clamp-2">{tutor.bio}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tutor.skills.slice(0, 3).map((skill) => (
            <span key={skill} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-lg font-medium">
              {skill}
            </span>
          ))}
          {tutor.skills.length > 3 && (
            <span className="text-xs bg-gray-100 text-gray-400 px-2.5 py-1 rounded-lg">
              +{tutor.skills.length - 3}
            </span>
          )}
        </div>

        {/* Languages */}
        <div className="flex items-center gap-1 mb-5">
          <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
          <span className="text-xs text-gray-400">{tutor.languages.join(", ")}</span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-xl font-bold text-gray-900">${tutor.hourlyRate}</span>
            <span className="text-xs text-gray-400 ml-1">/ hour</span>
          </div>
          <button
            onClick={onViewCalendar}
            className={`text-sm font-semibold px-5 py-2 rounded-xl transition-all ${
              tutor.onLeave
                ? "bg-gray-100 text-gray-400 cursor-default"
                : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 shadow-sm"
            }`}
          >
            {tutor.onLeave ? "On Leave" : "View Availability"}
          </button>
        </div>
      </div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" as const },
  }),
};

export default function TutorsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null);

  const filtered = tutors.filter((t) => {
    const matchTab = activeTab === "all" || t.domain === activeTab;
    const matchSearch =
      search === "" ||
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    return matchTab && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 to-purple-950 py-20 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
        >
          Meet Our Tutors
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/60 text-lg max-w-xl mx-auto mb-8"
        >
          Expert tutors in tech, AI, and speech therapy. View their live availability and book via WhatsApp.
        </motion.p>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-md mx-auto relative"
        >
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search by name or skill..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Domain Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <p className="text-sm text-gray-400 mb-6">
          {filtered.filter((t) => !t.onLeave).length} available ·{" "}
          {filtered.filter((t) => t.onLeave).length} on leave
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((tutor, i) => (
            <motion.div
              key={tutor.id}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <TutorCard
                tutor={tutor}
                onViewCalendar={() => setSelectedTutor(tutor)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Calendar Modal */}
      <AnimatePresence>
        {selectedTutor && (
          <CalendarModal
            tutor={selectedTutor}
            onClose={() => setSelectedTutor(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
