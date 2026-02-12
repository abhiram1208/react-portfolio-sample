export default function Projects() {
  const projects = [
    { title: "Expense Tracker App", desc: "An app to track expenses and income ." },
    { title: "Portfolio Site", desc: "This website — React + Tailwind v4 + Redux" },
    { title: "Uber-Demo website", desc: "A demo website made with React and Tailwind CSS" },
    { title: "Book-Store", desc: "A website for browsing and purchasing books" },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-semibold mb-4">{p.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{p.desc}</p>
              {/* <span className="text-primary font-medium">View →</span> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}