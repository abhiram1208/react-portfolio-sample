export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto space-y-6">
          <div><img src="/src/assets/me.jpg" alt="image" className="rounded-full mx-auto w-48 h-48 object-cover" /></div>
          <p>Hello! I'm Abhiram, a beginner React developer from Kerala.</p>
          <p>I'm learning modern frontend tools like React, Tailwind CSS v4, Redux Toolkit, and Vite to build clean, fast websites.</p>
          <p>Excited to create real projects and improve every day!</p>
        </div>
      </div>
    </section>
  )
}