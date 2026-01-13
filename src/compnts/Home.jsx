import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

function Home() {
  const socialicons = [
    {
      icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
      // Fixed: Added https:// so Link treats it as an external URL
      Link: "https://github.com/pavansharan007",
    },
    {
      icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
      Link: "https://www.linkedin.com/in/pavan-sharan-117b23262",
    },
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      Link: "mailto:pavansharan1316@gmail.com",
    },
  ];
  const [index, setIndex] = useState(0);

  // Cycle through roles every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  const roles = [
    "Web Developer",
    "Video Editor",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 items-center bg-orange-50 overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Left Content Section */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-20 md:pt-0"
      >
        <div className="text-dirtt">
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl  leading-none">
            Hello
          </h1>

          <div className="mt-4">
            <p className="text-2xl md:text-3xl text-stone font-extralight leading-tight">
              I'm <br />
              <span
                className="text-dirtt text-4xl md:text-5xl lg:text-6xl block mt-2"
                style={{ fontFamily: "Minecraft" }}
              >
                Pavan Saran
              </span>
            </p>
          </div>

          <div className="flex items-center h-12 mt-4 border-l-4 border-[#f1902f] pl-4">
            <AnimatePresence mode="wait">
              <motion.p
                key={roles[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl text-stone font-medium"
              >
                {roles[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="text-sm md:text-base max-w-md mt-4 opacity-80">
            Crafting responsive, user-friendly websites with clean code and
            creative solutions.
          </p>

          <div className="flex gap-4 mt-8">
            {socialicons.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  to={item.Link}
                  target="_blank" // Opens in new tab
                  className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#f1902f] bg-orange-50 rounded-xl hover:bg-[#D6C285] hover:border-dirtt transition-all duration-300 text-dirtt"
                >
                  {item.icon}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex justify-center items-center h-full min-h-[400px]"
      >
        <div
          className="relative w-full h-[80%] max-w-[600px] flex justify-center items-center bg-no-repeat bg-center"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dwmpdbsej/image/upload/v1754751636/build-on-deco_mythow.svg)",
            backgroundSize: "contain",
          }}
        >
          <motion.img
            animate={{ y: [0, -15, 0] }} // Subtle floating animation
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            src="https://res.cloudinary.com/dwmpdbsej/image/upload/v1754761720/sad-minecraft-steve-4og50ydu6voqlnry-removebg-preview_nqh43x.png"
            alt="Minecraft Steve"
            className="w-[70%] md:w-[80%] h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
