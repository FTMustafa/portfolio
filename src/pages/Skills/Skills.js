import "./Skills.css";
import { useEffect } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaNpm,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiFlutter,
  SiDart,
} from "react-icons/si";

import ScrambleText from "../../components/ScrambleText";

function Skills() {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    const timer = setTimeout(() => {
      document.body.style.overflowY = "auto";
    }, 500);
    return () => {
      document.body.style.overflowY = "auto";
      clearTimeout(timer);
    };
  }, []);

  const skills = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiDart />, name: "Dart" },
    { icon: <SiFlutter />, name: "Flutter" },
    // { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaNpm />, name: "NPM" },
  ];

  const softSkills = [
    "Problem Solving",
    "Teamwork",
    "Time Management",
    "Communication",
    "Creativity",
    "Adaptability",
  ];

  const tools = [
    "VS Code",
    "Figma",
    "Postman",
    "Chrome DevTools",
    "GitHub",
    "Terminal",
  ];

  return (
    <div className="skills fade-in">
      <h2 className="skills-title">
        <ScrambleText text={"🛠 My Skills"} duration={1000} />
      </h2>
      <section className="skills-wrapper">
        <article>
          <h3>Soft Skills</h3>
          <ul>
            {softSkills.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </article>
        <article>
          <h3>Tools</h3>
          <ul>
            {tools.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
      <div className="honeycomb">
        {skills.map((skill, i) => (
          <div className="hex-svg-wrapper" key={i}>
            <svg viewBox="0 0 100 100" className="hex-svg">
              <polygon
                points="50,0 93,25 93,75 50,100 7,75 7,25"
                className="hex-shape"
              />
              <foreignObject x="20" y="5" width="60" height="100">
                <div
                  className="hex-content"
                  xmlns="http://www.w3.org/1999/xhtml"
                >
                  <div className="icon">{skill.icon}</div>
                  <p>{skill.name}</p>
                </div>
              </foreignObject>
            </svg>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Skills;
