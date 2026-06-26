import me from "../assets/me.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-[#020617] to-[#0f172a]"
    >
      <div className="max-w-6xl mx-auto">
        {/* 🔥 TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        {/* 🚀 CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 🖼 IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex justify-center"
          >
            <img
              src={me}
              alt="Abhiram"
              className="w-56 h-56 object-cover rounded-full 
              border-4 border-cyan-400 
              shadow-[0_0_25px_#22d3ee]"
            />
          </motion.div>

          {/* 🧠 TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-gray-300 space-y-6 text-lg leading-relaxed"
          >
            <p>
              Hello! I'm{" "}
              <span className="text-cyan-400 font-semibold">
                Abhiram Krishna
              </span>
              , a passionate Full Stack Developer from Kerala.
            </p>

            <p>
              I am a Computer Science graduate with strong interest in{" "}
              <span className="text-cyan-400">modern web development</span>. I
              have hands-on experience building applications using both frontend
              and backend technologies.
            </p>

            <p>
              Currently, I am improving my skills in the{" "}
              <span className="text-cyan-400">MERN stack</span> and focusing on
              developing real-world scalable applications.
            </p>

            <p>
              🎯 My goal is to become a skilled developer and contribute to
              impactful projects while continuously learning and growing.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
