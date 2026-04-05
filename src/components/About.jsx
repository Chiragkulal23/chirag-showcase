import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0 lg:ml-16">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-black text-sm/6 lg:text-base mt-5 lg:mt-10 text-justify lg:ml-16">
          I'm a Computer Science student  at Srinivas Institute of Technology passionate about building modern web applications and intelligent systems. I have hands-on experience in <span className="font-semibold">frontend development, AI/ML, and blockchain-based projects</span> with a strong focus on clean UI and scalable solutions.
        </p>

        <p className="text-black text-sm/6 lg:text-base mt-3 lg:mt-5 text-justify lg:ml-16">
          With working knowledge of <span className="font-semibold">Git, cloud platforms, and full-stack technologies</span>, I enjoy solving real-world problems and turning ideas into impactful products. I'm continuously learning new technologies and aim to contribute to dynamic engineering teams building innovative and secure applications.
        </p>

        <p className="text-black text-sm/6 lg:text-base mt-3 lg:mt-5 text-justify lg:ml-16">
          Beyond development, I actively participate in technical communities as an <span className="font-semibold">ASCEE member</span> and <span className="font-semibold">IEEE member</span>. My interests include <span className="font-semibold">Music, Outdoor Games, and Drawing</span>, which help me stay creative and balanced. Explore my work and projects on <span className="font-semibold">GitHub</span>.
        </p>
      </motion.div>
    </div>
  );
}
