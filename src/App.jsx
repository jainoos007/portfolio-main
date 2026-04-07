/* eslint-disable no-unused-vars */
import "./App.css";
import Hero from "./components/hero";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Education from "./components/education";
import { useState, useEffect } from "react";
import {
  Home,
  Github,
  Linkedin,
  Twitter,
  FileText,
  Moon,
  Sun,
} from "lucide-react";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = (e) => {
    e.stopPropagation();
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
    }
  }, [isDarkMode]);

  const handleDockClick = () => {
    setIsExpanded(true);
    setTimeout(() => setIsExpanded(false), 300);
  };

  return (
    <div className="portfolio-wrapper">
      <Hero />

      <section className="about-section">
        <p className="section-title">About</p>
        <p className="about-text">
          I like building things and understanding how they work under the hood.
          Most of my time goes into turning ideas into real, usable products
          from real-time systems to workflow-driven platforms focusing on clean
          design, scalability, and smooth user experience. I primarily build
          full-stack applications with a strong focus on modern web
          architectures and scalable system design and I’m always curious to
          explore deeper areas like system design and machine learning. I’m
          driven by projects that go beyond the screen and solve real problems,
          and I’m constantly learning, experimenting, and refining how I build.
        </p>
      </section>

      <Experience />

      <Education />

      <Skills />

      <Projects />

      <section className="contact-section">
        <div className="contact-badge">Contact</div>
        <h2 className="contact-title">Let's get in touch!</h2>
        <p className="contact-subtitle">
          If you have any inquiries, please feel free to reach out. You can
          contact me via mail at &nbsp;
          <a href="mailto:ammjainoos@gmail.com">ammjainoos@gmail.com</a>
        </p>
      </section>

      <nav
        className={`nav-dock ${isExpanded ? "dock-expand" : ""}`}
        onClick={handleDockClick}
      >
        <a href="/" title="Home">
          <Home size={20} strokeWidth={2.2} />
        </a>
        <a href="https://github.com/jainoos007" target="_blank" title="GitHub">
          <Github size={20} strokeWidth={2.2} />
        </a>
        <a
          href="https://www.linkedin.com/in/jainoos7979/"
          target="_blank"
          title="LinkedIn"
        >
          <Linkedin size={20} strokeWidth={2.2} />
        </a>

        <a href="resume_jainoos.pdf" target="_blank" title="Resume">
          <FileText size={20} strokeWidth={2.2} />
        </a>
      </nav>
    </div>
  );
}

export default App;
