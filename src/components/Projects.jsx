import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Expense Tracker App",
      desc: "A full-stack application to manage personal finances with real-time tracking and clean UI.",
      features: [
        "Real-time income & expense tracking",
        "Data visualization with charts",
        "Responsive and clean UI",
        "Chatbot for financial insights and tips",
      ],
      tech: ["Flutter", "Python", "Django"],
      github: "https://github.com/abhiram1208/Expense-Tracker_App.git",
    },
    {
      title: "VibeSphere – Full Stack Social Media Platform",
      desc: "A scalable full-stack social media application with modern UI and seamless data handling.",
      features: [
        "JWT-based authentication",
        "CRUD operations for posts",
        "REST API with Express.js",
        "Responsive design",
      ],
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      github: "https://github.com/abhiram1208/VibeSphere.git",
    },
    {
      title: "Book Store Web Application",
      desc: "A MERN application for managing and purchasing books with cart functionality.",
      features: [
        "REST API for book management",
        "Dynamic cart system",
        "Responsive React UI",
        "Node.js backend",
      ],
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      github: "https://github.com/abhiram1208/book-store-sample",
    },
    {
      title: "Chat4Chill – Full Stack Chat Application",
      desc: "A full-stack chat platform enabling real-time communication with scalable architecture and responsive UI.",
      features: [
        "Real-time messaging with live updates",
        "REST API integration for data handling",
        "Authentication and user session handling",
        "Responsive and interactive UI design",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/abhiram1208/chat4chill.git",
    },
    {
      title: "TaskFlow – Task Management Web App",
      desc: "A clean and responsive task management application designed to organize daily activities efficiently with an intuitive user interface.",
      features: [
        "Add, edit, and delete tasks (CRUD operations)",
        "Interactive UI for task tracking",
        "Component-based architecture using React",
        "Responsive design for seamless usage across devices",
      ],
      tech: ["React.js", "JavaScript", "CSS", "Vite"],
      github: "https://github.com/abhiram1208/TaskFlow.git",
    },
    {
      title: "Personal Portfolio Website",
      desc: "A modern portfolio website to showcase projects and skills.",
      features: [
        "Responsive design",
        "Smooth animations",
        "Dynamic project showcase",
        "Dark mode support",
      ],
      tech: ["React.js", "Tailwind CSS", "Redux Toolkit", "Vite"],
      github: "https://github.com/abhiram1208/react-portfolio-sample.git",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-b from-[#0f172a] to-[#020617]"
    >
      <div className="max-w-6xl mx-auto">
        {/* 🔥 TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          My <span className="text-cyan-400">Projects</span>
        </motion.h2>

        {/* 🚀 PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.04 }}
              className="p-8 rounded-xl 
              bg-white/5 backdrop-blur-md 
              border border-white/10 
              hover:border-cyan-400 
              shadow-lg hover:shadow-cyan-400/30 
              transition duration-300"
            >
              {/* ⭐ FEATURED TAG */}
              {(i === 1 || i===0 )&&(
                <span className="text-xs bg-cyan-400 text-black px-2 py-1 rounded mb-3 inline-block">
                  ⭐ Featured
                </span>
              )}

              {/* 🧩 TITLE */}
              <h3 className="text-2xl font-semibold mb-3 text-white">
                {p.title}
              </h3>

              {/* 🧠 DESCRIPTION */}
              <p className="text-gray-300 mb-4">{p.desc}</p>

              {/* 🎯 FEATURES (LIMITED) */}
              <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
                {p.features.slice(0, 3).map((feature, j) => (
                  <li key={j}>{feature}</li>
                ))}
              </ul>

              {/* ⚙️ TECH STACK */}
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t, k) => (
                  <span
                    key={k}
                    className="text-xs px-3 py-1 rounded-full 
                    bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* 🔗 GITHUB LINK */}
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 text-cyan-400 font-medium hover:underline"
              >
                View on GitHub →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
