import "./Projects.css";
import { useEffect, useState } from "react";
import ScrambleText from "../../components/ScrambleText";

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const GITHUB_USERNAME = "FTMustafa";

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc`
        );
        const data = await response.json();
        // Forklanmamış ve açıklaması olan projeleri filtreleme:
        // const filteredData = data.filter(repo => !repo.fork); 
        setRepos(data);
        setLoading(false);
      } catch (error) {
        console.error("GitHub verisi çekilemedi:", error);
        setLoading(false);
      }
    };

    fetchRepos();

    const timer = setTimeout(() => {
      document.body.style.overflowY = "auto";
    }, 500);

    return () => {
      document.body.style.overflowY = "auto";
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="projects fade-in" style={{ justifyContent: 'flex-start', paddingTop: '3rem', paddingBottom: '50px' }}>
      <header className="projects-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ marginTop: 0, marginBottom: '15px' }}>
          <ScrambleText text="My Projects" duration={1000} />
        </h1>
        <p className="projects-subtitle" style={{ marginTop: 0 }}>
          Here are some of my open source projects from GitHub.
        </p>
      </header>

      {loading ? (
        <div className="loading-container">
          <div className="loader"></div>
          <p>Fetching repositories...</p>
        </div>
      ) : (
        <div className="projects-grid">
          {Array.isArray(repos) && repos.map((repo) => (
            <div className="project-card" key={repo.id}>
              <div className="card-top">
                <h3>{repo.name}</h3>
                <span className="language-tag">{repo.language || "Code"}</span>
              </div>
              <p className="description">
                {repo.description || "No description provided."}
              </p>
              <div className="card-footer">
                <div className="stats">
                  <span>★ {repo.stargazers_count}</span>
                  <span>⑂ {repo.forks_count}</span>
                </div>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-link">
                  View Repo &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;
