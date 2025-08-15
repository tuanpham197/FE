import { ReactNode } from "react";
import {
  FaAws,
  FaCode,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaProjectDiagram,
  FaTools,
} from "react-icons/fa";
import {
  SiBootstrap,
  SiClaude,
  SiFastapi,
  SiFirebase,
  SiGithubactions,
  SiGithubcopilot,
  SiGo,
  SiJavascript,
  SiJsonwebtokens,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiOpenai,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiSass,
  SiTailwindcss,
  SiVuedotjs,
  SiWebauthn,
} from "react-icons/si";

export type SkillData = {
  name: string;
  icon: ReactNode;
  category: string;
};

export const ALL_SKILLS: SkillData[] = [
  // Programming Languages
  {
    name: "GoLang",
    icon: <SiGo title="GoLang" className="text-blue-400" />,
    category: "Programming Languages",
  },
  {
    name: "PHP",
    icon: <SiPhp title="PHP" className="text-blue-600" />,
    category: "Programming Languages",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript title="JavaScript" className="text-yellow-400" />,
    category: "Programming Languages",
  },
  // {
  //   name: "TypeScript",
  //   icon: <SiTypescript title="TypeScript" className="text-blue-600" />,
  //   category: "Programming Languages",
  // },
  {
    name: "Python",
    icon: <SiPython title="Python" className="text-blue-400" />,
    category: "Programming Languages",
  },
  {
    name: "Java",
    icon: <FaJava title="Java" className="text-orange-700" />,
    category: "Programming Languages",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql title="PostgreSQL" className="text-blue-700" />,
    category: "Programming Languages",
  },
  {
    name: "MySQL",
    icon: <SiMysql title="MySQL" className="text-blue-500" />,
    category: "Programming Languages",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb title="MongoDB" className="text-green-600" />,
    category: "Programming Languages",
  },
  // Libraries & Frameworks
  {
    name: "Laravel",
    icon: <SiLaravel title="Laravel" className="text-black dark:text-white" />,
    category: "Libraries & Frameworks",
  },
  {
    name: "Gorm",
    icon: <SiGo title="Gorm" className="text-green-500" />,
    category: "Libraries & Frameworks",
  },
  {
    name: "Vue",
    icon: <SiVuedotjs title="Vue" className="text-green-500" />,
    category: "Libraries & Frameworks",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss title="Tailwind CSS" className="text-cyan-400" />,
    category: "Libraries & Frameworks",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap title="Bootstrap" className="text-purple-700" />,
    category: "Libraries & Frameworks",
  },
  {
    name: "SASS",
    icon: <SiSass title="SASS" className="text-pink-400" />,
    category: "Libraries & Frameworks",
  },
  {
    name: "FastAPI",
    icon: <SiFastapi title="FastAPI" className="text-green-700" />,
    category: "Libraries & Frameworks",
  },
  // Infrastructure & Tools
  {
    name: "Git",
    icon: <FaGitAlt title="Git" className="text-orange-600" />,
    category: "Infrastructure & Tools",
  },
  {
    name: "Docker",
    icon: <FaDocker title="Docker" className="text-blue-400" />,
    category: "Infrastructure & Tools",
  },
  {
    name: "RESTful APIs",
    icon: <SiPostman title="RESTful APIs" className="text-orange-500" />,
    category: "Infrastructure & Tools",
  },
  {
    name: "AWS",
    icon: <FaAws title="AWS" className="text-yellow-600" />,
    category: "Infrastructure & Tools",
  },
  {
    name: "GitHub Actions",
    icon: <SiGithubactions title="GitHub Actions" className="text-gray-700" />,
    category: "Infrastructure & Tools",
  },
  {
    name: "Firebase",
    icon: <SiFirebase title="Firebase" className="text-yellow-500" />,
    category: "Infrastructure & Tools",
  },
  {
    name: "JWT & OAuth",
    icon: <SiJsonwebtokens title="JWT" className="text-yellow-600" />,
    category: "Infrastructure & Tools",
  },
  {
    name: "OAuth",
    icon: <SiWebauthn title="OAuth" className="text-blue-600" />,
    category: "Infrastructure & Tools",
  },
  {
    name: "UML",
    icon: <FaProjectDiagram title="UML" className="text-purple-600" />,
    category: "Infrastructure & Tools",
  },
  {
    name: "Systems Design",
    icon: (
      <FaProjectDiagram title="Systems Design" className="text-purple-600" />
    ),
    category: "Infrastructure & Tools",
  },
  {
    name: "OOP",
    icon: <FaCode title="OOP" className="text-gray-700" />,
    category: "Infrastructure & Tools",
  },
  // AI Pair Programing
  {
    name: "Cursor",
    icon: <FaTools title="Cursor ide" className="text-purple-600" />,
    category: "AI Pair Programing",
  },
  {
    name: "Github Copilot",
    icon: (
      <SiGithubcopilot title="Github Copilot" className="text-indigo-600" />
    ),
    category: "AI Pair Programing",
  },
  {
    name: "OpenAI",
    icon: <SiOpenai title="OpenAI" className="text-gray-700" />,
    category: "AI Pair Programing",
  },
  {
    name: "Claude",
    icon: <SiClaude title="Claude" className="text-gray-700" />,
    category: "AI Pair Programing",
  },
  // Other
  {
    name: "HTML",
    icon: <FaHtml5 title="HTML" className="text-orange-500" />,
    category: "Other",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt title="CSS" className="text-blue-500" />,
    category: "Other",
  },
];

export const skillIconMap: Record<string, ReactNode> = Object.fromEntries(
  ALL_SKILLS.map((s) => [s.name, s.icon])
);
