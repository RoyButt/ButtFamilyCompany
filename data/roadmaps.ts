export type RoadmapItem = {
  week: number;
  title: string;
  topics: string[];
  type: "lesson" | "quiz" | "project" | "session";
};

export type CourseRoadmap = {
  courseId: number;
  totalHours: number;
  selfPacedHours: string; // unlocked on purchase
  tutorSessions: number;
  roadmap: RoadmapItem[];
};

export const roadmaps: CourseRoadmap[] = [
  // ── 1. Zero to Hero: C Language ──────────────────────────────
  {
    courseId: 1,
    totalHours: 36,
    selfPacedHours: "8–12 hrs of recorded material",
    tutorSessions: 8,
    roadmap: [
      { week: 1, title: "History & Foundations", topics: ["History of C", "Why C matters", "Setting up GCC/VS Code", "Hello World", "How compilation works"], type: "lesson" },
      { week: 1, title: "Variables & Data Types", topics: ["int, float, char, double", "Constants", "Type casting", "printf & scanf"], type: "lesson" },
      { week: 2, title: "Operators & Expressions", topics: ["Arithmetic, relational, logical", "Bitwise operators", "Operator precedence"], type: "lesson" },
      { week: 2, title: "Quiz + Practice", topics: ["Daily quiz: variables & operators", "10 practice problems", "Debug 3 broken programs"], type: "quiz" },
      { week: 3, title: "Control Flow", topics: ["if / else / else if", "switch statements", "Ternary operator"], type: "lesson" },
      { week: 3, title: "Loops", topics: ["for, while, do-while", "break & continue", "Nested loops"], type: "lesson" },
      { week: 4, title: "Mini Project 1", topics: ["Build a number guessing game", "Calculator app", "Code review with tutor"], type: "project" },
      { week: 4, title: "1-on-1 Tutor Session", topics: ["Review weeks 1–4", "Q&A", "Personalised feedback"], type: "session" },
      { week: 5, title: "Functions", topics: ["Defining & calling functions", "Parameters & return values", "Recursion basics", "Scope & lifetime"], type: "lesson" },
      { week: 6, title: "Arrays & Strings", topics: ["1D & 2D arrays", "String functions (strlen, strcpy)", "Character arrays"], type: "lesson" },
      { week: 6, title: "Quiz + Practice", topics: ["Functions & arrays quiz", "Sorting algorithms", "String manipulation exercises"], type: "quiz" },
      { week: 7, title: "Pointers", topics: ["What is a pointer", "Pointer arithmetic", "Pointers & arrays", "Pointers & functions"], type: "lesson" },
      { week: 7, title: "Memory Management", topics: ["Stack vs Heap", "malloc, calloc, realloc, free", "Memory leaks"], type: "lesson" },
      { week: 8, title: "Structures & File I/O", topics: ["struct & typedef", "Nested structures", "File read/write", "fopen, fclose, fprintf"], type: "lesson" },
      { week: 8, title: "Final Project", topics: ["Student record management system", "File-based storage", "Full code review"], type: "project" },
      { week: 8, title: "1-on-1 Tutor Session", topics: ["Final project review", "Career guidance", "Next steps in C++"], type: "session" },
    ],
  },

  // ── 2. Zero to Hero: C++ Mastery ─────────────────────────────
  {
    courseId: 2,
    totalHours: 40,
    selfPacedHours: "10–14 hrs of recorded material",
    tutorSessions: 10,
    roadmap: [
      { week: 1, title: "C++ History & Setup", topics: ["From C to C++", "C++17/20 overview", "Compilers: GCC, Clang, MSVC", "First C++ program"], type: "lesson" },
      { week: 1, title: "OOP Fundamentals", topics: ["Classes & objects", "Constructors & destructors", "Access specifiers", "this pointer"], type: "lesson" },
      { week: 2, title: "Inheritance & Polymorphism", topics: ["Single & multiple inheritance", "Virtual functions", "Abstract classes", "Interfaces"], type: "lesson" },
      { week: 2, title: "Quiz + Practice", topics: ["OOP concepts quiz", "Design 3 class hierarchies", "Fix polymorphism bugs"], type: "quiz" },
      { week: 3, title: "Templates & Generics", topics: ["Function templates", "Class templates", "Template specialisation", "Variadic templates"], type: "lesson" },
      { week: 3, title: "STL Deep Dive", topics: ["vector, list, map, set", "Iterators", "Algorithms (sort, find, transform)", "Lambda expressions"], type: "lesson" },
      { week: 4, title: "Mini Project 1", topics: ["Build a generic data structure library", "Unit tests", "Tutor code review"], type: "project" },
      { week: 4, title: "1-on-1 Tutor Session", topics: ["STL & templates Q&A", "Performance tips", "Feedback"], type: "session" },
      { week: 5, title: "Modern C++17/20", topics: ["auto & decltype", "Range-based for", "Smart pointers", "Move semantics & rvalue refs"], type: "lesson" },
      { week: 6, title: "Concurrency", topics: ["std::thread", "Mutex & locks", "async & future", "Thread safety"], type: "lesson" },
      { week: 7, title: "Quiz + Practice", topics: ["Modern C++ quiz", "Concurrency exercises", "Memory management challenge"], type: "quiz" },
      { week: 8, title: "Design Patterns", topics: ["Singleton, Factory, Observer", "SOLID principles", "When to use each pattern"], type: "lesson" },
      { week: 9, title: "Performance & Optimisation", topics: ["Profiling tools", "Cache-friendly code", "Compiler optimisations", "Benchmarking"], type: "lesson" },
      { week: 10, title: "Final Project", topics: ["Build a mini game engine or CLI tool", "Full OOP architecture", "Performance profiling", "Final review"], type: "project" },
      { week: 10, title: "1-on-1 Tutor Session", topics: ["Final project walkthrough", "Interview prep", "Advanced C++ roadmap"], type: "session" },
    ],
  },

  // ── 3. Zero to Hero: Python ───────────────────────────────────
  {
    courseId: 3,
    totalHours: 38,
    selfPacedHours: "10–12 hrs of recorded material",
    tutorSessions: 8,
    roadmap: [
      { week: 1, title: "Python History & Setup", topics: ["Why Python", "Python 3 vs 2", "Installing Python & VS Code", "REPL & first script"], type: "lesson" },
      { week: 1, title: "Variables & Data Types", topics: ["int, float, str, bool", "Type conversion", "f-strings", "Input/output"], type: "lesson" },
      { week: 2, title: "Control Flow & Loops", topics: ["if/elif/else", "for & while loops", "List comprehensions", "break/continue/pass"], type: "lesson" },
      { week: 2, title: "Quiz + Practice", topics: ["Basics quiz", "FizzBuzz & pattern problems", "10 daily exercises"], type: "quiz" },
      { week: 3, title: "Functions & Modules", topics: ["def, args, kwargs", "Lambda functions", "Importing modules", "Writing your own module"], type: "lesson" },
      { week: 3, title: "Data Structures", topics: ["Lists, tuples, sets, dicts", "Slicing & indexing", "Nested structures", "When to use each"], type: "lesson" },
      { week: 4, title: "Mini Project 1", topics: ["To-do list CLI app", "Contact book", "Tutor review session"], type: "project" },
      { week: 4, title: "1-on-1 Tutor Session", topics: ["Weeks 1–4 review", "Code quality feedback", "Q&A"], type: "session" },
      { week: 5, title: "OOP in Python", topics: ["Classes & objects", "Inheritance", "__init__, __str__", "Dunder methods"], type: "lesson" },
      { week: 6, title: "File Handling & Exceptions", topics: ["open, read, write", "CSV & JSON", "try/except/finally", "Custom exceptions"], type: "lesson" },
      { week: 6, title: "Quiz + Practice", topics: ["OOP & file handling quiz", "Build a file parser", "Error handling challenge"], type: "quiz" },
      { week: 7, title: "Libraries & Automation", topics: ["os, sys, pathlib", "requests (HTTP)", "BeautifulSoup basics", "Automating tasks"], type: "lesson" },
      { week: 8, title: "Final Project", topics: ["Build a web scraper or automation tool", "Full OOP design", "Documentation", "Final review"], type: "project" },
      { week: 8, title: "1-on-1 Tutor Session", topics: ["Final project review", "Portfolio advice", "Next steps: Django / AI"], type: "session" },
    ],
  },

  // ── 4. Web Development: HTML, CSS & JavaScript ───────────────
  {
    courseId: 4,
    totalHours: 40,
    selfPacedHours: "12–15 hrs of recorded material",
    tutorSessions: 10,
    roadmap: [
      { week: 1, title: "How the Web Works", topics: ["History of the web", "Browsers & servers", "HTTP basics", "Dev tools intro"], type: "lesson" },
      { week: 1, title: "HTML Foundations", topics: ["Document structure", "Semantic tags", "Forms & inputs", "Accessibility basics"], type: "lesson" },
      { week: 2, title: "CSS Fundamentals", topics: ["Selectors & specificity", "Box model", "Colours & typography", "Units (px, rem, %)"], type: "lesson" },
      { week: 2, title: "CSS Layout", topics: ["Flexbox", "CSS Grid", "Responsive design", "Media queries"], type: "lesson" },
      { week: 3, title: "Quiz + Mini Project 1", topics: ["HTML/CSS quiz", "Build a responsive landing page", "Tutor review"], type: "project" },
      { week: 3, title: "1-on-1 Tutor Session", topics: ["Landing page feedback", "Design tips", "Q&A"], type: "session" },
      { week: 4, title: "JavaScript Basics", topics: ["Variables (let/const/var)", "Data types", "Functions", "DOM manipulation"], type: "lesson" },
      { week: 5, title: "JavaScript Intermediate", topics: ["Events & listeners", "Arrays & objects", "ES6+ features", "Fetch API & JSON"], type: "lesson" },
      { week: 5, title: "Quiz + Practice", topics: ["JS fundamentals quiz", "10 DOM challenges", "Build an interactive form"], type: "quiz" },
      { week: 6, title: "Async JavaScript", topics: ["Callbacks", "Promises", "async/await", "Error handling"], type: "lesson" },
      { week: 7, title: "Mini Project 2", topics: ["Weather app using public API", "Local storage", "Responsive UI"], type: "project" },
      { week: 7, title: "1-on-1 Tutor Session", topics: ["Project review", "JS best practices", "Feedback"], type: "session" },
      { week: 8, title: "CSS Animations & Modern UI", topics: ["Transitions & keyframes", "CSS variables", "Tailwind CSS intro", "Dark mode"], type: "lesson" },
      { week: 9, title: "Version Control & Deployment", topics: ["Git & GitHub basics", "Branches & PRs", "Deploy to Vercel/Netlify", "Custom domain"], type: "lesson" },
      { week: 10, title: "Final Project", topics: ["Build a full portfolio website", "Multi-page with JS interactivity", "Deployed live", "Final review"], type: "project" },
      { week: 10, title: "1-on-1 Tutor Session", topics: ["Portfolio review", "Job readiness", "Next steps: React"], type: "session" },
    ],
  },

  // ── 5. Web Scraping Short Course ─────────────────────────────
  {
    courseId: 5,
    totalHours: 18,
    selfPacedHours: "4–6 hrs of recorded material",
    tutorSessions: 3,
    roadmap: [
      { week: 1, title: "Web Scraping Fundamentals", topics: ["How websites work", "HTML structure & CSS selectors", "requests library", "BeautifulSoup basics"], type: "lesson" },
      { week: 1, title: "Scraping Static Sites", topics: ["Extracting text, links, images", "Pagination handling", "Saving to CSV/JSON", "Polite scraping (delays, headers)"], type: "lesson" },
      { week: 2, title: "Quiz + Mini Project", topics: ["Scrape a news site", "Build a price tracker", "Tutor review"], type: "project" },
      { week: 2, title: "Dynamic Sites with Playwright", topics: ["Why static scraping fails", "Playwright setup", "Clicking & scrolling", "Waiting for elements"], type: "lesson" },
      { week: 3, title: "Advanced Techniques", topics: ["Handling login forms", "Proxies & rotating IPs", "Scrapy framework intro", "Storing in databases"], type: "lesson" },
      { week: 3, title: "Final Project", topics: ["Build a full scraper pipeline", "Schedule with cron", "Export to Google Sheets", "Final review"], type: "project" },
      { week: 3, title: "1-on-1 Tutor Session", topics: ["Project walkthrough", "Legal & ethical scraping", "Next steps"], type: "session" },
    ],
  },

  // ── 6. AI Model Training & Building Your Own Agent ───────────
  {
    courseId: 6,
    totalHours: 40,
    selfPacedHours: "12–15 hrs of recorded material",
    tutorSessions: 8,
    roadmap: [
      { week: 1, title: "AI & ML Foundations", topics: ["History of AI", "Types of ML", "Neural network basics", "Python ML environment setup"], type: "lesson" },
      { week: 2, title: "Data Preparation", topics: ["Datasets & data types", "Cleaning & preprocessing", "Feature engineering", "Train/test split"], type: "lesson" },
      { week: 2, title: "Quiz + Practice", topics: ["ML concepts quiz", "Preprocess a real dataset", "Visualise with matplotlib"], type: "quiz" },
      { week: 3, title: "Training Your First Model", topics: ["Linear & logistic regression", "Decision trees", "scikit-learn pipeline", "Evaluating accuracy"], type: "lesson" },
      { week: 4, title: "Deep Learning Basics", topics: ["Neural networks from scratch", "TensorFlow/Keras intro", "Training loops", "Overfitting & regularisation"], type: "lesson" },
      { week: 4, title: "Mini Project 1", topics: ["Train an image classifier", "Evaluate & improve", "Tutor review"], type: "project" },
      { week: 4, title: "1-on-1 Tutor Session", topics: ["Model review", "Debugging training issues", "Q&A"], type: "session" },
      { week: 5, title: "LLMs & Prompt Engineering", topics: ["How LLMs work", "OpenAI & Claude APIs", "Prompt design patterns", "System prompts"], type: "lesson" },
      { week: 6, title: "Building AI Agents", topics: ["What is an agent", "LangChain framework", "Tools & function calling", "Memory & context"], type: "lesson" },
      { week: 7, title: "Quiz + Practice", topics: ["Agent concepts quiz", "Build a simple Q&A agent", "Add tool use"], type: "quiz" },
      { week: 8, title: "Final Project", topics: ["Build a fully autonomous AI agent", "Custom tools & memory", "Deploy as API", "Final review"], type: "project" },
      { week: 8, title: "1-on-1 Tutor Session", topics: ["Agent demo & review", "Production tips", "Career in AI"], type: "session" },
    ],
  },

  // ── 7. AI & Machine Learning Basics ──────────────────────────
  {
    courseId: 7,
    totalHours: 30,
    selfPacedHours: "8–10 hrs of recorded material",
    tutorSessions: 6,
    roadmap: [
      { week: 1, title: "What is AI?", topics: ["History of AI", "AI vs ML vs Deep Learning", "Real-world applications", "Ethics in AI"], type: "lesson" },
      { week: 2, title: "Supervised Learning", topics: ["Regression & classification", "Training & testing", "Accuracy metrics", "scikit-learn basics"], type: "lesson" },
      { week: 2, title: "Quiz + Practice", topics: ["Supervised learning quiz", "Predict house prices", "Visualise results"], type: "quiz" },
      { week: 3, title: "Unsupervised Learning", topics: ["Clustering (K-Means)", "Dimensionality reduction (PCA)", "Anomaly detection", "Use cases"], type: "lesson" },
      { week: 4, title: "Neural Networks", topics: ["Perceptron model", "Activation functions", "Backpropagation", "Keras first model"], type: "lesson" },
      { week: 4, title: "Mini Project", topics: ["Build a spam classifier", "Evaluate & tune", "Tutor review"], type: "project" },
      { week: 5, title: "NLP Basics", topics: ["Text preprocessing", "Bag of words & TF-IDF", "Sentiment analysis", "Intro to transformers"], type: "lesson" },
      { week: 6, title: "Final Project", topics: ["End-to-end ML pipeline", "Choose your domain", "Present findings", "Final review"], type: "project" },
      { week: 6, title: "1-on-1 Tutor Session", topics: ["Project review", "Next steps in AI", "Resources & roadmap"], type: "session" },
    ],
  },

  // ── 8. Learn to Code with Claude ─────────────────────────────
  {
    courseId: 8,
    totalHours: 20,
    selfPacedHours: "5–7 hrs of recorded material",
    tutorSessions: 4,
    roadmap: [
      { week: 1, title: "Claude & AI Coding Intro", topics: ["What Claude can do", "Setting up Claude API", "Your first AI-assisted program", "Prompt basics for coding"], type: "lesson" },
      { week: 1, title: "Code Generation", topics: ["Generating functions & classes", "Explaining existing code", "Refactoring with Claude", "Writing tests with AI"], type: "lesson" },
      { week: 2, title: "Debugging with AI", topics: ["Pasting errors into Claude", "Root cause analysis", "Fix & verify workflow", "AI-assisted code review"], type: "lesson" },
      { week: 2, title: "Quiz + Practice", topics: ["AI coding workflow quiz", "Fix 5 broken programs using Claude", "Refactor a messy codebase"], type: "quiz" },
      { week: 3, title: "Building Projects with Claude", topics: ["Planning with AI", "Iterative development", "Handling hallucinations", "Validating AI output"], type: "lesson" },
      { week: 3, title: "Mini Project", topics: ["Build a full app using Claude as co-pilot", "Document the process", "Tutor review"], type: "project" },
      { week: 4, title: "Advanced Workflows", topics: ["Multi-file projects", "Claude + GitHub Copilot", "Prompt chaining", "Building your own AI tools"], type: "lesson" },
      { week: 4, title: "1-on-1 Tutor Session", topics: ["Workflow review", "Productivity tips", "Next steps"], type: "session" },
    ],
  },

  // ── 9. Mastery of ChatGPT, Gemini & DeepSeek ─────────────────
  {
    courseId: 9,
    totalHours: 25,
    selfPacedHours: "6–8 hrs of recorded material",
    tutorSessions: 5,
    roadmap: [
      { week: 1, title: "AI Tools Landscape", topics: ["ChatGPT vs Gemini vs DeepSeek", "Strengths of each", "When to use which", "Account & API setup"], type: "lesson" },
      { week: 1, title: "Prompt Engineering Fundamentals", topics: ["Zero-shot & few-shot prompting", "Chain of thought", "Role prompting", "Output formatting"], type: "lesson" },
      { week: 2, title: "ChatGPT Mastery", topics: ["GPT-4o features", "Custom GPTs", "Code interpreter", "Plugins & browsing"], type: "lesson" },
      { week: 2, title: "Quiz + Practice", topics: ["Prompt engineering quiz", "Build 3 custom GPTs", "Productivity challenge"], type: "quiz" },
      { week: 3, title: "Gemini & DeepSeek", topics: ["Gemini 1.5 Pro features", "Multimodal prompting", "DeepSeek for coding", "Comparing outputs"], type: "lesson" },
      { week: 4, title: "Workflows & Automation", topics: ["AI for writing & research", "AI for coding", "AI for business tasks", "Chaining tools together"], type: "lesson" },
      { week: 4, title: "Mini Project", topics: ["Build an AI-powered workflow for your work", "Document & present", "Tutor review"], type: "project" },
      { week: 5, title: "1-on-1 Tutor Session", topics: ["Workflow review", "Advanced tips", "Staying current with AI"], type: "session" },
    ],
  },

  // ── 10. Mastery of Kiro ───────────────────────────────────────
  {
    courseId: 10,
    totalHours: 15,
    selfPacedHours: "4–5 hrs of recorded material",
    tutorSessions: 3,
    roadmap: [
      { week: 1, title: "Kiro Fundamentals", topics: ["What is Kiro", "Autopilot vs Supervised mode", "Chat context (#File, #Folder)", "First AI-assisted edit"], type: "lesson" },
      { week: 1, title: "Specs & Tasks", topics: ["Writing a spec", "Requirements & design docs", "Task breakdown", "Iterating with AI"], type: "lesson" },
      { week: 2, title: "Hooks & Automation", topics: ["fileEdited hooks", "preToolUse / postToolUse", "runCommand hooks", "Building your own workflow"], type: "lesson" },
      { week: 2, title: "Quiz + Practice", topics: ["Kiro features quiz", "Build 2 custom hooks", "Automate a real task"], type: "quiz" },
      { week: 3, title: "Steering & MCP", topics: ["Steering files", "Manual vs auto inclusion", "MCP server setup", "Powers & custom agents"], type: "lesson" },
      { week: 3, title: "Final Project", topics: ["Build a full feature using Kiro specs", "Hooks for CI/CD", "Final review"], type: "project" },
      { week: 3, title: "1-on-1 Tutor Session", topics: ["Project walkthrough", "Team workflow tips", "Advanced Kiro patterns"], type: "session" },
    ],
  },

  // ── 11. Image Generation with NanoBanana ─────────────────────
  {
    courseId: 11,
    totalHours: 15,
    selfPacedHours: "4–5 hrs of recorded material",
    tutorSessions: 3,
    roadmap: [
      { week: 1, title: "AI Image Generation Intro", topics: ["History of generative AI", "How diffusion models work", "NanoBanana platform setup", "First image generation"], type: "lesson" },
      { week: 1, title: "Prompt Techniques", topics: ["Descriptive prompting", "Style keywords", "Negative prompts", "Aspect ratios & quality settings"], type: "lesson" },
      { week: 2, title: "Advanced Prompting", topics: ["Artist styles", "Lighting & composition", "Character consistency", "Iterative refinement"], type: "lesson" },
      { week: 2, title: "Quiz + Practice", topics: ["Prompting quiz", "Recreate 5 reference images", "Style challenge"], type: "quiz" },
      { week: 3, title: "Commercial Applications", topics: ["Social media content", "Product mockups", "Logo & branding concepts", "Copyright & licensing"], type: "lesson" },
      { week: 3, title: "Final Project", topics: ["Create a full brand visual kit", "10 cohesive images", "Present & review"], type: "project" },
      { week: 3, title: "1-on-1 Tutor Session", topics: ["Portfolio review", "Monetisation tips", "Next steps"], type: "session" },
    ],
  },
];
