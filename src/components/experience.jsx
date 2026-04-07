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
              <h3>NexFort (Pvt) Ltd</h3>
              <span className="org-name">Software Developer Intern</span>
            </div>
          </div>
          <span className="item-date">Jun 2025 — Present</span>
        </div>
      </div>
    </section>
  );
}
