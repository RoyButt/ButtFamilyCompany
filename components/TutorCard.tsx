import { Tutor } from "@/data/tutors";
import Link from "next/link";

type Props = {
  tutor: Tutor;
};

const avatarColors = [
  "from-blue-500 to-indigo-600",
  "from-purple-500 to-pink-600",
  "from-green-500 to-teal-600",
  "from-orange-500 to-red-500",
  "from-cyan-500 to-blue-500",
  "from-violet-500 to-purple-600",
];

export default function TutorCard({ tutor }: Props) {
  const colorIndex = tutor.id % avatarColors.length;

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        {/* Avatar */}
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${avatarColors[colorIndex]} flex items-center justify-center flex-shrink-0`}>
          <span className="text-white font-bold text-lg">{tutor.avatar}</span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-bold text-gray-900 text-base group-hover:text-blue-600 transition-colors">
              {tutor.name}
            </h3>
            {tutor.badge && (
              <span className="text-xs font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 py-0.5 rounded-full">
                {tutor.badge}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-0.5 truncate">{tutor.title}</p>
        </div>
      </div>

      {/* Rating + Sessions */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span className="text-sm font-bold text-gray-900">{tutor.rating}</span>
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
        <Link
          href="/booking"
          className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-xl hover:opacity-90 transition-opacity shadow-sm"
        >
          Book Session
        </Link>
      </div>
    </div>
  );
}
