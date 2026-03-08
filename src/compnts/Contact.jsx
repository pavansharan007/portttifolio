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
    <div className="bg-transparent min-h-screen pb-20 text-cyber-textPrimary">
      <div className="max-w-7xl mx-auto px-6 pt-20 md:pt-32">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="cyber-label">// MODULE: COMMUNICATIONS</div>
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-cyber-accentGold uppercase tracking-widest"
          >
            Contact_
          </h1>
          <p className="text-cyber-textSecondary font-mono text-lg md:text-xl mt-4 max-w-xl border-l-2 border-cyber-accentCyan pl-6 uppercase">
            // Ready to start a new project or just want to say hi? My inbox is
            open for new connections.
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
            <h2 className="text-sm uppercase tracking-[0.2em] font-mono font-bold text-cyber-textSecondary mb-6">
              &gt; Social Channels
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
                  className="cyber-card flex items-center p-4 transition-all duration-200 hover:border-cyber-accentCyan border-b-[3px] border-b-cyber-accentCyan hover:shadow-[0_0_15px_rgba(0,212,255,0.2)]"
                >
                  <div className="flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-cyber-bgTertiary border border-cyber-border rounded-sm group-hover:border-cyber-accentCyan group-hover:text-cyber-accentCyan transition-colors text-cyber-textSecondary">
                    {contact.icon}
                  </div>
                  <div className="ml-5">
                    <p className="text-xs font-bold uppercase text-cyber-textSecondary font-mono tracking-wider">
                      {contact.name}
                    </p>
                    <p className="text-xs md:text-base lg:text-lg font-bold text-cyber-textPrimary truncate max-w-[200px] md:max-w-xs uppercase tracking-widest mt-1">
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
            className="lg:col-span-7 cyber-card p-8 lg:p-12 border-b-[3px] border-b-cyber-accentGold relative overflow-hidden"
          >
            {/* Decorative background grid in panel */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#f5a623_1px,transparent_1px)] [background-size:20px_20px]"></div>
            
            <div className="mb-8 relative z-10">
              <h3
                className="text-3xl lg:text-4xl text-cyber-accentGold font-bold uppercase tracking-widest flex items-center gap-3"
              >
                Leave a Message <Send className="w-6 h-6" />
              </h3>
              <p className="text-cyber-textSecondary font-mono mt-2 uppercase tracking-wide text-sm">
                // Drop your details below and I'll respond within 24 hours.
              </p>
            </div>

            <div className="relative z-10 w-full">
              <Icepoot />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
