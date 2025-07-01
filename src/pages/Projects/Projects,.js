import "./Projects.css";
import { useEffect } from "react";

function Projects() {
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
  return <div className="projects fade-in">Projects Page</div>;
}

export default Projects;
