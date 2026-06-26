import { motion } from "framer-motion";
import { Code, Server, Smartphone, PenTool,Database,Cloud } from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    desc: "Building modern, responsive, and high-performance user interfaces using React, Tailwind CSS, and smooth animations.",
    icon: <Code size={32} />,
  },
  {
    title: "Backend Development",
    desc: "Designing secure and scalable REST APIs with Node.js, Express, and database integration.",
    icon: <Server size={32} />,
  },
  {
    title: "Full Stack Web Development",
    desc: "Building complete web applications using MERN stack with authentication, APIs, and responsive UI.",
    icon: <Smartphone size={32} />,
  },
  {
    title: "Graphic Design (Canva)",
    desc: "Designing eye-catching social media posts, banners, posters, and marketing materials using Canva with a modern and clean style.",
    icon: <PenTool size={32} />,
  },
  {
  title: "Database Management",
  desc: "Building and maintaining structured databases with efficient data modeling, CRUD operations, and seamless backend integration.",
  icon: <Database size={32} />,
},
{
  title: "Cloud Deployment (AWS)",
  desc: "Deploying applications on AWS with cloud services, ensuring scalability, performance, and secure hosting.",
  icon: <Cloud size={32} />,
},
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 px-6 bg-gradient-to-b from-[#020617] to-[#0f172a]"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* 🔥 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4 text-white"
        >
          My <span className="text-cyan-400">Services</span>
        </motion.h2>

        <p className="text-gray-400 mb-14">What I can build for you 🚀</p>

        {/* 🚀 Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="
                p-8 rounded-xl 
                bg-white/5 backdrop-blur-md 
                border border-white/10 
                hover:border-cyan-400 
                shadow-lg hover:shadow-cyan-400/30 
                transition duration-300
              "
            >
              {/* 🔷 Icon */}
              <div className="mb-4 text-cyan-400 flex justify-center">
                {s.icon}
              </div>

              {/* 🧩 Title */}
              <h3 className="text-xl font-semibold mb-3 text-white">
                {s.title}
              </h3>

              {/* 🧠 Description */}
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
