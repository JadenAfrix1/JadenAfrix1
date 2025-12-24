import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import ProfileHeader from './components/ProfileHeader'
import SkillsSection from './components/SkillsSection'
import ReposSection from './components/ReposSection'
import ContactSection from './components/ContactSection'
import ServicesSection from './components/ServicesSection'

function App() {
  const [userData, setUserData] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        // Fetch user data
        const userResponse = await axios.get('https://api.github.com/users/JadenAfrix1')
        setUserData(userResponse.data)

        // Fetch repos
        const reposResponse = await axios.get('https://api.github.com/users/JadenAfrix1/repos?sort=stars&order=desc&per_page=10')
        setRepos(reposResponse.data)
      } catch (error) {
        console.error('Error fetching GitHub data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchGithubData()
    // Refresh data every 5 minutes
    const interval = setInterval(fetchGithubData, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return <div className="loading">Loading profolio....</div>
  }

  return (
    <div className="app">
      <ProfileHeader userData={userData} />
      <SkillsSection />
      <ReposSection repos={repos} />
      <ServicesSection />
      <ContactSection />
    </div>
  )
}

export default App
