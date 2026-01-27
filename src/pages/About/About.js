import "./About.css";
import { useEffect } from "react";

function About() {
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
    <div className="about fade-in">
      <main>
        <article>
          <h2>Who Am I?</h2>
          <p>
            I'm Mustafa, a junior software developer with a strong interest in building responsive and user-friendly web and mobile applications.
            I enjoy designing clean UIs, solving coding challenges, learning new frameworks, and building full-stack applications from scratch.
            I'm currently focusing on machine learning using Python to improve my skills in this area too.
          </p>
        </article>
        <div className="divider" />
        <article>
          <h2>Education</h2>
          <ul>
            <li>Bachelor's degree of Computer Engineering (GPA 3.06\4) - Trakya University (2021-2025)</li>
            <li>Master's degree of Computer Engineering (GPA 88,71\100) - Trakya University (2025-2027)</li>
          </ul>
        </article>
        <div className="divider" />
        <article>
          <h2>Career Goals</h2>
          <p>
            My goal is to become a full-stack developer and work on meaningful
            projects that make a real impact. I'm also planning to contribute to
            open source projects and continue growing as a developer.
          </p>
        </article>
        <div className="divider" />
        <article>
          <h2>Outside of Coding</h2>
          <p>
            In my free time, I enjoy:
            <ul>
              <li>Reading about tech trends</li>
              <li>Playing football</li>
              <li>Exploring creative tools like digital art and animation</li>
            </ul>
          </p>
        </article>
      </main>
    </div>
  );
}

export default About;
