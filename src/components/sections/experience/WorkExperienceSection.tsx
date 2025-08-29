"use client";

import { ExperienceItemType, WorkExperience } from "../../ui/work-experience";

const WORK_EXPERIENCE: ExperienceItemType[] = [
  {
    id: "1",
    companyName: "Kozocom",
    companyLogo: "/logos/kozo-logo.png",
    isCurrentEmployer: true,
    positions: [
      {
        id: "1-1",
        title: "Backend Engineer",
        employmentPeriod: "March 2024 – Present",
        employmentType: "Full-time",
        description: `• Developed and launched multiple full-stack web applications in a fast-paced startup environment.\n`,
        icon: "code",
        skills: [
          "PHP",
          "Python",
          "Javascript",
          "Tailwind CSS",
          "Laravel",
          "MySQL",
          "Systems Design",
        ],
        location: "Da Nang, VietNam",
        isExpanded: true,
      },
    ],
  },
  {
    id: "2",
    companyName: "NeoLab",
    companyLogo: "/logos/neolab-logo.webp",
    isCurrentEmployer: false,
    positions: [
      {
        id: "2-1",
        title: "Backend Developer",
        employmentPeriod: "Feb 2022 – Feb 2024",
        employmentType: "Full-time",
        description: `• Developed the Sustainable Star Form Builder platform with customizable forms and drag-and-drop functionality.\n\n• Ensured responsive design and optimized frontend performance for a seamless user experience.\n\n• Collaborated with designers and backend engineers to deliver new features and improvements.`,
        icon: "code",
        skills: [
          "Laravel",
          "PHP",
          "VueJS",
          "TypeScript",
          "Tailwind CSS",
          "REST APIs",
          "Git",
          "Axios",
        ],
        location: "Da Nang, VietNam",
      },
    ],
  },
  {
    id: "3",
    companyName: "Tenomad",
    companyLogo: "/logos/ptit.png",
    isCurrentEmployer: false,
    positions: [
      {
        id: "3-1",
        title: "Fullstack Developer",
        employmentPeriod: "July 2020 – Jan 2022",
        employmentType: "Full-time",
        description: `• Contributed to team projects including the NAJ Training Center, improving usability and creativity.\n\n• Maintained legacy projects by updating packages and optimizing code for better performance.\n\n• Worked closely with team members to deliver high-quality solutions on schedule.`,
        icon: "code",
        skills: [
          "Laravel",
          "PHP",
          "VueJS",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Java",
          "Spring",
        ],
        location: "Hue, VietNam",
      },
    ],
  },
  {
    id: "6",
    companyName: "Hue University of Sciences",
    companyLogo: "/logos/hue-logo.png",
    isCurrentEmployer: false,
    positions: [
      {
        id: "6-1",
        title: "Graduated with a Bachelor's degree in Software Engineering.",
        employmentPeriod: "2016 – 2020",
        employmentType: "Education",
        description: `• Studied Software Engineering and Database Systems with a strong emphasis on building secure applications and robust data management.\n\n• Developed a solid foundation in modern programming practices, system architecture, and problem-solving.\n\n• Engaged in hands-on projects and collaborative learning environments.\n\n• GPA: 3.2`,
        icon: "education",
        skills: [
          "Software Engineering",
          "Database Systems",
          "Secure Applications",
          "System Architecture",
          "Programming Practices",
          "Problem Solving",
        ],
        location: "Hue, VietNam",
      },
    ],
  },
];

export default function WorkSection() {
  return (
    <section className="w-full ibmsans">
      <h2 className="section-title">Experience</h2>
      <WorkExperience className="rounded-lg" experiences={WORK_EXPERIENCE} />
    </section>
  );
}
