import './SkillsSection.css'
import { Code2, Zap, Package, Cpu, Palette, Globe } from 'lucide-react'

const skills = [
  { name: 'JavaScript', icon: Code2, level: 'Advanced' },
  { name: 'Python', icon: Zap, level: 'Advanced' },
  { name: 'React', icon: Package, level: 'Advanced' },
  { name: 'TypeScript', icon: Cpu, level: 'Intermediate' },
  { name: 'HTML/CSS', icon: Palette, level: 'Advanced' },
  { name: 'Web Development', icon: Globe, level: 'Advanced' }
]

export default function SkillsSection() {
  return (
    <section className="skills-section">
      <div className="container">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {skills.map(skill => {
            const IconComponent = skill.icon
            return (
              <div key={skill.name} className="skill-card">
                <div className="skill-icon"><IconComponent size={48} strokeWidth={1.5} /></div>
                <h3>{skill.name}</h3>
                <p>{skill.level}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
