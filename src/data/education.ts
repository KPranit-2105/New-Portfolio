import { Education, Achievement } from "@/types";

export const educationData: Education[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Engineering (B.E.)",
    field: "Computer Engineering",
    institution: "JSPM JSCOE, Pune (Savitribai Phule Pune University)",
    location: "Pune, Maharashtra",
    graduationYear: "2025",
    honors: "First Class with Distinction (CGPA: 8.87 / 10.0)",
    relevantCoursework: [
      "Object-Oriented Programming (Java)",
      "Database Management Systems (SQL / PostgreSQL)",
      "Data Structures & Algorithms",
      "Software Engineering & Agile Methodology",
      "Computer Networks & Cyber Security",
      "Operating Systems & Cloud Architecture",
    ],
  },
];

export const achievementsData: Achievement[] = [
  {
    id: "achieve-hackathon-backend",
    title: "College Backend Engineering Hackathon Winner",
    organization: "JSPM JSCOE Tech Fest & Hackathon",
    date: "2024",
    description: "Designed and built a high-concurrency Java Spring Boot microservices backend within 24 hours, integrating Spring Security JWT authentication, PostgreSQL ORM persistence, and clean RESTful API endpoint design.",
    category: "Backend Engineering & Hackathon",
  },
  {
    id: "achieve-hackathon-cloud-sec",
    title: "Inter-College Tech Symposium & Hackathon Finalist",
    organization: "SPPU Regional Engineering Hackathon",
    date: "2024",
    description: "Developed an automated cloud security and compliance auditing tool utilizing Python and API scrapers, earning top finalist recognition for technical implementation and security control mapping.",
    category: "Cloud Security & Hackathon",
  },
  {
    id: "achieve-academic-excellence",
    title: "Academic Excellence & High Merit Recognition",
    organization: "Department of Computer Engineering",
    date: "2021 – 2025",
    description: "Maintained consistent academic performance with a 8.87 / 10.0 CGPA across computer engineering coursework and practical lab assessments.",
    category: "Academic Distinction",
  },
];
