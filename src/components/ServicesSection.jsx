import './ServicesSection.css'
import { Laptop, Bot, Handshake, Send } from 'lucide-react'

export default function ServicesSection() {
  const handleWhatsappClick = () => {
    const phoneNumber = '263784812740'
    const message = encodeURIComponent('Hi, I need a website or bot. Can you help me?')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <section className="services-section">
      <div className="container">
        <h2>Services & Collaboration</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon"><Laptop size={48} strokeWidth={1.5} /></div>
            <h3>Web Development</h3>
            <p>Professional websites and web applications built with modern technologies</p>
          </div>
          <div className="service-card">
            <div className="service-icon"><Bot size={48} strokeWidth={1.5} /></div>
            <h3>Bot Development</h3>
            <p>Intelligent bots for various platforms at affordable prices</p>
          </div>
          <div className="service-card">
            <div className="service-icon"><Handshake size={48} strokeWidth={1.5} /></div>
            <h3>Collaboration</h3>
            <p>Open to collaborating on exciting projects and ideas</p>
          </div>
        </div>
        <div className="cta-section">
          <h3>Need a Website or Bot?</h3>
          <p>Get in touch for affordable and professional services</p>
          <button className="btn-whatsapp" onClick={handleWhatsappClick}>
            <Send size={20} /> Contact on WhatsApp
          </button>
          <p className="template-text">Message will be pre-filled: "Hi, I need a website or bot. Can you help me?"</p>
        </div>
      </div>
    </section>
  )
}
