// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center pt-20 px-6
// bg-linear-to-br from-indigo-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800"
//     >
//       <div className="text-center max-w-4xl">
//         <h1 className="text-5xl md:text-7xl font-bold mb-6">
//          👋 Hi,I am <span className="text-primary">Abhiram</span>
//         </h1>
//         <p className="text-xl md:text-2xl mb-10 text-gray-700 dark:text-gray-300">
//           Hi, I'm a <span className="text-primary">Full Stack Developer</span>  (MERN) from Wayanad, Kerala. I build
//           fast, scalable web apps with clean UI & real-world functionality.
//           Creating modern & responsive web experiences.

//         </p>
//         <a
//           href="#contact"
//           className="inline-block px-8 py-4 bg-primary text-white font-semibold
//             rounded-lg shadow-lg hover:bg-indigo-700 transition"
//         >
//           Let's connect
//         </a>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center 
      bg-gradient-to-br from-[#0f172a] via-[#020617] to-black px-6"
    >
      {/* 🔥 NAME */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold"
      >
        <span className="text-gray-200 dark:text-gray-300 tracking-wide">
          {" "}
          Hi, I'm{" "}
        </span>
        <span className="text-cyan-400 drop-shadow-[0_0_20px_#22d3ee]">
          Abhiram Krishna
        </span>
      </motion.h1>

      {/* 💡 DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-xl md:text-2xl mb-10 text-gray-300 max-w-2xl"
      >
        I'm a <span className="text-cyan-400">Full Stack Developer</span> (MERN)
        from Wayanad, Kerala. I build fast, scalable web apps with clean UI &
        real-world functionality.
      </motion.p>

      {/* 🚀 BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {/* Primary */}
        <a
          href="#contact"
          className="px-8 py-4 bg-cyan-400 text-black font-semibold 
          rounded-lg shadow-lg hover:scale-105 hover:shadow-cyan-400/50 transition"
        >
          Let's Connect
        </a>

        {/* Resume */}
        <a
          href="/Resume.pdf"
          download
          className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold 
          rounded-lg hover:bg-cyan-400 hover:text-black transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
