export default function Skills() {
  const skills = [
    "HTML5 & CSS3", "JavaScript (ES6+)", "React.js", "Redux Toolkit",
    "Tailwind CSS v4", "Vite", "Responsive Design", "Git"
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <div key={i} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md text-center font-medium hover:shadow-xl transition">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}