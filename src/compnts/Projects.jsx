import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    {
      no: "01",
      title: "Voya",
      type: "MERN Project",
      desc: "a real-time P2P bike-sharing application using the MERN technology stack with Host & Voyager secure authorization systems, Implemented live location tracking through Socket.io and Leaflet.js to update the map between users.",
      stacks: [
        "React",
        "Tailwind CSS",
        "Node",
        "Express",
        "Socket.io",
        "MongoDB",
        "Leaflet",
      ],
      src: "https://res.cloudinary.com/dlqirm28c/image/upload/v1768312892/Screenshot_2026-01-13_193103_fupp09.png",
      github: "https://github.com/pavansharan007/Voya",
      live: "https://voyabikeshare.vercel.app/",
    },
    {
      no: "02",
      title: "SkillSphere",
      type: "MERN Project",
      desc: "Built a dual-role platform for teachers and students, enabling teachers to create courses with unique enrollment IDs for secure, private access,	Supported multi-course creation for teachers and multi-course enrollment for students via private enrollment IDs, with module-level progress tracking for enrolled users.",
      stacks: ["React", "Tailwind CSS", "Node", "Express", "MongoDB"],
      src: "https://res.cloudinary.com/dlqirm28c/image/upload/v1768312586/Screenshot_2026-01-13_192515_l1bbfb.png",
      github: "https://github.com/pavansharan007/skillsphere",
      live: "https://skillsphere-frontend-blush.vercel.app/",
    },
    {
      no: "03",
      title: "DevSphere",
      type: "Full Stack Project",
      desc: "A modern project showcase platform built for developers to upload and manage their personal projects with ease, featuring secure authentication and portfolio management.",
      stacks: ["React", "Tailwind CSS", "Material Tailwind", "Appwrite"],
      src: "https://res.cloudinary.com/dwmpdbsej/image/upload/v1754813824/Screenshot_2025-08-10_134647_ske3ly.png",
      github: "https://github.com/pavansharan007/devsphere.git",
      live: "https://devsphere-encr.vercel.app/",
    },
    {
      no: "04",
      title: "SmartInvest",
      type: "Frontend Project",
      desc: "A web application offering real-time stock rankings, demo trading, and market news. Integrated with backend APIs to ensure seamless data persistence across user sessions.",
      stacks: ["HTML", "CSS", "JavaScript", "Flask"],
      src: "https://res.cloudinary.com/dwmpdbsej/image/upload/v1754810178/Screenshot_2025-08-10_120945_svj0yd.png",
      github: "https://github.com/Sindhu1817/Smart-invest",
      live: "https://homepage-phi-bay.vercel.app/",
    },
  ];

  return (
    <div className="bg-orange-50 min-h-screen relative overflow-hidden px-6 py-20 lg:px-24">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-medium text-black mb-4"
            style={{ fontFamily: "Minecraft" }}
          >
            Projects
          </h1>
          <p className="text-xl md:text-2xl italic text-dirtt/70 mb-20 border-l-4 border-dirtt pl-6">
            “Exploring new biomes through my work.”
          </p>
        </motion.div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.no}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Column */}
              <div className="w-full lg:w-3/5 group">
                <div className="relative border-4 border-black rounded-2xl overflow-hidden bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-1">
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute top-4 left-4 bg-black text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest"
                    style={{ fontFamily: "Minecraft" }}
                  >
                    {project.no}
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="w-full lg:w-2/5 space-y-6">
                <div>
                  <h3 className="text-dirtt/60 font-bold uppercase tracking-widest text-sm mb-2">
                    {project.type}
                  </h3>
                  <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
                    {project.title}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                {/* Stacks Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.stacks.map((stack) => (
                    <span
                      key={stack}
                      className="px-3 py-1 bg-orange-100 border border-black/10 rounded-md text-xs font-bold text-dirtt"
                    >
                      {stack}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  <Link
                    to={project.live}
                    target="_blank"
                    className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-8 py-3 bg-black text-white rounded-xl font-bold hover:bg-dirtt transition-colors"
                  >
                    View Live <FaExternalLinkAlt className="text-xs" />
                  </Link>
                  <Link
                    to={project.github}
                    target="_blank"
                    className="flex items-center justify-center w-14 h-14 border-2 border-black rounded-xl hover:bg-white transition-colors"
                  >
                    <FaGithub className="text-2xl" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
