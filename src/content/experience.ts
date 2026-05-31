export const experience = [
  {
    org: "MSU Department of Computer Science",
    role: "Undergraduate Learning Assistant",
    period: "Fall 2022",
    location: "East Lansing, MI",
    points: [
      "Supported the lead instructor for CSE 231 (Intro to Programming, Python) with 200+ students: grading, weekly office hours, and review sessions.",
      "Diagnosed root causes of student bugs in 1-on-1s and wrote short worked examples on recursion, list/dict semantics, and file I/O.",
    ],
  },
  {
    org: "MSU Rivertrail Neighborhood Facilities",
    role: "Student Supervisor",
    period: "May 2023 - Present",
    location: "East Lansing, MI",
    points: [
      "Promoted to Student Supervisor after a year as a Building Services Worker; lead and schedule a student crew during shifts and event turnarounds.",
      "Train new hires on equipment, safety, and setup standards, and act as the on-shift point of contact for facility staff and event coordinators.",
    ],
  },
] as const;

export const education = {
  school: "Michigan State University",
  degree: "B.S. Computer Science, Business cognate",
  period: "Aug 2021 - Aug 2026",
  location: "East Lansing, MI",
  detail: "GPA 3.38 · CSE GPA 3.53",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Software Design",
    "Database Systems",
    "Web Application Architecture",
    "Computer Organization & Architecture",
    "Artificial Intelligence",
    "Information Management & the Cloud",
  ],
} as const;

export const activities = [
  "Member, MSU Artificial Intelligence Club (2023 - present)",
  "Kappa Sigma Fraternity, Alumni Relations Chair and award-winning Rush Chair",
] as const;
