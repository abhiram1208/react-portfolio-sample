export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-indigo-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-xl mb-10 text-gray-700 dark:text-gray-300">
          Open to opportunities, collaborations, or just saying hi!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="mailto:your.email@example.com" className="px-8 py-4  bg-primary text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg">
            Email Me
          </a>
          <a href="https://github.com/abhiram1208/abhiram1208" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2  border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}