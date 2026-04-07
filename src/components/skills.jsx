"use client";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiFigma,
  SiMysql,
  SiPostgresql,
  SiCplusplus,
  SiExpress,
  SiGithub,
  SiPostman,
  SiPycharm,
} from "react-icons/si";

const techIcons = [
  { Icon: SiReact, name: "React", color: "#61DAFB" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { Icon: SiPython, name: "Python", color: "#3776AB" },
  { Icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
  { Icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { Icon: SiHtml5, name: "HTML5", color: "#E34F26" },
  { Icon: SiCss, name: "CSS3", color: "#1572B6" },
  { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { Icon: SiFigma, name: "Figma", color: "#F24E1E" },
  { Icon: SiMysql, name: "MySQL", color: "#4479A1" },
  { Icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { Icon: SiCplusplus, name: "C/C++", color: "#00599C" },
  { Icon: SiExpress, name: "Express", color: "#ffffff" },
  { Icon: SiGithub, name: "GitHub", color: "#ffffff" },
  { Icon: SiPostman, name: "Postman", color: "#FF6C37" },
  { Icon: SiPycharm, name: "PyCharm", color: "#21D789" },
];

export default function Skills() {
  // Row splitting logic
  const row1 = techIcons.slice(0, 8);
  const row2 = techIcons.slice(8);

  return (
    <section className="skill-part">
      <h2 className="section-title-skill">Tech Stack</h2>

      <div className="skills-bento-box">
        <div className="marquee-container">
          <div className="marquee-content">
            {[...row1, ...row1, ...row1, ...row1].map((item, i) => (
              <div key={i} className="marquee-pair">
                <item.Icon size={22} style={{ color: item.color }} />
                <span className="marquee-text">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="marquee-container">
          <div className="marquee-content reverse">
            {[...row2, ...row2, ...row2, ...row2].map((item, i) => (
              <div key={i} className="marquee-pair">
                <item.Icon size={22} style={{ color: item.color }} />
                <span className="marquee-text">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
