import { Course } from "@/data/courses";
import Link from "next/link";

type Props = {
  course: Course;
};

export default function CourseCard({ course }: Props) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Top gradient bar */}
      <div className={`h-2 bg-gradient-to-r ${course.color}`} />

      <div className="p-6 flex flex-col flex-1">
        {/* Icon + Category */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl">{course.icon}</span>
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {course.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{course.description}</p>

        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            {course.level}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {course.rating}
          </span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-xl font-bold text-gray-900">${course.price}</span>
            <span className="text-xs text-gray-400 ml-1">/ course</span>
          </div>
          <Link
            href={`/courses/${course.id}`}
            className="text-sm font-semibold text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-200 hover:border-blue-600 px-4 py-2 rounded-lg transition-all duration-200"
          >
            View Roadmap
          </Link>
        </div>
      </div>
    </div>
  );
}
