import React from 'react';
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Video-to-Notes",
    subtitle: "Generation System • 2025",
    description: "A tool that converts lecture videos into structured notes with speech-to-text, summarization, and content filtering.",
    features: [
      "Speech-to-text conversion",
      "Automated summarization",
      "Content filtering"
    ],
    tags: ["Python", "React.js", "Node.js", "Cloud Storage"],
    image: "/Projects/project2.png",
    link: "https://github.com/Chiragkulal23/VideoToNotes-Mini-Project-2025"
  },
  {
    id: 2,
    title: "ContriBlock",
    subtitle: "Decentralized Open-Source Contribution System • 2025",
    description: "Major project: A blockchain-based platform for managing and verifying open-source contributions with KYC, IPFS storage, token rewards, and admin approval workflow.",
    features: [
      "Smart contracts for contribution verification",
      "Token reward mechanism",
      "KYC + admin review system"
    ],
    tags: ["Blockchain", "Solidity", "Flask", "React", "IPFS", "REST API"],
    image: "/Projects/project1.jpg",
    link: "https://github.com/Chiragkulal23/ContriBlock-Major-Project-2025"
  },
  {
    id: 3,
    title: "Aura Shopfront",
    subtitle: "Full-Stack E-Commerce Platform • 2026",
    description: "Full-stack e-commerce web application for browsing products, managing carts, and placing Cash-on-Delivery orders.",
    features: [
      "Product browsing and cart management",
      "Cash-on-Delivery order placement",
      "JWT authentication with role-based admin access"
    ],
    tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    image: "/Projects/project3.png",
    link: "https://github.com/Chiragkulal23/aura-store",
    websiteUrl: "https://aura-shopfront.onrender.com",
  },
  {
    id: 4,
    title: "Shiksha Tuition Tracker ",
    subtitle: "Simple Tuition Fee Analytics & Tracker • 2025",
    description: "A web-based app for tracking and updating monthly student fee payments, providing real-time dashboards, analytics, and mobile-friendly UI. Data is stored in localStorage for seamless, backend-free record-keeping.",
    image: "/Projects/project4.png",
    link: "https://github.com/Chiragkulal23/Shiksha-Tuition-Tracker",
    tags: ["React", "Dashboard", "LocalStorage", "Analytics", "Responsive UI"],
    websiteUrl: "https://shikshabhumi.netlify.app/",
  },
  {
    id: 5,
    title: "CodeReviewAI",
    subtitle: "AI-Powered Code Analysis & Report Generator • 2026",
    description: "A full-stack AI code analysis platform that reviews source code, detects issues, assigns quality scores, and generates downloadable reports. Built with FastAPI backend and React (TypeScript) frontend, featuring REST APIs, Docker support, and real-time code feedback.",
    image: "/Projects/project5.png",
    link: "https://github.com/Chiragkulal23/CodeReviewAI",
    tags: ["React", "TypeScript", "FastAPI", "AI", "Docker", "Code Analyzer"],
  }
];

export default function Projects() {
  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-12 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-1/2 w-full rounded-2xl overflow-hidden shadow-lg border border-[#27272A]">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="lg:w-1/2 w-full flex flex-col space-y-4">
              <div className="flex items-center gap-4">
                <h2 className="font-extrabold text-[#71717A] text-2xl lg:text-4xl">
                  {String(project.id).padStart(2, "0")}
                </h2>
                <h3 className="font-bold text-white text-2xl lg:text-4xl">{project.title}</h3>
              </div>

              {project.subtitle && (
                <p className="font-semibold text-[#D4D4D8] text-lg lg:text-xl">
                  {project.subtitle}
                </p>
              )}

              <p className="font-light text-sm/6 lg:text-base text-[#A1A1AA]">
                {project.description}
              </p>

              {project.features && project.features.length > 0 && (
                <div className="space-y-2 mt-2">
                  <p className="text-white font-semibold">Key Features</p>
                  <ul className="text-[#D4D4D8] font-light text-sm lg:text-base space-y-1.5">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <span className="text-white mt-0.5">▸</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 border border-[#3F3F46] rounded-full text-xs font-medium text-[#D4D4D8] bg-[#18181B]">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-x-6 gap-y-3 mt-2">
                <a
                  href={project.link}
                  className="text-white inline-flex hover:text-gray-300 transition-colors w-fit items-center gap-x-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={22} />
                  <span className="font-semibold">View Code</span>
                </a>
                {project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    className="text-white inline-flex hover:text-gray-300 transition-colors w-fit items-center gap-x-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TbExternalLink size={22} />
                    <span className="font-semibold">View Website</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
