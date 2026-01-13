import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Link } from "react-router-dom";
import Icepoot from "./icepoot";

function Contact() {
  const contacts = [
    {
      name: "Email",
      icon: <Mail className="w-5 h-5 lg:w-6 lg:h-6" />,
      content: "pavansharan1316@gmail.com",
      src: "mailto:pavansharan1316@gmail.com",
      label: "Send a direct message",
    },
    {
      name: "Linkedin",
      icon: <Linkedin className="w-5 h-5 lg:w-6 lg:h-6" />,
      content: "Pavan Saran",
      src: "https://www.linkedin.com/in/pavan-sharan-117b23262",
      label: "Connect professionally",
    },
    {
      name: "Github",
      icon: <Github className="w-5 h-5 lg:w-6 lg:h-6" />,
      content: "pavansharan007",
      src: "https://github.com/pavansharan007",
      label: "Check my repositories",
    },
  ];

  return (
    <div className="bg-orange-50 min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-6 pt-20 md:pt-32">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-medium text-black"
            style={{ fontFamily: "Minecraft" }}
          >
            Contact.
          </h1>
          <p className="text-dirtt/60 text-lg md:text-xl mt-4 max-w-xl">
            Ready to start a new project or just want to say hi? My inbox is
            always open for new adventures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            <h2 className="text-sm uppercase tracking-[0.2em] font-bold text-stone-500 mb-6">
              Social Channels
            </h2>
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.name}
                whileHover={{ x: 10 }}
                className="group"
              >
                <Link
                  to={contact.src}
                  target="_blank"
                  className="flex items-center p-4 bg-orange-100/50 border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all duration-200"
                >
                  <div className="flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-orange-50 border-2 border-black rounded-xl group-hover:bg-[#D6C285] transition-colors">
                    {contact.icon}
                  </div>
                  <div className="ml-5">
                    <p className="text-xs font-bold uppercase text-stone-400 tracking-wider">
                      {contact.name}
                    </p>
                    <p className="text-xs md:text-base lg:text-lg font-medium text-dirtt truncate max-w-[200px] md:max-w-xs">
                      {contact.content}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Contact Form Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7 bg-orange-50/100 border-2 border-black rounded-[2rem] p-8 lg:p-12 shadow-[12px_12px_0px_0px_rgba(241,144,47,0.2)]"
          >
            <div className="mb-8">
              <h3
                className="text-3xl lg:text-4xl text-black flex items-center gap-3"
                style={{ fontFamily: "Minecraft" }}
              >
                Leave a Message <Send className="w-6 h-6" />
              </h3>
              <p className="text-stone-500 mt-2">
                Drop your details below and I'll get back to you within 24
                hours.
              </p>
            </div>

            <div className=" rounded-2xl p-2">
              <Icepoot />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
