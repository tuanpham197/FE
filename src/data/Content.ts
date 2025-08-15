export interface Content {
  _id: string;
  section: "hero" | "footer" | "about";
  title: string;
  subtitle: string;
  description: string;
  content: any;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export const contentData: Content[] = [
  {
    _id: "content_hero",
    section: "hero",
    title: "Tuan Pham Van",
    subtitle: "Full-Stack Developer",
    description:
      "Backend Developer with 4 years of experience, proficient in building scalable, maintainable systems and occasionally working on frontend development with Vue.js. Passionate about exploring and adopting new technologies to create high-quality products that are robust, efficient, and easy to maintain.",
    content: {
      greeting: "Hello, I'm",
      name: "Tuan Pham Van",
      tagline: "Software Engineer | Full-Stack Developer",
      description:
        "I build seamless, efficient web applications with expertise in frontend, backend, and system design. My mission is to deliver high-quality digital solutions that meet real-world needs and advance technology.",
      cta: {
        primary: "View My Work",
        secondary: "Get In Touch",
      },
    },
    isActive: true,
    createdAt: "2024-01-01T00:00:00.000Z",
    updatedAt: "2025-07-11T00:00:00.000Z",
  },
  {
    _id: "content_about",
    section: "about",
    title: "About Me",
    subtitle: "Dedicated to Excellence",
    description:
      "I hold a degree in Software Engineering from Al-Azhar University and have experience building secure, scalable systems. I thrive on solving complex problems and delivering clean, maintainable code.",
    content: {
      introduction:
        "I'm a Full-Stack Developer from Palestine, with a strong foundation in software engineering and database systems. I approach projects with a commitment to excellence and a drive to innovate.",
      passion:
        "I'm passionate about crafting impactful digital products that provide exceptional user experiences and solve real-world problems.",
      approach:
        "Combining frontend finesse, backend robustness, and thoughtful design, I aim to build solutions that exceed expectations.",
      values: [
        "Clean, maintainable code",
        "User-focused design",
        "Continuous learning & growth",
        "Collaborative teamwork",
        "Driving innovation",
      ],
    },
    isActive: true,
    createdAt: "2024-01-01T00:00:00.000Z",
    updatedAt: "2025-07-11T00:00:00.000Z",
  },
  {
    _id: "content_footer",
    section: "footer",
    title: "Let's Work Together",
    subtitle: "Get in Touch",
    description:
      "I'm open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
    content: {
      message:
        "Do you have a project you'd like to collaborate on? Please feel free to reach out.",
      copyright: "© 2025 Tuan Pham Van. All rights reserved.",
      links: {
        privacy: "/privacy",
        terms: "/terms",
      },
    },
    isActive: true,
    createdAt: "2024-01-01T00:00:00.000Z",
    updatedAt: "2025-07-11T00:00:00.000Z",
  },
];
