import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { Redis } from "@/components/ui/svgs/redis";
import { AWS, Firebase, Grafana, Kafka, Loki, Nginx, Prisma, Prometheus, RabbitMQ, Vercel, Golang, GORM, Coolify, N8N } from "@/components/ui/svgs/icons";

export const DATA = {
  name: "Peeush Gupta",
  initials: "PG",
  url: "https://peeushgupta.com",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/delhi",
  description:
    "Software Engineer @Startelelogic. I love building things and helping people.",
  summary: "Software Engineer building AI-powered SaaS products and scalable web systems using Go, Python, and TypeScript. Experienced with Next.js, REST APIs, cloud deployment, Docker, Redis, SQL/NoSQL databases, and integrating GenAI features with LLMs and automation workflows. Focused on shipping fast, writing clean code, and building products people actually use.",
  avatarUrl: "https://ik.imagekit.io/iqhq8erpzs/new-profile-piyush-2.png",
  skills: {
    "Languages & Frameworks": [
      { name: "Golang", icon: Golang },
      {name: "Echo", icon: Golang},
      {name: "Gin", icon: Golang},
      { name: "TypeScript", icon: Typescript },
      { name: "Express.js", icon: Typescript },
      {name: "Next.js", icon: NextjsIconDark},
    ],
    "Databases & Messaging": [
      { name: "RabbitMQ", icon: RabbitMQ },
      { name: "PostgreSQL", icon: Postgresql },
      { name: "MongoDB", icon: MongoDB },
      { name: "Redis", icon: Redis },
      { name: "Kafka", icon: Kafka },
      { name: "Prisma", icon: Prisma },
      { name: "GORM", icon: GORM },
      { name: "Firebase", icon: Firebase },
    ],
    "DevOps & Cloud": [
      { name: "AWS", icon: AWS },
      { name: "Docker", icon: Docker },
      { name: "Vercel", icon: Vercel },
      { name: "Nginx", icon: Nginx },
      { name: "Prometheus", icon: Prometheus },
      { name: "Grafana", icon: Grafana },
      { name: "Loki", icon: Loki },
      { name: "Coolify", icon: Coolify },
      {name: "n8n", icon: N8N},
    ],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/piyushGupta20",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/peeush-gupta/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Piyush__gupta_",
        icon: Icons.x,

        navbar: true,
      },
      
      email: {
        name: "Send Email",
        url: "mailto:piyushguptanai@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Startelelogic",
      href: "https://startelelogic.com",
      badges: [],
      location: "Noida",
      title: "Software Engineer",
      logoUrl: "https://media.licdn.com/dms/image/v2/D560BAQG-P7eGvVFWtA/company-logo_200_200/company-logo_200_200/0/1735880029890/startelelogic_logo?e=2147483647&v=beta&t=Yh5Pl-yj2A-bIKbjs5mA0OFug9FQY6NrIGMUB-CzIMU",
      start: "September 2024",
      end: "Present",
      description:
        "Developed and maintained scalable backend systems using Golang and Node.js. Focused on API design and system performance. Engineered dynamic database provisioning to support multi-tenant architectures. Enhanced Role-Based Access Control (RBAC) systems to manage complex permission hierarchies effectively. Designed backend infrastructure for API subscription, user roles, and configuration management. Created additional production-grade APIs, following best practices in performance and security. Implemented an observability stack using Prometheus, Grafana, and Loki for real-time monitoring and debugging. Utilized Docker and Docker Compose for containerization and multi-container environment management, ensuring consistent and scalable service orchestration. Collaborated closely in agile teams, contributing to sprint planning, code reviews, and continuous delivery practices. Worked with Redis, background job queues, and cloud environments to build resilient and responsive systems.",
    },
    {
      company: "Chetu Private Limited",
      href: "https://www.chetu.com",
      badges: [],
      location: "Noida",
      title: "Software Engineer Trainee",
      logoUrl: "https://www.ai-expo.net/northamerica/wp-content/uploads/2025/04/Chetu-Logo-300x300px.png",
      start: "April 2024",
      end: "September 2024",
      description:
        "Built backend services with Node.js and Express for key modules like users, orders, and cart. Designed RESTful APIs and integrated them seamlessly with the frontend. Created and optimized MongoDB schemas to handle structured and scalable data. Developed reusable UI components using React. Managed complex state using Redux for cart, authentication, and user sessions. Ensured smooth API communication and handled error states gracefully. Improved performance and resolved bugs across the full stack.",
    },
    {
      company: "Cetpa Infotech Pvt. Ltd.",
      href: "https://www.cetpainfotech.com",
      badges: [],
      location: "Noida",
      title: "Software Intern",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLiQhR1dVTSmAsLNhSzb4EESq4ZxIxRhEK-g&s",
      start: "May 2023",
      end: "July 2023",
      description:
        "Built and maintained full-stack web applications using MongoDB, Express, React, and Node.js. Contributed to backend API development and integrated them with frontend components. Collaborated with team members to design, implement, and test new features. Gained hands-on experience in building real-world applications in a collaborative environment.",
    },
  ],
  education: [
    {
      school: "IMS Engineering College",
      href: "http://imsec.ac.in",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQScNcg72f3meXBTskXziahnRIKxWVpG5q1Kw&s",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    }
  ],
  Activities: [
    {
      title: "National & Inter-College Hackathons",
      dates: "2021 - 2023",
      location: "India",
      description:
        "Actively participated in several national and inter-college hackathons, notably by Flipkart and the Govt. of Rajasthan.",
      image: "",
      links: [],
    },
    {
      title: "TechNinjas 2.0 - Coding Competition",
      dates: "2023",
      location: "IMS Engineering College",
      description:
        "Secured 2nd rank in college's inter-department coding competition - TechNinjas 2.0, hosted by the IT Department.",
      image: "",
      links: [],
    },
    {
      title: "Professional Certifications",
      dates: "2023",
      location: "Online",
      description:
        "Completed certifications in industrial IoT (NPTEL) and Cisco Cybersecurity Essentials.",
      image: "",
      links: [],
    },
   
    {
      title: "Shree Delhi Gujarati Samaj General Elections",
      dates: "October 2021",
      location: "Delhi",
      description:
        "Contributed to the successful conduct of online voting for Shree Delhi Gujarati Samaj General Elections (Oct 2021) as part of Nerdscape's session.",
      image: "",
      links: [],
    },
  ],
} as const;
