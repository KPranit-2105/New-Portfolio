import { Experience } from "@/types";

export const experienceData: Experience[] = [
  {
    id: "exp-hcltech",
    role: "JAVA Developer",
    company: "HCLTech",
    location: "Pune, MH",
    startDate: "Sep 2025",
    endDate: "Present",
    type: "Full-Time",
    responsibilities: [
      "Developed and maintained scalable backend services using Java, Spring Boot, Spring Data JPA, Hibernate, and RESTful APIs, implementing business logic and reusable application components.",
      "Designed and integrated RESTful APIs with request validation, exception handling, authentication, authorization, and standardized response handling for backend applications.",
      "Implemented database operations using PostgreSQL, SQL, JPA, and Hibernate, including entity relationships, CRUD operations, transactions, and query optimization.",
      "Secured backend APIs using Spring Security, JWT, BCrypt, and Role-Based Access Control (RBAC), implementing authentication and authorization mechanisms.",
      "Developed and tested application components using JUnit, Mockito, and Postman; performed debugging, defect resolution, API testing, and code reviews to improve application reliability and maintainability.",
      "Worked with AWS cloud services including EC2, S3, RDS, Lambda, API Gateway, and CloudWatch, applying Agile development practices and exploring Generative AI, LLM, and Agentic AI integration into backend applications.",
    ],
    keyAchievements: [
      "Architected secure, production-grade REST APIs enforcing BCrypt encryption and JWT stateless authentication.",
      "Optimized PostgreSQL database queries and JPA entity mapping, reducing backend transaction response latency.",
      "Pioneered Generative AI & Agentic AI service integration research within backend cloud infrastructure.",
    ],
    frameworksUsed: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "PostgreSQL",
      "AWS (EC2, S3, RDS, Lambda)",
      "JWT & BCrypt",
      "JUnit & Mockito",
      "GenAI & Agentic AI",
    ],
  },
  {
    id: "exp-internship",
    role: "Software Developer Intern",
    company: "Ventures Digital India Pvt. Ltd.",
    location: "Pune, Maharashtra",
    startDate: "Jan 2025",
    endDate: "Jun 2025",
    type: "Internship",
    responsibilities: [
      "Developed and enhanced Java-based backend components using Java 17/21, Spring Boot, Spring MVC, Spring Data JPA, Hibernate, and PostgreSQL.",
      "Designed and integrated RESTful APIs with proper validation, exception handling, logging, and database interaction following clean coding and layered architecture practices.",
      "Implemented backend security features using Spring Security, JWT-based authentication, role-based access control, and secure API authorization mechanisms.",
    ],
    keyAchievements: [
      "Contributed to scalable backend modules and REST APIs following industry-standard Java and Spring Boot development practices.",
    ],
    frameworksUsed: ["Java 17/21", "Spring Boot", "Spring Data JPA", "Hibernate", "PostgreSQL", "Docker", "AWS", "Git"],
  },
];
