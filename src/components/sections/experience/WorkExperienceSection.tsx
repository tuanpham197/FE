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
        description: `• Project description:\n\nThe real estate investment website where you can receive annual dividends.
          \n\n• Main responsibilities:
          \n\nDevelop new feature
          \n\nRenew old feature from cakePHP to Laravel
          \n\nDesign database for new function
          \n\n• Achieved results: \n\nComplete release pharse 1\n\nProject of the year 2024
          \n\n• Team size: \n\n14 members`,
        icon: "code",
        skills: [
          "PHP",
          "Python",
          "Javascript",
          "Tailwind CSS",
          "Laravel 11x",
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
        title: "Ecommerce microservice - Backend Developer",
        employmentPeriod: "August 2023 – March 2024",
        employmentType: "Full-time",
        description: `• Project description:\n\nThis is an internal website for selling pharmaceuticals and functional foods.
          \n\n• Main responsibilities:
          \n\nBuild struct source base
          \n\nBuild basic service (auth, helper, crud entity, some feature ...)
          \n\nDesign database
          \n\n• Achieved results: \n\nLearn about deployment microservice system
          \n\n• Team size: \n\n8 members`,
        icon: "code",
        skills: [
          "GoLang",
          "RabbitMQ",
          "gRPC",
          "Redis",
          "MySQL",
          "MongoDB",
          "Docker",
          "Kong",
        ],
        location: "Da Nang, VietNam",
      },
      {
        id: "2-2",
        title: "Keihi - Backend Developer",
        employmentPeriod: "April 2023 – August 2023",
        employmentType: "Full-time",
        description: `• Project description:\n\nInternal website for invoice management of staff.
          \n\n• Main responsibilities:
          \n\nMaintaining the project, updating PHP version from 7.2 to 8.2
          \n\nResolving lingering bugs in the project.
          \n\nRefactor source code
          \n\nMigration from monolithic to microservice
          \n\n• Achieved results: \n\nImprovement in project security, quality, and performance.
          \n\n• Team size: \n\n18 members`,
        icon: "code",
        skills: [
          "Codeigniter 3",
          "MySQL",
          "Vuejs",
          "AWS S3",
          "Redis",
          "Docker",
        ],
        location: "Da Nang, VietNam",
      },
      {
        id: "2-3",
        title: "Signing - Fullstack Developer",
        employmentPeriod: "July 2022 – April 2023",
        employmentType: "Full-time",
        description: `• Project description:\n\nInternal Website about manage and sign contract online.
          \n\n• Main responsibilities:
          \n\nPerforming tasks related to security for the website, including issues related to security
          \n\nDatabase encryption.
          \n\nDuring this process, also engaging in certain front-end tasks using VueJS.
          \n\nResolve outstanding problems.
          \n\n• Achieved results: \n\nEnhance the security of the application, address outstanding issues in the production environment.
          \n\n• Team size: \n\n21 members`,
        icon: "code",
        skills: [
          "Codeigniter 3",
          "MySQL",
          "Vuejs",
          "AWS S3",
          "Redis",
          "Docker",
        ],
        location: "Da Nang, VietNam",
      },
      {
        id: "2-4",
        title: "Okusurimart - Fullstack Developer",
        employmentPeriod: "February 2022 – July 2022",
        employmentType: "Full-time",
        description: `• Project description:\n\nA website selling medication in combination with pharmacy and medical professionals. Providing consultation through chat or video calls to advise buyers on their medication needs.
          \n\n• Main responsibilities:
          \n\nAnalyzing requirements and designing APIs to provide for the front-end team.
          \n\nHandling certain front-end tasks as needed by the VueJS front-end team.
          \n\n• Achieved results: \n\nDeveloping video call functionality facilitates doctors and patients to exchange medical information, as well as making consultations more convenient.
          \n\n• Team size: \n\n5 members`,
        icon: "code",
        skills: [
          "Laravel 7x",
          "PHP",
          "VueJS",
          "AWS EC2",
          "MySQL",
          "AWS Chime SDK",
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
        title: "Asim - Backend Developer",
        employmentPeriod: "Dec 2021 – Feb 2022",
        employmentType: "Full-time",
        description: `• Project description:\n\nA web app for managing distributors, agents, and SIM card sales.
          \n\n• Main responsibilities:
          \n\nDeveloping APIs based on the business requirements provided by the customer.
          \n\n• Achieved results: \n\nSuccessfully launched the project on schedule.
          \n\n• Team size: \n\n18 members`,
        icon: "code",
        skills: ["Spring boot", "MySQL"],
        location: "Hue, VietNam",
      },
      {
        id: "3-2",
        title:
          "Classic Holiday - Front-end Developer (https://classicholidays.com.au)",
        employmentPeriod: "May 2021 – Nov 2021",
        employmentType: "Full-time",
        description: `• Project description:\n\nBooking resort service.
          \n\n• Main responsibilities:
          \n\nBuild UI from figma
          \n\nCall api handle logic from requirement
          \n\n• Achieved results: \n\nSuccessfully launched the project on schedule.
          \n\n• Team size: \n\n9 members`,
        icon: "code",
        skills: ["VueJs", "Html", "Scss", "JavaScript"],
        location: "Hue, VietNam",
      },
      {
        id: "3-3",
        title: "LSDN - Backend Developer",
        employmentPeriod: "Feb 2021 – Apr 2021",
        employmentType: "Full-time",
        description: `• Project description:\n\nLSDN is a system for managing information related to profiles, drafts, meetings, etc., within a law firm.
          \n\n• Main responsibilities:
          \n\nMaintaining and updating existing functionalities on the website.
          \n\n• Team size: \n\n1 members`,
        icon: "code",
        skills: ["Laravel", "PHP", "MySQL", "Html", "CSS"],
        location: "Hue, VietNam",
      },
      {
        id: "3-4",
        title: "SpeedL - Backend Developer",
        employmentPeriod: "July 2020 – Jan 2021",
        employmentType: "Full-time",
        description: `• Project description:\n\nThis is a project involving a web and app platform for selling products from a supermarket.
          \n\n• Main responsibilities:
          \n\nParticipating in maintenance and development of certain functionalities based on customer requirements, such as promotional events, registration, and more.
          \n\n• Achieved results: \n\nImproved security and performance of the application.
          \n\n• Team size: \n\n4 members`,
        icon: "code",
        skills: ["Spring", "MySQL", "Html", "CSS"],
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
