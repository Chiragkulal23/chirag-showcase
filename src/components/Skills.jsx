import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaGithub,
  FaMicrosoft,
  FaLightbulb,
  FaBug,
  FaUsers,
  FaComments,
  FaSyncAlt,
  FaClock,
  FaSitemap,
  FaCode,
  FaPlug,
  FaTachometerAlt,
} from "react-icons/fa";
import { BiLogoGit } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import { SiTensorflow, SiGooglecloud, SiJenkins } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "JavaScript", icon: <FaJs size={50} /> },
    { id: 2, name: "React", icon: <FaReact size={50} /> },
    { id: 3, name: "Node.js", icon: <FaNodeJs size={50} /> },
    { id: 4, name: "Python", icon: <FaPython size={50} /> },
    { id: 5, name: "Java", icon: <FaJava size={50} /> },
    { id: 6, name: "HTML5", icon: <FaHtml5 size={50} /> },
    { id: 7, name: "CSS3", icon: <FaCss3Alt size={50} /> },
    { id: 8, name: "Docker", icon: <FaDocker size={50} /> },
    { id: 9, name: "GitHub", icon: <FaGithub size={50} /> },
    { id: 10, name: "Git", icon: <BiLogoGit size={50} /> },
    { id: 11, name: "TensorFlow", icon: <SiTensorflow size={50} /> },
    { id: 12, name: "Google Cloud Platform", icon: <SiGooglecloud size={50} /> },
    { id: 13, name: "Microsoft Azure", icon: <VscAzure size={50} /> },
    { id: 14, name: "MS Office", icon: <FaMicrosoft size={50} /> },
    { id: 15, name: "Jenkins", icon: <SiJenkins size={50} /> },
  ]);

  const [softSkills] = useState([
    { id: 1, name: "Problem-Solving", icon: <FaLightbulb size={50} /> },
    { id: 2, name: "Debugging", icon: <FaBug size={50} /> },
    { id: 3, name: "Team Collaboration", icon: <FaUsers size={50} /> },
    { id: 4, name: "Communication", icon: <FaComments size={50} /> },
    { id: 5, name: "Adaptability", icon: <FaSyncAlt size={50} /> },
    { id: 6, name: "Time Management", icon: <FaClock size={50} /> },
    { id: 7, name: "System Design", icon: <FaSitemap size={50} /> },
    { id: 8, name: "Code Optimization", icon: <FaCode size={50} /> },
    { id: 9, name: "API Integration", icon: <FaPlug size={50} /> },
    { id: 10, name: "Performance Tuning", icon: <FaTachometerAlt size={50} /> },
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "Suprmentr Technologies Pvt Ltd",
      role: "Full Stack Web Developer Internship",
      period: "Internship",
      icon: <MdOutlineWorkOutline size={28} color="white" />
    },
    {
      id: 2,
      company: "Srinivas Institute of Technology",
      role: "B.E. Computer Science",
      period: "2022–2026",
      icon: <FaGraduationCap size={28} color="white" />
    },
    {
      id: 3,
      company: "Dr NSAM PU College",
      role: "Pre-University (Science)",
      period: "2020–2022",
      icon: <FaGraduationCap size={28} color="white" />
    },
    {
      id: 4,
      company: "St. Rita’s English Hr. Primary School",
      role: "SSLC",
      period: "2020",
      icon: <FaGraduationCap size={28} color="white" />
    },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.1 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>

        <motion.h3
          className="text-xl lg:text-3xl text-center font-extrabold mt-14 lg:mt-20"
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Soft Skills
        </motion.h3>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-12 w-full place-items-center gap-y-6 lg:gap-y-12">
          {softSkills.map((skill) => (
            <motion.div
              key={`soft-${skill.id}`}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5 text-center"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: skill.id * 0.08,
              }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p className="text-sm lg:text-base leading-tight px-1">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience & Education</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  {exp.icon ? exp.icon : <img className="w-7 bg-white rounded p-1" src={exp.logo} alt="" />}
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>
                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              {exp.description && (
                <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                  {exp.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
