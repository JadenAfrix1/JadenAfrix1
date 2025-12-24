import './ProfileHeader.css'
import { Github, Youtube, MessageCircle, Send, Phone } from 'lucide-react'

export default function ProfileHeader({ userData }) {
  if (!userData) return null

  return (
    <div className="profile-header">
      <div className="banner">
        <img src="https://files.catbox.moe/mqcr6p.jpg" alt="Banner" />
        <div className="banner-overlay"></div>
      </div>
      <div className="profile-content">
        <img src={userData.avatar_url} alt="Profile" className="avatar" />
        <div className="info">
          <h1 className="name-title">{userData.name || 'Jaden Afrix'}</h1>
          <p className="bio">{userData.bio || 'Full Stack Developer | Open Source Enthusiast'}</p>
          <div className="stats">
            <div className="stat">
              <span className="value">{userData.followers}</span>
              <span className="label">Followers</span>
            </div>
            <div className="stat">
              <span className="value">{userData.public_repos}</span>
              <span className="label">Repositories</span>
            </div>
            <div className="stat">
              <span className="value">{userData.following}</span>
              <span className="label">Following</span>
            </div>
          </div>
          <div className="social-links">
            <a href="https://github.com/JadenAfrix1" target="_blank" rel="noopener noreferrer" className="btn-link github">
              <Github size={20} /> GitHub
            </a>
            <a href="https://youtube.com/@jadenafrix" target="_blank" rel="noopener noreferrer" className="btn-link youtube">
              <Youtube size={20} /> YouTube
            </a>
            <a href="https://whatsapp.com/channel/0029VbBkeEA05MUYnBMVLa37" target="_blank" rel="noopener noreferrer" className="btn-link whatsapp">
              <MessageCircle size={20} /> WhatsApp
            </a>
            <a href="https://t.me/mrafrix" target="_blank" rel="noopener noreferrer" className="btn-link telegram">
              <Send size={20} /> Telegram
            </a>
            <a href="https://t.me/malikotpzone9" target="_blank" rel="noopener noreferrer" className="btn-link phone">
              <Phone size={20} /> Channel
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
