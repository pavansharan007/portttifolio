import React from "react";
import { motion } from "framer-motion";
import { LocateIcon, LocationEditIcon } from "lucide-react";
import { IoLocationOutline } from "react-icons/io5";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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
      location: "Duvvada, Visakhapatnam",
      image:
        "https://res.cloudinary.com/dlqirm28c/image/upload/v1768315111/vignans-institute-of-information-technology-visakhapatnam-256383_wlcvo5.webp",
    },
    {
      name: "RGUKT Srikakulam",
      year: "2021 - 2023",
      type: "Intermediate",
      location: "Srikakulam, AP",
      image:
        "https://res.cloudinary.com/dlqirm28c/image/upload/v1768315162/pylon_vnkqwr.webp",
    }
  ];

  return (
    <div className="bg-orange-50 min-h-screen pb-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-20 md:pt-32">
        {/* HERO SECTION */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <h1
            className="text-7xl md:text-8xl lg:text-9xl font-medium text-black mb-8"
            style={{ fontFamily: "Minecraft" }}
          >
            About.
          </h1>
          <p className="max-w-7xl text-lg md:text-xl text-dirtt opacity-80 leading-relaxed border-l-4 border-dirtt pl-6">
            I’m a passionate{" "}
            <strong className="text-black">Full-Stack Developer</strong> who
            loves turning ideas into seamless digital experiences. I build
            interfaces that are both visually appealing and highly functional.
          </p>
        </motion.div>

        {/* INVENTORY SECTION */}
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

        {/* EDUCATION SECTION - Timeline Style */}
        <section className="mt-40 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex items-center gap-4 mb-20"
          >
            <h2
              className="text-3xl md:text-5xl"
              style={{ fontFamily: "Minecraft" }}
            >
              Experience Log
            </h2>
            <div className="h-[2px] flex-grow bg-dirtt opacity-20"></div>
          </motion.div>

          <div className="relative">
            {/* THE CONNECTING LINE 
              Mobile: Fixed to the left (left-4)
              Desktop: Centered (md:left-1/2)
            */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[3px] bg-dirtt opacity-30"></div>

            <div className="space-y-16 md:space-y-24">
              {educations.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row items-center justify-between w-full ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* TIMELINE NODE (DOT)
                    Mobile: Fixed to the line on the left
                    Desktop: Centered on the line
                  */}
                  <div className="absolute left-[10px] md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-[#f1902f] rounded-full border-4 border-orange-50 z-20 shadow-sm"></div>

                  {/* Content Card */}
                  <div className="w-full md:w-[45%] pl-12 md:pl-0">
                    <div className="group overflow-hidden border-2 border-black rounded-[2rem] bg-white shadow-sm hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                      {/* Image Header */}
                      <div className="h-40 md:h-48 w-full overflow-hidden bg-stone-200">
                        <img
                          src={edu.image}
                          alt={edu.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                        />
                      </div>

                      <div className="p-6 md:p-8">
                        <div className="mb-4">
                          <span
                            className="inline-block px-4 py-1 bg-[#f1902f] text-black text-[10px] font-bold uppercase tracking-widest rounded-full"
                            style={{ fontFamily: "Minecraft" }}
                          >
                            {edu.year}
                          </span>
                        </div>
                        <h4 className="text-xl md:text-2xl font-black mb-1 text-black uppercase">
                          {edu.type}
                        </h4>
                        <p className="text-dirtt font-medium mb-4 italic opacity-80">
                          {edu.name}
                        </p>

                        <div className="flex items-center gap-2 text-xs font-bold text-stone-500 uppercase tracking-tighter">
                          <IoLocationOutline className="w-6 h-6 text-[#f1902f]" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for desktop alignment */}
                  <div className="hidden md:block md:w-[45%]"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
