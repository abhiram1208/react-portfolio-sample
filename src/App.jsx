import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Service";

import { Snowfall } from "react-snowfall";
function SnowflakeShapes({ opacity }) {
  const flakes = ["❄", "❅", "❆", "✻", "❉"];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        opacity,
        pointerEvents: "none",
        zIndex: 51,
        overflow: "hidden",
      }}
    >
      {Array.from({ length: 18 }).map((_, index) => (
        <span
          key={index}
          style={{
            position: "absolute",
            left: `${(index * 37) % 100}%`,
            top: `${(index * 53) % 100}%`,
            color: "#FFFFFF",
            fontSize: `${12 + (index % 4) * 5}px`,
            opacity: 0.7,
            animation: `snowflakeDrift ${6 + (index % 5) * 2}s linear infinite`,
            animationDelay: `${-(index % 8) * 1.5}s`,
          }}
        >
          {flakes[index % flakes.length]}
        </span>
      ))}
    </div>
  );
}
function App() {
  const [snowOpacity, setSnowOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const fadeDistance = window.innerHeight * 0.8;
      const progress = Math.min(window.scrollY / fadeDistance, 1);

      setSnowOpacity(1 - progress);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          opacity: snowOpacity,
          pointerEvents: "none",
          zIndex: 50,
          transition: "opacity 0.15s ease-out",
        }}
      >
        <Snowfall
          snowflakeCount={45}
          color="#FFFFFF"
          radius={[1, 3]}
          speed={[1, 2.5]}
          wind={[1, 3]}
          opacity={[0.4, 0.8]}
        />
        <Snowfall
          snowflakeCount={20}
          color="#FFFFFF"
          radius={[1, 2]}
          speed={[0.8, 2]}
          wind={[2, 4]}
          opacity={[0.2, 0.5]}
        />

        <SnowflakeShapes opacity={1} />
      </div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
