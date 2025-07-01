import "./CV.css";
import { useEffect } from "react";

function CV() {
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
  return <div className="cv fade-in">CV Page</div>;
}

export default CV;
