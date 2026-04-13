"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// ─── CONFIG ────────────────────────────────────────────────────────────────
// Replace with your actual Google Calendar public embed URL.
// How to get it:
//   1. Open Google Calendar → Settings → your calendar → "Integrate calendar"
//   2. Copy the "Public URL to this calendar" or the embed <iframe> src
//   3. Paste the src value below (make sure the calendar is set to PUBLIC)
const GOOGLE_CALENDAR_EMBED_URL =
  "https://calendar.google.com/calendar/embed?src=rehan4u999.rb%40gmail.com&ctz=Asia%2FKarachi&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=1&mode=WEEK&bgcolor=%23ffffff";

// Your WhatsApp number in international format, no + or spaces
const WHATSAPP_NUMBER = "923XXXXXXXXX"; // e.g. 923001234567
// ───────────────────────────────────────────────────────────────────────────

const services = [
  { id: "speech", label: "Speech Therapy Session", icon: "🗣️" },
  { id: "coding", label: "Coding / Programming Tutoring", icon: "💻" },
  { id: "ai", label: "AI Tools & Prompt Engineering", icon: "🤖" },
  { id: "communication", label: "Communication Coaching", icon: "🎤" },
  { id: "other", label: "Other / Not Sure Yet", icon: "💬" },
];

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState("");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  const buildWhatsAppLink = () => {
    const service = services.find((s) => s.id === selectedService)?.label ?? "a session";
    const message = encodeURIComponent(
      `Hi Rehan! I'd like to book *${service}* on TechTutors.ai.\n\nName: ${name || "(not provided)"}\n\nNote: ${note || "—"}\n\nI checked your calendar and would like to discuss availability.`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-950 py-16 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-extrabold text-white mb-3"
        >
          Book a Session
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/60 text-lg max-w-xl mx-auto"
        >
          Check availability below, then reach out on WhatsApp to confirm your slot.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* ── Left: Calendar ─────────────────────────────── */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-bold text-gray-900 text-sm">Live Availability</h2>
                  <p className="text-xs text-gray-400">Synced with Google Calendar · Updates in real-time</p>
                </div>
                <span className="ml-auto flex items-center gap-1.5 text-xs text-green-600 font-medium bg-green-50 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  Live
                </span>
              </div>

              {/* Google Calendar Embed */}
              <div className="relative w-full" style={{ height: "520px" }}>
                <iframe
                  src={GOOGLE_CALENDAR_EMBED_URL}
                  className="w-full h-full border-0"
                  title="Availability Calendar"
                />
              </div>

              <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-blue-500 inline-block" /> Booked
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-gray-200 inline-block" /> Available
                </span>
                <span className="ml-auto">All times shown in PKT (UTC+5)</span>
              </div>
            </div>
          </div>

          {/* ── Right: WhatsApp Form ────────────────────────── */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* How it works */}
            <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
              <h3 className="font-bold text-gray-900 text-sm mb-3">How booking works</h3>
              <ol className="space-y-2.5">
                {[
                  "Check the calendar for an open slot",
                  "Fill in your details below",
                  "Tap 'Contact on WhatsApp'",
                  "Rehan will confirm your booking",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col gap-4">
              <h2 className="font-bold text-gray-900">Your Details</h2>

              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sara Ahmed"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  What are you interested in?
                </label>
                <div className="space-y-2">
                  {services.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedService(s.id)}
                      className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-sm transition-all ${
                        selectedService === s.id
                          ? "border-blue-500 bg-blue-50 text-blue-700 font-medium"
                          : "border-gray-200 text-gray-600 hover:border-blue-200"
                      }`}
                    >
                      <span>{s.icon}</span>
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Note */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Anything to add? (optional)
                </label>
                <textarea
                  rows={3}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="e.g. preferred time, child's age, specific topic..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                />
              </div>

              {/* WhatsApp CTA */}
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl transition-colors text-sm shadow-lg shadow-green-500/20"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contact on WhatsApp
              </a>

              <p className="text-xs text-gray-400 text-center">
                You'll be redirected to WhatsApp with your details pre-filled
              </p>
            </div>

            {/* Rating / Trust */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-center gap-1 mb-2">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="text-sm font-bold text-gray-900 ml-1">4.97</span>
                <span className="text-xs text-gray-400 ml-1">· 300+ sessions</span>
              </div>
              <p className="text-xs text-gray-500 italic leading-relaxed">
                "Rehan is incredibly patient and knowledgeable. My son's speech improved noticeably within 6 weeks."
              </p>
              <p className="text-xs text-gray-400 mt-2 font-medium">— Parent, Lahore</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
