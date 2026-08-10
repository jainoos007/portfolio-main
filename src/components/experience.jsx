import React from "react";
import expImg from "../assets/nexfort.jpeg";

export default function Experience() {
  return (
    <section className="experience-section">
      <p className="section-title">Experience</p>

      <div className="simple-item">
        <div className="item-main-row">
          <div className="org-logo">
            <img src={expImg} alt="ISRO" />
          </div>

          <div className="item-header-top">
            <div className="title-group">
              <h3>Software Developer Intern — NexFort (Pvt) Ltd</h3>
              <span className="org-name">Internship</span>
            </div>
          </div>
          <div className="item-meta">
            <span>Galle, Sri Lanka</span>
            <span className="item-date">June 2025 — Jul 2026</span>
          </div>
        </div>

        <div className="experience-details">
          <p>
            Developed responsive <strong>React-based real-estate platforms</strong>{" "}
            for public users and administrators, with property discovery,
            authentication, dashboards, and content management. Built
            public-facing experiences for sales, rentals, land, commercial
            listings, projects, agents, and careers using{" "}
            <strong>React, Vite, and Tailwind CSS.</strong>
          </p>
          <p>
            Delivered authenticated user workflows and <strong>10+ administrative
            modules</strong> for property, project, user, media, inquiry, SEO,
            content, and tenant management. Integrated <strong>REST APIs</strong>{" "}
            with <strong>Axios</strong>, managed state with <strong>Redux Toolkit</strong>,
            and implemented protected routes, role-based access, and
            cookie-based authentication with <strong>Laravel Sanctum</strong> and
            CSRF protection.
          </p>
        </div>
      </div>

      <div className="simple-item">
        <div className="item-main-row">
          <div className="org-logo freelance-logo" aria-hidden="true">
            F
          </div>

          <div className="item-header-top">
            <div className="title-group">
              <h3>Freelance Full Stack Developer</h3>
              <span className="org-name">Contract-Based</span>
            </div>
          </div>
          <span className="item-date">Apr 2026 — Present</span>
        </div>

        <div className="experience-details">
          <p>
            Collaborate directly with clients and stakeholders to gather
            requirements, estimate timelines, and deliver production-ready
            software. Developed a multi-tenant debt recovery platform with
            Next.js 16, React, TypeScript, Redux Toolkit, and TanStack Query,
            including 75+ REST API operations for authentication, sales recovery,
            inventory, reporting, and policy-based access control.
          </p>
          <p>
            Implemented secure cookie-based sessions, CSRF protection, token
            refresh, organization-aware routing, and role-based access control.
            Deployed releases to Oracle Cloud VPS using Nginx, PM2, GitHub
            Actions CI/CD, and Let&apos;s Encrypt HTTPS, while providing technical
            documentation, post-deployment support, and ongoing improvements
            based on stakeholder feedback.
          </p>
        </div>
      </div>
    </section>
  );
}
