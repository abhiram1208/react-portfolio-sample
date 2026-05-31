import me from "../assets/me.jpg";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto space-y-6">
          <div>
            <img
              src={me}
              alt="Abhiram"
              className="rounded-full mx-auto w-48 h-48 object-cover"
            />
          </div>

          <p>Hello! I'm Abhiram, a beginner Full Stack developer from Kerala.</p>
          <p>
            I am a Computer Science graduate with a strong interest in
            full-stack development. I have hands-on experience in building web
            applications using both frontend and backend technologies.
            Currently, I am enhancing my skills in the MERN stack at ExpertzLab,
            focusing on developing real-world, scalable applications. 
             </p>
            <p>Excited to create real projects and improve every day!</p>
           
           <p>🎯 Goal: To become a skilled full-stack developer and
            contribute to impactful projects focusing on becoming a full-stack
            developer and actively looking for opportunities.</p>
          
          
        </div>
      </div>
    </section>
  );
}
