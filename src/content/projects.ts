export type ProjectStatus = "shipped" | "building";

export type ProjectMedia = {
  cover?: string;
  gallery?: { src: string; alt: string }[];
  video?: { src: string; poster?: string; caption?: string };
};

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
  media?: ProjectMedia;
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
    media: {
      cover: "/work/capstone/artwork-1.png",
      gallery: [
        { src: "/work/capstone/artwork-1.png", alt: "Predictive maintenance dashboard — machine overview" },
        { src: "/work/capstone/artwork-2.png", alt: "Predictive maintenance dashboard — risk trend view" },
        { src: "/work/capstone/artwork-3.png", alt: "Predictive maintenance dashboard — alert + report export" },
      ],
    },
    links: [
      { label: "MSU capstone team page (with walkthrough video)", href: "https://capstone.cse.msu.edu/2026-01/projects/akzonobel/" },
    ],
  },
  {
    slug: "movie-recommender",
    title: "CineMatch — Movie Recommender",
    tagline: "Collaborative filtering, evaluated honestly.",
    year: "2026",
    status: "shipped",
    featured: true,
    role: "Backend + data (team of 4)",
    context: "Group project · MovieLens dataset",
    summary:
      "A full-stack recommender (CineMatch) on MovieLens — 610 users, 9,742 movies, 100K+ ratings — comparing user-based and item-based collaborative filtering with measured accuracy and coverage.",
    problem: [
      "Modern platforms drown users in content, and the typical student recommender stops at ‘it returns movies.’ Our team wanted one that could answer a harder question: which collaborative-filtering approach is actually better on this data, and by how much?",
    ],
    approach: [
      "Built a FastAPI + SQLite backend serving top-K neighbor predictions over a normalized schema (users, movies, ratings, tags, links).",
      "Implemented both user-based and item-based collaborative filtering with Pearson and cosine similarity over mean-centered ratings.",
      "Cleaned the data the way it actually needs cleaning: dedupe, keep-latest on repeat ratings, filter low-activity users/items, parse the release year out of titles, normalize genres, and a time-aware train/test split so the test set represents future behavior.",
      "Added a baseline correction (global mean + user bias + item bias) and evaluated with RMSE, MAE, Precision@K, and coverage — measured, not eyeballed.",
      "Built the frontend in React + Vite + Tailwind against the REST API.",
    ],
    impact: [
      "Side-by-side, measured comparison on a held-out time-aware split: item-based hit RMSE ≈ 0.891 / MAE ≈ 0.666 at 81.5% coverage, user-based hit RMSE ≈ 0.905 / MAE ≈ 0.689 at 90.8% coverage — the accuracy-vs-coverage trade-off you only see if you actually measure it.",
      "Clean separation: typed REST API, normalized SQLite schema, reproducible preprocessing pipeline.",
    ],
    stack: [
      { group: "Frontend", items: ["React", "Vite", "Tailwind"] },
      { group: "Backend", items: ["FastAPI", "SQLite", "REST"] },
      { group: "Data / ML", items: ["NumPy", "Pandas", "Collaborative filtering", "RMSE / MAE / P@K / coverage"] },
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
    slug: "auth-api-from-scratch",
    title: "Auth API + JWT, from scratch",
    tagline: "An authentication system rebuilt without the libraries.",
    year: "2025",
    status: "shipped",
    featured: false,
    role: "Solo · coursework",
    context: "Database Systems · individual project",
    summary:
      "A Flask + SQLite authentication API where the JWTs, password hashing, and SQL safety were all written by hand — no auth library, no ORM.",
    problem: [
      "Most students reach for a library the moment an interviewer says ‘JWT.’ The point of building this from scratch was to actually understand the bytes: how the token is base64-url-encoded, how the HMAC-SHA-256 signature is computed, and why parameterized queries are non-negotiable.",
      "Graded against an instructor test suite that intentionally tried to break the API with SQL-injection attacks and tampered JWTs — if either succeeded, the project scored zero.",
    ],
    approach: [
      "Designed a SQLite schema with uniqueness constraints on usernames and emails, plus a password-history table so a user can never reuse a past password — the full MSU policy, enforced server-side.",
      "Hashed passwords with SHA-256 over a per-user salt via Python’s hashlib; no plaintext ever touched disk, and the salt was reused across all of a user’s historical passwords so the history check actually worked.",
      "Built JWTs by hand: base64-url-safe header + payload, signed with HMAC-SHA-256 via Python’s hmac module, then verified on every authorized request against the same key.",
      "Wrote every SQL statement as a parameterized query — single-quote, UNION-extraction, and comment-injection probes all bounced.",
      "Wrapped every connection in try/except with explicit close() in the failure path so a poisoned test couldn’t leave the database file locked for the next case.",
    ],
    impact: [
      "Cleared the instructor’s injection test suite — including the cases that silently pass vulnerable implementations.",
      "Demonstrates the cryptographic primitives behind auth aren’t a black box for me.",
    ],
    stack: [
      { group: "Backend", items: ["Python", "Flask"] },
      { group: "Data", items: ["SQLite", "Parameterized SQL"] },
      { group: "Crypto", items: ["hashlib (SHA-256)", "hmac", "base64", "JWT by hand"] },
    ],
  },
  {
    slug: "recipes-api-social-graph",
    title: "Recipes API with a social graph",
    tagline: "Follow, like, search — relational from the ground up.",
    year: "2025",
    status: "shipped",
    featured: false,
    role: "Solo · coursework",
    context: "Database Systems · individual project",
    summary:
      "A recipe-site backend in Flask + SQLite with following, likes, ingredient-aware search, and cascading account deletion — built on the auth stack from the previous project.",
    problem: [
      "Project 2 layered a real social graph (users → follow → users, users → like → recipes) onto the auth API, and added the kind of search that forces you to think about your schema: ‘find recipes that only use ingredients I have.’",
      "On top of that: delete a user, and every recipe, like, and follow they created has to evaporate atomically.",
    ],
    approach: [
      "Promoted the JWT to live in the HTTP Authorization header instead of a POST parameter, so every endpoint reads identity the way real APIs do.",
      "Modeled the social graph with a many-to-many follows table and a recipe ↔ ingredient join table, with foreign keys and ON DELETE CASCADE so a user delete unwinds the graph in one transaction (with SQLite foreign_keys = ON set per connection).",
      "Implemented three search modes in /search: a follow-aware feed (recent recipes from users you follow), a top-N popularity ranking by like count, and an ingredient-subset search (recipes whose ingredients are entirely contained in the user’s pantry).",
      "Wrote a dynamic recipe-view endpoint that returns only the fields the caller asks for — name, description, like count, ingredients — so the API is honest about what it transmits.",
      "Kept every query parameterized, and put DB access inside try/except/close blocks so a bad request couldn’t leave a locked database for the next test case.",
    ],
    impact: [
      "A non-trivial relational schema with real cascading deletes and three meaningfully different search modes — beyond the usual ‘CRUD a single table’ assignment.",
      "Reuses the from-scratch JWT plumbing, now read from the HTTP header instead of a POST parameter.",
    ],
    stack: [
      { group: "Backend", items: ["Python", "Flask"] },
      { group: "Data", items: ["SQLite", "Parameterized SQL", "Cascading deletes"] },
      { group: "Auth", items: ["JWT (HS256)", "HMAC", "SHA-256"] },
    ],
  },
  {
    slug: "rideshare-microservices",
    title: "Ride-share microservices on Docker",
    tagline: "Four services, four databases, one Docker network.",
    year: "2025",
    status: "shipped",
    featured: false,
    role: "Solo · coursework",
    context: "Database Systems · individual project",
    summary:
      "A ride-sharing backend split across four Flask microservices — users, driver availability, reservations, and payments — each in its own container, with its own SQLite database, talking over a Docker network.",
    problem: [
      "Project 3 took the auth and recipes work and broke it across service boundaries. Payments can’t see the user table. The reservations service has to ask the user service who someone is. And a failed inter-service call can’t leave money in the wrong account.",
    ],
    approach: [
      "Designed four services on dedicated ports — 9000 users, 9001 availability, 9002 reservations, 9003 payments — each with its own SQLite database (user.db / listings.db / reservations.db / payments.db) and its own .sql init script.",
      "Wrote a Dockerfile per service (Dockerfile.users, .availability, .reservations, .payments) and a single compose.yaml that puts all four on the same Docker network so containers can resolve each other by name.",
      "When a passenger reserves a driver, the reservations service authenticates the JWT, calls the user service to confirm role and identity, calls the payments service to move fare from passenger to driver, then deletes the driver’s availability listing — failing closed at every step.",
      "Enforced the social rule on ratings across services: a passenger can only rate a driver they had a confirmed reservation with (and vice versa), checked by cross-service calls between the user and reservations services.",
      "Added /clear on every service so the instructor’s test suite can reset all four databases between tests without restarting any container.",
    ],
    impact: [
      "A clean four-service split with database-per-service, inter-service authorization, and an atomic payment transfer across service boundaries.",
      "Reproducible with `docker compose up` — the same shape as a production microservice deploy.",
    ],
    stack: [
      { group: "Services", items: ["Python", "Flask", "requests"] },
      { group: "Data", items: ["SQLite ×4", "Per-service schemas"] },
      { group: "Infra", items: ["Docker", "Docker Compose", "Docker networks"] },
      { group: "Auth", items: ["JWT (HS256)", "Cross-service authz"] },
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
