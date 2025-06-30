import "./Home.css";
import ScrambleText from "../../components/ScrambleText";
import vesikalik from "../../components/Images/Mustafa-vesikalık.png"
import { useEffect } from "react";

function Home() {

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
    <div className="home fade-in">
      <h1 id="title">
        <ScrambleText text="Mustafa Mustafa" duration={1500} />
        <ScrambleText text="Jr. Frontend Developer" duration={1800} />
      </h1>
      <img src={vesikalik}/>
      <h3>Hello! I'm Mustafa, a passionate frontend and mobile developer skilled in React, Node.js, and Flutter.</h3>
    </div>
  );
}

export default Home;
