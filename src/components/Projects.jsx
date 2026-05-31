export default function Projects() {
  const projects = [
   {
  title: "Expense Tracker App",
  desc: "A full-stack application to manage personal finances with real-time tracking and clean UI.",
  features: [
    "Real-time income & expense tracking",
    "Data visualization with charts",
    "Responsive and clean UI",
    "Chatbot for financial insights and tips"
  ],

  tech: ["Flutter", "Python", "Django", "SQLite"],
 github: "https://github.com/abhiram1208/ExpenseTrackerApp-flutter.git",
 github: "https://github.com/abhiram1208/ExpenseTrackerApplication-python.git"

},

{
  title: "VibeSphere – Full Stack Social Media Platform",
  desc: "A scalable full-stack social media application that enables users to share posts, interact with a community, and experience a modern, responsive interface with seamless data handling.",

  features: [
    "Secure JWT-based user authentication",
    "CRUD operations for posts and user interactions",
    "RESTful API architecture using Express.js",
    "State management for dynamic UI updates",
    "Mobile-friendly responsive design"
  ],

  tech: ["React.js", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],

  github: "https://github.com/abhiram1208/VibeSphere.git"
},
{
  title: "Book Store Web Application",
  desc: "A full-stack MERN application for managing and purchasing books with authentication and dynamic cart functionality.",

  features: [
    // "Secure authentication using JWT",
    "RESTful API for book and user management",
    "Dynamic cart system with real-time updates",
    "Responsive UI built with React",
    "Backend built with Node.js and Express"
  ],

  tech: ["MongoDB", "Express.js", "React.js", "Node.js"],

  github: "https://github.com/abhiram1208/book-store-sample"
},
{
  title: "Personal Portfolio Website",
  desc: "A modern personal portfolio website built using frontend technologies to showcase projects, skills, and developer profile with a clean and responsive design.",
  
  features: [
    "Responsive design for all screen sizes",
    "Interactive UI with smooth animations",
    "Project showcase with dynamic rendering",
    "Dark mode support for better user experience"
  ],

  tech: ["React.js", "Tailwind CSS", "Redux Toolkit", "Vite"],

  github: "https://github.com/abhiram1208/react-portfolio-sample.git",
},
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
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                {p.features && p.features.map((feature, j) => (
                  <li key={j}>{feature}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-primary-600 dark:text-primary-400">
                Tech: {p.tech.join(", ")}
              </p>
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-primary font-medium hover:underline">
                View on GitHub
              </a>

              {/* <span className="text-primary font-medium">View →</span> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}