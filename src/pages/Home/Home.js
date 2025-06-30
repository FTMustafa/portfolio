import ScrambleText from "../../components/ScrambleText";
import "./Home.css";
import vesikalik from "C:\\Users\\DELL\\Desktop\\Kodlar\\React\\portfolio\\src\\components\\Images\\Mustafa-vesikalık.png"

function Home() {
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
