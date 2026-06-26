import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaAws,
} from "react-icons/fa";

import {
  SiRedux,
  SiTailwindcss,
  SiVite,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" /> },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600 text-3xl" />,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-500 text-3xl" />,
    },
    { name: "React.js", icon: <FaReact className="text-cyan-400 text-3xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500 text-3xl" /> },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-sky-400 text-3xl" />,
    },
    { name: "Vite", icon: <SiVite className="text-purple-400 text-3xl" /> },

    { name: "Git", icon: <FaGit className="text-red-500 text-3xl" /> },
    { name: "AWS", icon: <FaAws className="text-orange-400 text-3xl" /> },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-b from-[#020617] to-[#0f172a]"
    >
      <div className="max-w-6xl mx-auto">
        {/* 🔥 TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          My <span className="text-cyan-400">Skills</span>
        </motion.h2>

        {/* 🚀 GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.08 }}
              className="p-6 rounded-xl text-center 
          bg-white/5 backdrop-blur-md 
          border border-white/10 
          hover:border-cyan-400 
          shadow-md hover:shadow-cyan-400/30 
          transition"
            >
              {/* ICON */}
              <div
                className="flex justify-center mb-4 text-4xl 
          drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
              >
                {skill.icon}
              </div>

              {/* NAME */}
              <p className="font-medium text-gray-200">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
