import "./Home.css";
import ScrambleText from "../../components/ScrambleText";
import vesikalik from "../../components/Images/Mustafa-vesikalık.png";
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
      <main className="home-content">
        <h1 id="title">
          <ScrambleText text="Mustafa Mustafa" duration={1500} />
          <ScrambleText text="Jr. Software Developer" duration={1800} />
        </h1>
        <div className="profile-card">
          <img src={vesikalik} alt="Mustafa" />
          <div className="card-content">
            <p><span>Name:</span> Mustafa</p>
            <p><span>Surname:</span> Mustafa</p>
            <p><span>Age:</span> 22</p>
            <p><span>Location:</span> Turkey / Edirne</p>
          </div>
        </div>
        <h3>
          Hello! I'm Mustafa, a passionate software developer skilled in React,
          Python, and Flutter.
        </h3>
      </main>
    </div>
  );
}

export default Home;
