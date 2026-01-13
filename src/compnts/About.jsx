import React from "react";
import { motion } from "framer-motion";

// Animation Variants for re-use
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }, // Custom cubic-bezier easing
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger individual skill cards
    },
  },
};

function About() {
  const categories = [
    {
      title: "Frontend Development",
      skills: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        },

        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Socket.io",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
        },
        {
          name: "Appwrite",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        },
      ],
    },
    {
      title: "Tools & Languages",
      skills: [
        {
          name: "Postman",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
        },
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        },
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        },
        {
          name: "VS Code",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        },
        {
          name: "C++",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        },
      ],
    },
  ];

  const educations = [
    {
      name: "Vignan's Institute Of Information and Technology",
      year: "2023 - 2027",
      type: "B.Tech",
      location: "Duvvada",
    },
    {
      name: "RGUKT Srikakulam",
      year: "2021 - 2023",
      type: "Intermediate",
      location: "Srikakulam",
    },
    {
      name: "Bhashyam High School",
      year: "2016 - 2021",
      type: "SSC",
      location: "Gajuwaka",
    },
  ];

  return (
    <div className="bg-orange-50 min-h-screen pb-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-20 md:pt-32">
        {/* HERO SECTION - Initial reveal */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <h1
            className="text-7xl md:text-8xl lg:text-9xl font-medium text-black mb-8"
            style={{ fontFamily: "Minecraft" }}
          >
            About.
          </h1>
          <p className="max-w-7xl text-lg md:text-xl text-dirtt opacity-80 leading-relaxed border-l-4 border-dirtt pl-6">
            I’m a passionate <strong className="text-black">Full-Stack Developer</strong> who loves
            turning ideas into seamless digital experiences. I build interfaces
            that are both visually appealing and highly functional.
          </p>
        </motion.div>

        {/* TECH STACK SECTION - Scroll reveal with stagger */}
        <section className="mt-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex items-center gap-4 mb-12"
          >
            <h2
              className="text-3xl md:text-5xl"
              style={{ fontFamily: "Minecraft" }}
            >
              Inventory
            </h2>
            <div className="h-[2px] flex-grow bg-dirtt opacity-20"></div>
          </motion.div>

          <div className="space-y-16">
            {categories.map((cat, idx) => (
              <div key={idx}>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-xl font-bold mb-6 text-stone-600 uppercase tracking-widest"
                >
                  {cat.title}
                </motion.h3>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                >
                  {cat.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      variants={fadeInUp}
                      whileHover={{ y: -8, transition: { duration: 0.2 } }}
                      className="flex flex-col items-center p-6 border border-black/10 rounded-2xl bg-white/50 backdrop-blur-sm transition-shadow shadow-sm hover:shadow-xl hover:bg-white"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-12 h-12 mb-4 object-contain"
                      />
                      <span className="text-sm font-medium text-dirtt">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION - Scroll reveal cards */}
        <section className="mt-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex items-center gap-4 mb-12"
          >
            <h2
              className="text-3xl md:text-5xl"
              style={{ fontFamily: "Minecraft" }}
            >
              Experience Log
            </h2>
            <div className="h-[2px] flex-grow bg-dirtt opacity-20"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {educations.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                className="p-8 border-2 border-dirtt rounded-3xl bg-orange-50/100 flex flex-col justify-between hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <div>
                  <span
                    className="inline-block px-3 py-1 bg-dirtt text-white text-xs rounded-full mb-4"
                    style={{ fontFamily: "Minecraft" }}
                  >
                    {edu.year}
                  </span>
                  <h4 className="text-2xl font-bold mb-2">{edu.type}</h4>
                  <p className="text-dirtt opacity-70">{edu.name}</p>
                </div>
                <p className="mt-6 text-sm font-bold text-dirtt uppercase tracking-tighter">
                  {edu.location}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
