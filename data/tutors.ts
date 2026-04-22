export type Tutor = {
  id: number;
  name: string;
  title: string;
  skills: string[];
  rating: number;
  reviews: number;
  hourlyRate: number;
  avatar: string;
  bio: string;
  languages: string[];
  sessions: number;
  badge?: string;
  domain: "tech" | "speech";
  onLeave?: boolean;
  calendarUrl?: string;
};

export const tutors: Tutor[] = [
  // ── Speech Therapy ────────────────────────────────────────────
  {
    id: 1,
    name: "Dr. Huma Fiaz",
    title: "Doctor of Speech-Language Pathology · Govt. of Punjab Licensed",
    skills: ["Articulation", "Stammering & Fluency", "Speech & Language Delay", "Autism & Communication", "Voice Disorders", "Dysarthria", "Accent Modification"],
    rating: 4.97,
    reviews: 214,
    hourlyRate: 80,
    avatar: "HF",
    bio: "Licensed Speech-Language Pathologist with 10+ years of clinical experience — treating children, teens, and adults across all communication disorders. Government of Punjab certified therapist. Specialises in articulation, stammering, autism, voice disorders, dysarthria, and accent modification for professionals seeking better English for jobs and public speaking. Every age. Every stage.",
    languages: ["English", "Urdu", "Punjabi"],
    sessions: 980,
    badge: "Head of Speech Therapy",
    domain: "speech",
    onLeave: false,
    calendarUrl: "https://calendar.google.com/calendar/embed?src=rehan4u999.rb%40gmail.com&ctz=Asia%2FKarachi&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=1&mode=WEEK&bgcolor=%23ffffff",
  },
  {
    id: 2,
    name: "Dr. Ayesha Malik",
    title: "Speech-Language Pathologist — AAC & Autism Specialist",
    skills: ["AAC", "Autism Support", "Social Communication", "Pragmatic Language"],
    rating: 4.93,
    reviews: 178,
    hourlyRate: 85,
    avatar: "AM",
    bio: "Specialist in augmentative communication and autism spectrum support. Currently on planned leave — returning soon.",
    languages: ["English", "Urdu", "Punjabi"],
    sessions: 740,
    badge: "Specialist",
    domain: "speech",
    onLeave: true,
    // Replace with Dr. Ayesha's actual Google Calendar embed URL when available
    calendarUrl: "",
  },

  // ── Programming & AI ──────────────────────────────────────────
  {
    id: 3,
    name: "Rehan Butt",
    title: "CEO & Founder · Full-Stack & AI Engineer",
    skills: ["Python", "AI/ML", "Web Development", "Prompt Engineering", "Kiro"],
    rating: 5.0,
    reviews: 312,
    hourlyRate: 90,
    avatar: "RB",
    bio: "Founder of TechTutors.ai. Full-stack developer and AI engineer with deep expertise in modern web technologies, AI tools, and building real-world products from scratch.",
    languages: ["English", "Urdu"],
    sessions: 1240,
    badge: "Founder",
    domain: "tech",
    onLeave: false,
    // Rehan's live calendar
    calendarUrl: "https://calendar.google.com/calendar/embed?src=rehan4u999.rb%40gmail.com&ctz=Asia%2FKarachi&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=1&mode=WEEK&bgcolor=%23ffffff",
  },
  {
    id: 4,
    name: "Engr.Farhan",
    title: "COO · Programming & Web Development Tutor",
    skills: ["JavaScript", "React", "Node.js", "C++", "Web Dev"],
    rating: 4.95,
    reviews: 198,
    hourlyRate: 75,
    avatar: "FB",
    bio: "COO at TechTutors.ai and experienced programming tutor. Specialises in web development and helping beginners go from zero to building real projects.",
    languages: ["English", "Urdu"],
    sessions: 860,
    badge: "COO",
    domain: "tech",
    onLeave: false,
    // Replace with Farhan's actual Google Calendar embed URL when available
    calendarUrl: "https://calendar.google.com/calendar/embed?src=rehan4u999.rb%40gmail.com&ctz=Asia%2FKarachi&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=1&mode=WEEK&bgcolor=%23ffffff",
  },
  {
    id: 5,
    name: "Zeeshan Nazar",
    title: "Programming & AI Tools Instructor",
    skills: ["C Language", "C++", "Python", "AI Tools", "Machine Learning"],
    rating: 4.91,
    reviews: 143,
    hourlyRate: 70,
    avatar: "ZN",
    bio: "Passionate programming instructor with expertise in C, C++, Python, and AI fundamentals. Known for breaking down complex concepts into simple, practical lessons.",
    languages: ["English", "Urdu"],
    sessions: 620,
    domain: "tech",
    onLeave: false,
    // Replace with Zeeshan's actual Google Calendar embed URL when available
    calendarUrl: "https://calendar.google.com/calendar/embed?src=rehan4u999.rb%40gmail.com&ctz=Asia%2FKarachi&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=1&mode=WEEK&bgcolor=%23ffffff",
  },
  {
    id: 7,
    name: "Abdul Saboor",
    title: "Head of CS Department · Senior Computer Science Instructor",
    skills: ["Computer Science", "Data Structures", "Algorithms", "OOP", "Database Systems"],
    rating: 4.96,
    reviews: 187,
    hourlyRate: 85,
    avatar: "AS",
    bio: "Head of Computer Science at TechTutors.ai. Seasoned CS educator with deep expertise in core computer science fundamentals, data structures, algorithms, and software engineering principles. Known for making complex CS concepts click for students at every level.",
    languages: ["English", "Urdu"],
    sessions: 920,
    badge: "Head of CS",
    domain: "tech",
    onLeave: false,
    calendarUrl: "https://calendar.google.com/calendar/embed?src=rehan4u999.rb%40gmail.com&ctz=Asia%2FKarachi&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=1&mode=WEEK&bgcolor=%23ffffff",
  },
];
