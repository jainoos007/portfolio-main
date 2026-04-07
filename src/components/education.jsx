import eduImg from "../assets/dtu.jpeg";
import schoolImg from "../assets/zck.gif";

export default function Education() {
  return (
    <section className="education-section" style={{ marginTop: "20px" }}>
      <p className="section-title">Education</p>

      <div className="simple-item">
        <div className="item-main-row">
          <div className="org-logo">
            <img src={eduImg} alt="College" />
          </div>
          <div className="item-header-top">
            <div className="title-group">
              <h3>Delhi Technological University</h3>
              <span className="org-name">
                Bachelor of Technology in Computer Engineering
              </span>
            </div>
          </div>
          <span className="item-date">2022 — 2026</span>
        </div>
        <div className="item-main-row">
          <div className="org-logo">
            <img src={schoolImg} alt="College" />
          </div>
          <div className="item-header-top">
            <div className="title-group">
              <h3>Zahira National College Kalmunai</h3>
              <span className="org-name">
                G.C.E Advanced Level - Physical Science Stream
              </span>
            </div>
          </div>
          <span className="item-date">2020</span>
        </div>
      </div>
    </section>
  );
}
