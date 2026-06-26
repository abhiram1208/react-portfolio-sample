import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#020617] to-[#0f172a] px-6">
      <div className="text-center max-w-3xl">
        {/* 👋 Intro */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-cyan-400 mb-3 tracking-wide"
        >
          👋 Hello, I'm
        </motion.p>

        {/* 🔥 Name */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Abhiram Krishna
        </motion.h1>

        {/* 💼 Role */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl md:text-2xl text-gray-300 mb-6"
        >
          Full Stack Developer | React • Node • MongoDB
        </motion.h2>

        {/* 🧠 Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gray-400 mb-8 leading-relaxed"
        >
          I build scalable web applications with modern UI and efficient backend
          systems. Passionate about creating clean, user-friendly digital
          experiences.
        </motion.p>

        {/* 🚀 CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-black rounded-lg font-medium transition"
          >
            View Projects
          </a>
          <a
            href="/Resume.pdf"
            download
            className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold 
          rounded-lg hover:bg-cyan-400 hover:text-black transition"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
