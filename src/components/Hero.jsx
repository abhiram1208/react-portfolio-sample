export default function Hero()
{
    return(
<section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 
bg-linear-to-br from-indigo-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">        
            <div className="text-center max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    Hi,I am <span className="text-primary">Abhiram </span>
                </h1>
                <p className="text-xl md:text-2xl mb-10 text-gray-700 dark:text-gray-300">
                    React Developer from Wayanad, Kerala,Creating modern &
                    responsive web experiences.
                </p>
                <a href="#contact"
            className="inline-block px-8 py-4 bg-primary text-white font-semibold 
            rounded-lg shadow-lg hover:bg-indigo-700 transition">   
            Let's connect        
            </a>
            </div>
        </section>
    )
}