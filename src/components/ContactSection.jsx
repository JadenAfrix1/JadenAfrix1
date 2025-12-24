import './ContactSection.css'
import { Github, Youtube, MessageCircle, Send, Phone } from 'lucide-react'

export default function ContactSection() {
  const contacts = [
    {
      name: 'GitHub',
      Icon: Github,
      url: 'https://github.com/JadenAfrix1',
      label: 'github.com/JadenAfrix1'
    },
    {
      name: 'YouTube',
      Icon: Youtube,
      url: 'https://youtube.com/@jadenafrix',
      label: '@jadenafrix'
    },
    {
      name: 'WhatsApp Channel',
      Icon: MessageCircle,
      url: 'https://whatsapp.com/channel/0029VbBkeEA05MUYnBMVLa37',
      label: 'Join Channel'
    },
    {
      name: 'Telegram',
      Icon: Send,
      url: 'https://t.me/mrafrix',
      label: '@mrafrix'
    },
    {
      name: 'Fake Numbers',
      Icon: Phone,
      url: 'https://t.me/malikotpzone9',
      label: 'Subscribe'
    }
  ]

  return (
    <footer className="contact-section">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-grid">
          {contacts.map(contact => (
            <a href={contact.url} target="_blank" rel="noopener noreferrer" key={contact.name} className="contact-card">
              <div className="contact-icon"><contact.Icon size={40} strokeWidth={1.5} /></div>
              <h3>{contact.name}</h3>
              <p>{contact.label}</p>
            </a>
          ))}
        </div>
        <div className="footer-bottom">
          <p>© 2026 Jaden Afrix. Available for collaboration and freelance projects.</p>
          <p className="tagline">Building the future, one project at a time.</p>
        </div>
      </div>
    </footer>
  )
}
