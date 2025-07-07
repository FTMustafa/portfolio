// src/pages/CV/CV.js
import "./CV.css";
import { useEffect } from "react";
import ScrambleText from "../../components/ScrambleText";

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

  return (
    <div className="cv fade-in">
      <h2 className="cv-title">
        <ScrambleText text={"📄 My CV"} duration={1000} />
      </h2>
      <p>You can download my CV using the button below:</p>
      <a href="/moustafa-moustafa-cv.pdf" download className="cv-download">
        Download CV (PDF)
      </a>
      <iframe src="/moustafa-moustafa-cv.pdf" className="cv-preview" title="CV Preview" />
    </div>
  );
}

export default CV;
