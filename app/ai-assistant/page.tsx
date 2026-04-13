"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

const suggestions = [
  "How do I learn React from scratch?",
  "What's the difference between stuttering and cluttering?",
  "Recommend a Python learning path for beginners",
  "How can I improve my public speaking?",
];

const mockResponses: Record<string, string> = {
  default:
    "That's a great question! I'm your AI learning assistant on TechTutors.ai. I can help you with programming, speech therapy concepts, communication skills, and finding the right tutor or course. What would you like to explore?",
  react:
    "To learn React from scratch, I'd recommend: 1) Start with JavaScript fundamentals (ES6+), 2) Learn HTML/CSS basics, 3) Take our Full-Stack Web Development course, 4) Build small projects like a todo app. Our tutor Sarah Chen is excellent for React — she's an ex-Google engineer with 8 years of experience!",
  python:
    "For Python beginners, here's a solid path: 1) Python syntax and data types, 2) Functions and OOP, 3) Libraries like NumPy and Pandas, 4) Your first ML project. Check out our 'Python for AI & Data Science' course, or book a session with Priya Sharma — she's a data scientist who helps students land their first ML job.",
  speech:
    "Stuttering is characterized by repetitions, prolongations, and blocks in speech. Cluttering involves rapid, irregular speech rate with reduced clarity. Both are fluency disorders but require different therapeutic approaches. Dr. Marcus Williams and Dr. Elena Rossi on our platform specialize in fluency disorders — I'd recommend booking a consultation!",
  speaking:
    "To improve public speaking: 1) Practice regularly with small audiences, 2) Record yourself to identify patterns, 3) Work on pacing and pausing, 4) Use storytelling techniques. Our 'Public Speaking Mastery' course covers all of this, and James O'Brien is a former TEDx speaker who can coach you 1-on-1.",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("react")) return mockResponses.react;
  if (lower.includes("python")) return mockResponses.python;
  if (lower.includes("stutter") || lower.includes("clutter") || lower.includes("speech")) return mockResponses.speech;
  if (lower.includes("public speaking") || lower.includes("speaking") || lower.includes("communication")) return mockResponses.speaking;
  return mockResponses.default;
}

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "assistant",
      content: "Hi! I'm your TechTutors.ai learning assistant 👋 I can help you find courses, recommend tutors, answer questions about tech or speech therapy, and guide your learning journey. What can I help you with today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now(), role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const reply: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: getResponse(text),
      };
      setMessages((prev) => [...prev, reply]);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 to-purple-950 py-12 px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium px-4 py-2 rounded-full mb-4">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          AI Assistant — Preview
        </div>
        <h1 className="text-4xl font-extrabold text-white mb-2">Your AI Learning Assistant</h1>
        <p className="text-white/60 max-w-lg mx-auto">
          Ask anything about courses, tutors, tech, or speech therapy. Powered by TechTutors.ai
        </p>
      </div>

      {/* Chat */}
      <div className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 py-8 flex flex-col gap-4">
        {/* Suggestions */}
        {messages.length === 1 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => sendMessage(s)}
                className="text-left text-sm text-gray-600 bg-white border border-gray-200 hover:border-blue-300 hover:text-blue-600 px-4 py-3 rounded-xl transition-all"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Messages */}
        <div className="flex flex-col gap-4">
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">AI</span>
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-sm"
                      : "bg-white border border-gray-100 text-gray-700 rounded-bl-sm shadow-sm"
                  }`}
                >
                  {msg.content}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Loading */}
          {loading && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-white text-xs font-bold">AI</span>
              </div>
              <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm">
                <div className="flex gap-1 items-center h-4">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-gray-400 rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="sticky bottom-4 mt-4">
          <form
            onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
            className="flex gap-3 bg-white border border-gray-200 rounded-2xl p-2 shadow-lg"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about courses, tutors, tech, speech therapy..."
              className="flex-1 px-3 py-2 text-sm text-gray-900 focus:outline-none bg-transparent"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-xl text-sm font-semibold disabled:opacity-40 hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Send
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
