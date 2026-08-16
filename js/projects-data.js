/* ==========================================================================
   PROJECTS DATA — single source of truth for the project archive and the
   reusable case-study template. Content mirrors the Portfolio Content
   Master Draft exactly; no facts are invented here.
   ========================================================================== */
window.PORTFOLIO_PROJECTS = [
  {
    id: "diu-transport",
    name: "DIU Transport App",
    role: "UI/UX Designer",
    focus: ["User Interface", "User Experience", "Figma"],
    event: "Project Showcasing Contest, 2024",
    category: "UI/UX Design",
    summary:
      "A UI/UX design concept created for a DIU project showcasing contest, focusing on designing a practical and user-friendly transportation experience.",
    overview:
      "This concept explores how students on campus might book and track transport more easily. It was designed for and presented at Daffodil International University's Project Showcasing Contest.",
    process:
      "The work centered on interface and user-experience decisions in Figma — screen flows, information hierarchy, and interaction patterns aimed at everyday, practical use rather than a purely decorative UI.",
    technologies: ["Figma"],
    gallery: [
      { src: "../assets/images/projects/diu-transport-1.jpg", alt: "DIU Transport App — full screen set laid out across mobile mockups" },
      { src: "../assets/images/projects/diu-transport-2.jpg", alt: "DIU Transport App — detailed onboarding and booking screens" }
    ],
    links: { github: null, demo: null }
  },
  {
    id: "phi-galaxy",
    name: "Phi Galaxy Website",
    role: "UI/UX Designer",
    focus: ["Web Design", "UI/UX"],
    event: null,
    category: "Web Design",
    summary:
      "A website design project created for Phi Galaxy, focusing on presenting the organization's services and digital identity through a structured and modern web experience.",
    overview:
      "Phi Galaxy needed a digital presence that communicated its services clearly. This project shaped that presence — a structured, modern web layout built around the organization's identity.",
    process:
      "Design work focused on translating the organization's services into a clear page structure and visual identity, from hero messaging through service breakdowns.",
    technologies: ["Figma"],
    gallery: [
      { src: "../assets/images/projects/phi-galaxy-1.jpg", alt: "Phi Galaxy website homepage design, dark theme with service highlights" }
    ],
    links: { github: null, demo: null }
  },
  {
    id: "himel-tasrif",
    name: "Client Portfolio — Himel Tasrif",
    role: "UI/UX Designer",
    focus: ["Personal Branding", "Web Design"],
    event: null,
    category: "Client Work",
    summary:
      "A personal portfolio website design created for a client, focusing on presenting personal identity, work, and professional information through a clear digital experience.",
    overview:
      "A client engagement to design a personal portfolio site — presenting who they are, what they've done, and their professional information in one clear, cohesive experience.",
    process:
      "Design decisions prioritized clarity: a confident hero introduction, an at-a-glance skills section, and a straightforward path to the client's work and stats.",
    technologies: ["Figma"],
    gallery: [
      { src: "../assets/images/projects/himel-1.jpg", alt: "Himel Tasrif portfolio — hero section with introduction" },
      { src: "../assets/images/projects/himel-2.jpg", alt: "Himel Tasrif portfolio — skills and hiring pitch section" },
      { src: "../assets/images/projects/himel-3.jpg", alt: "Himel Tasrif portfolio — layout detail" }
    ],
    links: { github: null, demo: null }
  },
  {
    id: "foodwise",
    name: "FoodWise",
    role: "UI Designer",
    focus: ["App Design", "Learning Experience"],
    event: "International Hackathon",
    category: "Hackathon",
    summary:
      "An app that teaches users how to reduce food waste, built around two distinct learner tracks.",
    overview:
      "FoodWise teaches people how to reduce food waste through two learner tracks built for different audiences: a Child section and an Adult section.",
    process:
      "The Child section teaches through videos, games, and quizzes. The Adult section teaches through videos, articles, and guidelines — two different pacing and tone strategies for the same underlying goal.",
    technologies: ["Figma"],
    gallery: [
      { src: "../assets/images/projects/foodwise-1.jpg", alt: "FoodWise app — full screen flow across onboarding, learning tracks, and food storage guides" }
    ],
    links: { github: null, demo: null }
  },
  {
    id: "personal-portfolio",
    name: "Personal Portfolio",
    role: "Designer & Developer",
    focus: ["Web Development"],
    event: null,
    category: "Web Development",
    summary:
      "My own portfolio website, designed and developed to document my journey as a Software Engineering student, showcase my projects and experiences, and share the areas I'm currently exploring.",
    overview:
      "The site you're looking at right now. Designed and built from scratch to document my journey as a Software Engineering student and bring my design and development skills together in one place.",
    process:
      "Built as a multi-page HTML, CSS, and JavaScript site with a shared design system, version-controlled with Git and hosted on GitHub.",
    technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
    gallery: [],
    links: { github: "https://github.com/jannatunlabs", demo: null }
  }
];
