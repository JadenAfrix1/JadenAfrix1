import './ReposSection.css'
import { Star, GitFork, Github } from 'lucide-react'

export default function ReposSection({ repos }) {
  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: '#f1e05a',
      Python: '#3572A5',
      TypeScript: '#2b7489',
      HTML: '#e34c26',
      CSS: '#563d7c',
      React: '#61dafb',
      Java: '#b07219',
      default: '#858585'
    }
    return colors[language] || colors.default
  }

  return (
    <section className="repos-section">
      <div className="container">
        <h2>Featured Repositories</h2>
        <div className="repos-grid">
          {repos.length > 0 ? (
            repos.map(repo => (
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" key={repo.id} className="repo-card">
                <div className="repo-icon"><Github size={32} strokeWidth={1.5} /></div>
                <div className="repo-header">
                  <h3>{repo.name}</h3>
                  <span className="stars"><Star size={16} /> {repo.stargazers_count}</span>
                </div>
                <p className="description">{repo.description || 'No description'}</p>
                <div className="repo-footer">
                  {repo.language && (
                    <span className="language">
                      <span className="dot" style={{ backgroundColor: getLanguageColor(repo.language) }}></span>
                      {repo.language}
                    </span>
                  )}
                  <span className="forks"><GitFork size={16} /> {repo.forks_count}</span>
                </div>
              </a>
            ))
          ) : (
            <div className="no-repos">No repositories found</div>
          )}
        </div>
      </div>
    </section>
  )
}
