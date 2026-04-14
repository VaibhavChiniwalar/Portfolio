export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  logo?: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  thumbnail: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  about: string;
  profileImage: string;
  blogUrl?: string;
  social: SocialLink[];
  skills: {
    languages: string[];
    backend: string[];
    frontend: string[];
    databasesAndTools: string[];
  };
  experience: Experience[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  name: "Vaibhav Chiniwalar",
  role: "Java Developer",
  about:
    "Motivated Java Developer (2025 Graduate) with strong fundamentals in Core Java, Object-Oriented Programming (OOP), SQL, Data Structures and Algorithms (DSA), hands-on exposure to developing backend components and understanding API-driven development. Passionate about building efficient, scalable applications and contributing to high-performance teams in a dynamic Agile environment.",
  profileImage: "/images/Myimage.jpg",
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/VaibhavChiniwalar",
      icon: "Github",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/vaibhav-chiniwalar/",
      icon: "Linkedin",
    },
    {
      platform: "Email",
      url: "mailto:vaibhavsc2011@gmail.com",
      icon: "Mail",
    },
  ],
  skills: {
    languages: ["Java", "Python (Basic)"],
    backend: [
      "JDBC",
      "Java EE",
      "Servlets",
      "REST APIs",
      "Spring Boot",
      "Hibernate",
    ],
    frontend: ["HTML5", "CSS3", "JavaScript"],
    databasesAndTools: ["MySQL", "KNIME", "MS Access", "GitHub"],
  },
  experience: [
    {
      company: "TAP Academy",
      role: "Full Stack Web Development Trainee",
      period: "July 2025",
      description: [
        "Gained strong expertise in Core Java and Advanced Java (JDBC, J2EE).",
        "Hands-on experience with MySQL and front-end development using HTML, CSS, and JavaScript.",
        "Worked extensively on OOP concepts, Collections, Multithreading, and Java 8 features.",
      ],
    },
    {
      company: "BOSCH",
      role: "Data Analyst Intern",
      period: "Feb 2025 - May 2025",
      description: [
        "Completed a Data Analyst internship at Bosch involving data collection, cleaning, and analysis.",
        "Worked with Excel, Python, MS Access, and KNIME for structured data processing.",
        "Automated structured data workflows in KNIME for the New Launches project.",
      ],
    },
  ],
  projects: [
    {
      title: "FoodZ – Full Stack Food Delivery Platform",
      description:
        "Designed and developed a scalable full-stack web application using Java EE, Servlets, JSP, and MVC architecture. Implemented secure user authentication, dynamic restaurant/menu management, cart management, and order placement. Integrated MySQL database using the DAO pattern.",
      techStack: ["Java EE", "Servlets", "JSP", "MVC", "JDBC", "MySQL"],
      thumbnail: "/images/projects/image.png",
    },
    {
      title: "New Launches – Vehicle Data Management System",
      description:
        "Built a centralized MS Access application to manage upcoming vehicle model launches during internship. Designed normalized tables, forms, and reports for multi-department data entry and retrieval. Implemented front-end and back-end separation to support multi-user access over a shared network.",
      techStack: ["MS Access"],
      thumbnail: "/images/projects/newlaunches.webp",
    },
  ],
};
