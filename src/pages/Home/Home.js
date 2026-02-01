import "./Home.css";
import ScrambleText from "../../components/ScrambleText";
import vesikalik from "../../components/Images/Mustafa-vesikalık.png";
import { useEffect, useState } from "react";

function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      document.body.style.overflow = originalStyle;
    }, 800);

    return () => {
      document.body.style.overflow = originalStyle;
      clearTimeout(timer);
    };
  }, []);

  // Mobilde butona basınca çalışacak fonksiyon
  const handleToggle = (e) => {
    e.stopPropagation(); // Kartın kendisine tıklanırsa çakışmayı önler
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="home fade-in">
      <main className="home-content">
        <h1 id="title">
          <ScrambleText text="Mustafa Mustafa" duration={1500} />
          <ScrambleText text="Software Developer" duration={1800} />
        </h1>

        {/* 'expanded' class'ı state true ise eklenir */}
        <div className={`profile-card ${isExpanded ? "expanded" : ""}`}>
          
          {/* Sadece mobilde görünen Toggle Butonu */}
          <button className="mobile-toggle-btn" onClick={handleToggle}>
            {isExpanded ? "✕" : "i"}
          </button>

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