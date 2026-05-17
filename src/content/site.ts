export const site = {
  name: "Abhiyash Pratap Singh",
  shortName: "Abhiyash Singh",
  role: "Software Engineer",
  focus: "Full-stack · ML · Infrastructure",
  location: "East Lansing, Michigan",
  url: "https://abhiyash.com",

  tagline: "I build full-stack systems that ship to real users.",

  heroSub:
    "Computer Science at Michigan State (’26). I work across the whole stack — from the ML model to the dashboard to the infrastructure it runs on — with a bias for software that has to actually work in production.",

  about: [
    "I’m Abhiyash — a computer science engineer graduating from Michigan State University in August 2026. I like the unglamorous parts of building software: making a model trustworthy, a dashboard fast, an auth flow correct, a deploy boring.",
    "My senior capstone went into a real coatings plant where an hour of unplanned downtime costs more than a year of my tuition. Building under that constraint — software that someone is actually counting on — is how I like to work, and it’s the standard I hold the rest of my projects to.",
    "Lately I’m going deep on applied AI: retrieval, evaluation harnesses, and the engineering around LLMs rather than just the prompts.",
  ],

  contact: {
    emails: ["abhiyash3101@gmail.com", "singha55@msu.edu"],
    phone: "+1 517 204 9389",
    phoneHref: "tel:+15172049389",
  },

  socials: {
    github: "https://github.com/Abhiyash31",
    linkedin: "https://www.linkedin.com/in/abhiyash-pratap-singh-947172219/",
    resume: "/Abhiyash-Singh-Resume.pdf",
  },

  nav: [
    { label: "Work", href: "/#work" },
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;
