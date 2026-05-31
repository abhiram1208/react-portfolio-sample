// export default function Skills() {
//   const skills = [
//     "HTML5 & CSS3", "JavaScript (ES6+)", "React.js", "Redux Toolkit",
//     "Tailwind CSS v4", "Vite", "Responsive Design", "Node.js", "Git","MongoDB","Express.js","AWS Cloud"
//   ]

//   return (
//     <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {skills.map((skill, i) => (
//             <div key={i} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md text-center font-medium hover:shadow-xl transition">
//               {skill}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

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
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md text-center hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-3">{skill.icon}</div>
              <p className="font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
