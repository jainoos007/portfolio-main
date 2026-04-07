import React from "react";
import { useState } from "react";
import queueflowImg from "../assets/queueflow.png";
import formoraImg from "../assets/formora.png";
import fashshopImg from "../assets/fashshop.png";
import nikeImg from "../assets/nike.png";
import storeImg from "../assets/store.png";
import portfolioImg from "../assets/portfolio.png";
const projectList = [
  {
    name: "Queueline",
    category: "major",
    tags: ["Next.js", "Tailwind CSS", "PostgreSQL", "Prisma", "System Design"],
    desc: "A real-time digital queue management system that replaces physical waiting lines with token-based tracking, live position updates, and smart wait-time estimation.",
    image: queueflowImg,
    github: "https://github.com/jainoos007/Queline",
    website: "https://queline.vercel.app/login",
  },
  {
    name: "Formora",
    category: "major",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Workflow Engine",
    ],
    desc: "A workflow-driven form platform that allows users to create dynamic, schema-based forms with conditional logic and automated actions on submission.",
    image: formoraImg,
    github: "https://github.com/jainoos007/formora",
    website: "https://formora-psi.vercel.app/",
  },
  {
    name: "FashShop",
    category: "major",
    tags: ["React.js", "Tailwind CSS", "UI/UX"],
    desc: "A responsive fashion e-commerce website featuring dynamic product displays, dark mode, and an engaging user experience across devices.",
    image: fashshopImg,
    github: "https://github.com/jainoos007/fashshop",
    website: "https://serene-muffin-9fbb45.netlify.app/",
  },
  {
    name: "Nike Shoes Showcase",
    category: "fun",
    tags: ["React.js", "Tailwind CSS", "Landing Page"],
    desc: "A modern and visually engaging landing page for showcasing Nike shoes with smooth interactions and responsive design.",
    image: nikeImg,
    github: "https://github.com/jainoos007/Nike-Land",
    website: "https://jainoos007.github.io/Nike-Land/",
  },
  {
    name: "Product Store App",
    category: "major",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "MERN"],
    desc: "A full-stack product management application with complete CRUD functionality and a scalable backend architecture.",
    image: storeImg,
    github: "https://github.com/jainoos007/Product-Store",
    website: "https://product-store-1-tna3.onrender.com/",
  },
  {
    name: "Personal Portfolio",
    category: "fun",
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "UI Design"],
    desc: "A fully responsive portfolio website with smooth animations, glassmorphism UI, and dynamic navigation experience.",
    image: portfolioImg,
    github: "https://github.com/jainoos007/portfolio",
    website: "https://jainoos.vercel.app",
  },
];

export default function Projects() {
  const [view, setView] = useState("major");
  // const [layout, setLayout] = useState('grid');
  const [search, setSearch] = useState("");

  const filteredProjects = projectList.filter(
    (p) =>
      p.category === view &&
      (p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))),
  );

  return (
    <section className="projects-section">
      <div className="projects-header">
        <div className="contactt-badge">Proof of Work</div>
        <h2 className="header-title">Check out my latest work</h2>
        <p className="header-subtitle">
          I've worked on a variety of projects, here are some that I like.
        </p>
      </div>

      <div className="command-center-box">
        <div className="search-wrapper">
          <span className="terminal-prefix">$</span>
          <input
            type="text"
            placeholder="Search projects"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="controls-right">
          <div className="toggle-pill">
            <div className={`pill-slider ${view}`}></div>
            <button
              className={view === "major" ? "active" : ""}
              onClick={() => setView("major")}
            >
              Major
            </button>
            <button
              className={view === "fun" ? "active" : ""}
              onClick={() => setView("fun")}
            >
              Fun
            </button>
          </div>
        </div>
      </div>

      <div className={`viewport-grid`}>
        {filteredProjects.map((proj) => (
          <div key={proj.name} className={`grid-item smooth-reveal`}>
            <div className="item-img">
              <img src={proj.image} alt={proj.name} />
            </div>

            <div className="item-details">
              <div className="item-header">
                <div className="title-row">
                  <h3>{proj.name}</h3>
                  <span className="year-pill">{proj.year}</span>
                </div>
                <div className="tags-row">
                  {proj.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* {layout === 'grid' && <p className="item-desc">{proj.desc}</p>} */}
              <p className="item-desc">{proj.desc}</p>

              <div className="project-links">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-github"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    GitHub
                  </a>
                )}

                {proj.website && (
                  <a
                    href={proj.website}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-website"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    Website
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
