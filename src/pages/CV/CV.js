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
    <div className="cv fade-in" style={{ justifyContent: 'flex-start', paddingTop: '3rem', paddingBottom: '50px' }}>
      <h2 className="cv-title" style={{ marginTop: 0}}>
        <ScrambleText text={"My CV"} duration={1000} />
      </h2>
      <p className="cv-subtitle" style={{ marginTop: 0 }}>You can download my CV using the button below:</p>
      <a href="/moustafa-moustafa-cv.pdf" download className="cv-download">
        Download CV (PDF)
      </a>
      <iframe src="/moustafa-moustafa-cv.pdf" className="cv-preview" title="CV Preview" />
    </div>
  );
}

export default CV;
