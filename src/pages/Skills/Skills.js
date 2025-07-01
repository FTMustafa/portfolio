import "./Skills.css";
import { useEffect } from "react";

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
  return <div className="skills fade-in">Skills Page</div>;
}

export default Skills;
