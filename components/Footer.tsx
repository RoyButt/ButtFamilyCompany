import Link from "next/link";

const footerLinks = {
  Platform: [
    { label: "Courses", href: "/courses" },
    { label: "Find a Tutor", href: "/tutors" },
    { label: "Speech Therapy for Children", href: "/speech-therapy-for-children" },
    { label: "Web Development", href: "/development" },
    { label: "Book a Session", href: "/booking" },
    { label: "AI Assistant", href: "/ai-assistant" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white text-sm font-bold">T</span>
              </div>
              <span className="font-bold text-white text-lg">
                TechTutors<span className="text-blue-400">.ai</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Learn Tech. Learn Communication. Learn Anything. The platform where technology education meets speech therapy and AI-powered learning.
            </p>
            <div className="flex gap-4 mt-6">
              {["Twitter", "LinkedIn", "GitHub"].map((s) => (
                <a key={s} href="#" className="text-xs text-gray-500 hover:text-white transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white text-sm font-semibold mb-4">{section}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs">© 2025 TechTutors.ai. All rights reserved.</p>
          <p className="text-xs">Built with Next.js · Tailwind CSS · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
