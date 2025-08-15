export interface Education {
  _id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
  createdAt: string;
  updatedAt: string;
}

export const educationData: Education[] = [
  {
    _id: "edu_1",
    degree: "Graduated with a Bachelor's degree in Software Engineering.",
    institution: "Hue University of Sciences",
    location: "Hue, VietNam",
    startDate: "2016-08-01",
    endDate: "2020-07-20",
    current: false,
    description:
      "Studied Software Engineering with a strong emphasis on building secure applications, system architecture, and robust data management. Developed a solid foundation in modern programming practices and problem-solving within diverse technology environments.",
    achievements: [
      "Specialized in Software Engineering and Database Systems",
      "Built secure applications with strong system architecture principles",
      "Mastered database design, administration, and data integrity",
      "Enhanced problem-solving and analytical skills through practical projects",
    ],
    createdAt: "2022-07-01T00:00:00.000Z",
    updatedAt: "2025-07-11T00:00:00.000Z",
  },
];
