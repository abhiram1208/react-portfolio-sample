const services = [
  {
    title: "Frontend Development",
    desc: "Responsive websites using React & modern UI",
  },
  {
    title: "Backend Development",
    desc: "APIs using Node.js ",
  },
  {
    title: "App Development",
    desc: "Flutter-based mobile apps",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          Services
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">
          What I can do for you
        </p>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-6 rounded-xl shadow-md 
              bg-gray-50 dark:bg-gray-800 
              hover:shadow-xl hover:-translate-y-2 
              transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                {s.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}