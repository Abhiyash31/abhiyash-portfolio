export type ProjectStatus = "shipped" | "building";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  status: ProjectStatus;
  featured: boolean;
  role: string;
  context: string;
  summary: string;
  problem: string[];
  approach: string[];
  impact: string[];
  stack: { group: string; items: string[] }[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "predictive-maintenance-akzonobel",
    title: "Predictive Maintenance Platform",
    tagline: "Calling machine failures hours before the alarm would.",
    year: "2026",
    status: "shipped",
    featured: true,
    role: "ML + full-stack (capstone team of 5)",
    context: "Senior Capstone · delivered to AkzoNobel Coatings, Warsaw IN",
    summary:
      "A production predictive-maintenance system for an AkzoNobel coatings plant where an hour of unplanned downtime costs $40K–$60K per machine.",
    problem: [
      "AkzoNobel’s Warsaw, Indiana plant ran on threshold alarms: a sensor crosses a hard limit, the line is already going down, and the floor is reacting instead of planning. At $40K–$60K per machine per hour of unplanned downtime, every alarm that fires late is expensive.",
      "The brief was to turn a stream of vibration and temperature telemetry into something an operator could act on a shift early — without asking them to read a data-science notebook.",
    ],
    approach: [
      "Built the operator-facing dashboard in Next.js + TypeScript with role-based authentication, so floor operators, engineers, and admins each see the right surface.",
      "Trained survival-analysis and KNN models that produce a daily failure-risk score per machine, surfacing degradation hours before a threshold alarm would trip.",
      "Designed a multi-service architecture: an ingestion microservice pulls sensor telemetry into VictoriaMetrics (Prometheus-compatible) and PostgreSQL; a Python ML service scores daily; the web app reads and visualizes.",
      "Containerized the whole stack with Docker Compose behind Caddy for automatic TLS, plus VAPID web-push and SMTP email so alerts reach people off the dashboard.",
      "Shipped Chart.js trend views and one-click PDF/Excel report exports for shift handoffs and management review.",
    ],
    impact: [
      "Delivered as a running system to AkzoNobel’s Warsaw plant, not a prototype.",
      "Flags failure risk hours ahead of the existing threshold-based alarms.",
      "Reproducible one-command deploy (Docker Compose) with persistent metrics + relational storage.",
    ],
    stack: [
      { group: "Frontend", items: ["Next.js", "TypeScript", "React", "Chart.js", "Tailwind"] },
      { group: "ML", items: ["Python", "scikit-learn", "Survival analysis", "KNN"] },
      { group: "Backend & Data", items: ["PostgreSQL", "VictoriaMetrics", "REST", "better-auth"] },
      { group: "Infra", items: ["Docker Compose", "Caddy (auto-TLS)", "VAPID Web Push", "SMTP"] },
    ],
    links: [{ label: "Client engagement — walkthrough on request", href: "/#contact" }],
  },
  {
    slug: "movie-recommender",
    title: "Movie Recommender",
    tagline: "Collaborative filtering, evaluated honestly.",
    year: "2026",
    status: "shipped",
    featured: true,
    role: "Full-stack + data",
    context: "Self-directed · MovieLens dataset",
    summary:
      "A full-stack recommender on MovieLens (610 users, 100K+ ratings) comparing user-based and item-based collaborative filtering — measured, not just shipped.",
    problem: [
      "Most student recommenders stop at “it returns movies.” I wanted one that could answer a harder question: which collaborative-filtering approach is actually better on this data, and by how much?",
    ],
    approach: [
      "Built a FastAPI + PostgreSQL backend serving top-K neighbor predictions over a normalized schema (users, movies, ratings, tags, links).",
      "Implemented both user-based and item-based collaborative filtering with Pearson and cosine similarity over mean-centered ratings.",
      "Cleaned the data the way it actually needs cleaning: dedupe, keep-latest on repeat ratings, filter low-activity users/items, and a time-aware train/test split so the test set represents future behavior.",
      "Added a baseline correction (global mean + user bias + item bias) and evaluated with RMSE / MAE plus Precision@K rather than eyeballing results.",
      "Built the frontend in React 19 + Vite + Tailwind against the REST API.",
    ],
    impact: [
      "Side-by-side, measured comparison of user- vs item-based CF on a held-out, time-aware split.",
      "Clean separation: typed REST API, normalized Postgres schema, reproducible preprocessing.",
    ],
    stack: [
      { group: "Frontend", items: ["React 19", "Vite", "Tailwind"] },
      { group: "Backend", items: ["FastAPI", "PostgreSQL", "REST"] },
      { group: "Data / ML", items: ["NumPy", "Pandas", "Collaborative filtering", "RMSE / MAE / P@K"] },
    ],
    links: [{ label: "GitHub", href: "https://github.com/Abhiyash31" }],
  },
  {
    slug: "spartan-touchdown",
    title: "Spartan Touchdown",
    tagline: "A C++ game built like production software.",
    year: "2025",
    status: "shipped",
    featured: true,
    role: "Engineer (team of 4)",
    context: "CSE 335 · Object-Oriented Software Design",
    summary:
      "A level-based 2D game in C++ / wxWidgets, built with real OOP architecture, unit tests, and generated docs — not a one-file hack.",
    problem: [
      "The point wasn’t the game; it was building something non-trivial in C++ that a team could extend without stepping on each other — clean inheritance, clear ownership, tested behavior.",
    ],
    approach: [
      "Architected gameplay with an object-oriented design (polymorphic entities, level loading from data files) so new content didn’t mean new bugs.",
      "Wrote unit tests with GoogleTest around game logic and kept the build reproducible with CMake.",
      "Documented the codebase with Doxygen and worked the project in an Agile/Scrum cadence with a 4-person team.",
    ],
    impact: [
      "Demonstrates C++ fundamentals: memory ownership, polymorphism, and testing under a real OOP design.",
      "Team delivery with version control discipline and generated documentation.",
    ],
    stack: [
      { group: "Language", items: ["C++17"] },
      { group: "Libraries", items: ["wxWidgets", "GoogleTest"] },
      { group: "Tooling", items: ["CMake", "Doxygen", "Git", "Agile/Scrum"] },
    ],
  },
  {
    slug: "spartan-mind-wordle",
    title: "Wordle (Spartan Mind)",
    tagline: "A polished take on the daily word game, in C++.",
    year: "2025",
    status: "shipped",
    featured: false,
    role: "Engineer",
    context: "CSE 335 · Object-Oriented Software Design",
    summary: "A Wordle-style desktop game in C++ / wxWidgets with a tested, CMake-built codebase.",
    problem: [
      "A second OOP build to reinforce the fundamentals: a clean desktop UI, game-state logic, and a test suite.",
    ],
    approach: [
      "Implemented guess validation and game state with an object-oriented structure.",
      "Built the UI with wxWidgets and kept logic under GoogleTest coverage with a CMake build.",
    ],
    impact: ["Reinforces C++ and OOP outside of a web context — a useful range signal."],
    stack: [
      { group: "Language", items: ["C++"] },
      { group: "Libraries", items: ["wxWidgets", "GoogleTest"] },
      { group: "Tooling", items: ["CMake", "Doxygen"] },
    ],
  },
  {
    slug: "backend-systems-coursework",
    title: "Backend & Database Systems",
    tagline: "Auth, SQL, and microservices done by hand.",
    year: "2025",
    status: "shipped",
    featured: false,
    role: "Engineer",
    context: "Database Systems · Web Application Architecture",
    summary:
      "A set of from-scratch backend builds: JWT/HMAC auth APIs, a relational recipe app, and a Dockerized microservices reservation system.",
    problem: [
      "Coursework that I treated as backend practice: write the auth, design the schema, split the services, containerize it.",
    ],
    approach: [
      "Built token-authenticated REST APIs in Flask with JWT/HMAC, hand-written parameterized SQL, and proper migrations.",
      "Designed normalized relational schemas and split a reservation system into users / availability / reservations / payments microservices, each independently Dockerized with Docker Compose.",
      "Deployed Flask services to Google Cloud with a GitLab CI pipeline.",
    ],
    impact: [
      "Covers the backend fundamentals interviewers actually probe: auth correctness, schema design, service boundaries, containers.",
    ],
    stack: [
      { group: "Backend", items: ["Python", "Flask", "FastAPI"] },
      { group: "Data", items: ["PostgreSQL", "SQLite", "Parameterized SQL"] },
      { group: "Infra", items: ["Docker Compose", "Caddy", "GitLab CI", "Google Cloud"] },
    ],
  },

  {
    slug: "ai-job-copilot",
    title: "AI Job-Application Copilot",
    tagline: "Tailors résumé bullets to a job — and grades itself.",
    year: "2026",
    status: "building",
    featured: true,
    role: "Solo · in progress",
    context: "Independent · applied AI",
    summary:
      "An LLM + embeddings tool that rewrites résumé bullets against a specific job description, with an evaluation harness that scores its own output.",
    problem: [
      "Most “AI résumé” tools are a single prompt with no idea whether the output is good. The interesting engineering is the part everyone skips: retrieval over your real experience, and an eval harness that measures relevance instead of vibes.",
    ],
    approach: [
      "Embed a structured experience bank; retrieve the most relevant evidence per job description before generation.",
      "Generate tailored bullets with the Claude API, grounded only in retrieved facts to avoid fabrication.",
      "Ship a golden-set eval harness (relevance + faithfulness scoring) so changes are measured, not guessed.",
    ],
    impact: ["Will demonstrate real AI engineering: retrieval, grounding, and evaluation — dogfooded on my own job hunt."],
    stack: [
      { group: "App", items: ["Next.js", "TypeScript"] },
      { group: "AI", items: ["Claude API", "Embeddings", "pgvector"] },
      { group: "Data", items: ["PostgreSQL", "Eval harness"] },
    ],
  },
  {
    slug: "ai-codebase-qa",
    title: "AI Codebase Q&A",
    tagline: "Ask a repository questions, get cited answers.",
    year: "2026",
    status: "building",
    featured: false,
    role: "Solo · in progress",
    context: "Independent · applied AI",
    summary:
      "Retrieval-augmented Q&A over a GitHub repository with inline citations and an evaluation set for answer faithfulness.",
    problem: [
      "RAG is easy to demo and hard to make trustworthy. The goal is citations you can click and an eval set that catches regressions.",
    ],
    approach: [
      "Chunk and embed a repository; retrieve with re-ranking before answering.",
      "Force citations back to source lines; refuse when retrieval is weak.",
      "Maintain an eval set scoring faithfulness and answer quality.",
    ],
    impact: ["A direct, high-signal answer to the AI-engineering interview question every team is asking."],
    stack: [
      { group: "App", items: ["Next.js", "TypeScript"] },
      { group: "AI", items: ["Embeddings", "Retrieval + re-rank", "Claude API"] },
    ],
  },
  {
    slug: "realtime-collab",
    title: "Real-time Collab App",
    tagline: "Multiplayer presence, done properly.",
    year: "2026",
    status: "building",
    featured: false,
    role: "Solo · in progress",
    context: "Independent · systems",
    summary:
      "A real-time collaborative editor with live presence over WebSockets — concurrency and conflict resolution, not another CRUD app.",
    problem: [
      "Real-time is where a lot of portfolios fall back to CRUD. This one leans into the hard part: shared state under concurrent edits.",
    ],
    approach: [
      "WebSocket transport with live cursors and presence.",
      "Conflict resolution for concurrent edits with reconnection handling.",
    ],
    impact: ["Shows systems depth — concurrency, transport, state — that distinguishes a new-grad portfolio."],
    stack: [
      { group: "App", items: ["Next.js", "TypeScript"] },
      { group: "Realtime", items: ["WebSockets", "Presence / CRDT"] },
    ],
  },
  {
    slug: "self-host-observability",
    title: "Self-host Observability",
    tagline: "An uptime + metrics dashboard you can run anywhere.",
    year: "2026",
    status: "building",
    featured: false,
    role: "Solo · open source",
    context: "Independent · infrastructure",
    summary:
      "An open-source, single-binary-style uptime and metrics monitor with a clean dashboard — built to be self-hosted and starred.",
    problem: [
      "Plays to the infra side: ingestion, time-series storage, alerting, and a dashboard that’s actually pleasant — packaged so anyone can deploy it in one command.",
    ],
    approach: [
      "Probe + ingest into time-series storage with a PostgreSQL control plane.",
      "Next.js dashboard, Docker Compose deploy, alerting hooks.",
    ],
    impact: ["An open-source artifact with real-world infra surface area and GitHub-stars potential."],
    stack: [
      { group: "App", items: ["Next.js", "TypeScript"] },
      { group: "Infra", items: ["PostgreSQL", "Time-series", "Docker Compose"] },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const projectSlugs = projects.map((p) => p.slug);
