import { useEffect, useState } from "react";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

function getRandomChar() {
  return LETTERS[Math.floor(Math.random() * LETTERS.length)];
}

function ScrambleText({ text, interval = 30, duration = 1000 }) {
  const [output, setOutput] = useState("");
  
  useEffect(() => {
    let mounted = true;
    let frame = 0;
    const maxFrames = Math.floor(duration / interval);
    
    const update = () => {
      if (!mounted) return;

      let displayed = "";
      for (let i = 0; i < text.length; i++) {
        if (frame >= maxFrames - (text.length - i) * 2) {
          displayed += text[i];
        } else {
          displayed += getRandomChar();
        }
      }

      setOutput(displayed);

      frame++;
      if (frame < maxFrames) {
        setTimeout(update, interval);
      }
    };

    update();

    return () => {
      mounted = false;
    };
  }, [text, interval, duration]);

  return <div style={{ fontFamily: "monospace", fontSize: "2rem", color: "white" }}>{output}</div>;
}

export default ScrambleText;
