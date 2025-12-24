# GitHub Portfolio Website

## Project Overview
A modern, animated GitHub profile portfolio website for Jaden Afrix. Displays GitHub stats, repositories, skills, and contact information. Built with React + Vite with a dark navy blue theme.

## Technology Stack
- **Frontend**: React 18 + Vite
- **Styling**: CSS3 with custom properties
- **API**: GitHub REST API (for real-time data)
- **Deployment**: Render (static site)

## Features
✨ Real-time GitHub data fetching (updates every 5 minutes)
✨ Dark navy blue theme with cyan accent colors
✨ Responsive design for all devices
✨ Repository showcase with language colors and stats
✨ Skills section with proficiency levels
✨ Contact links with icons to all social platforms
✨ Services & collaboration section
✨ WhatsApp integration for inquiries
✨ Pre-filled WhatsApp message template

## Project Structure
```
.
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── components/
│       ├── ProfileHeader.jsx
│       ├── SkillsSection.jsx
│       ├── ReposSection.jsx
│       ├── ServicesSection.jsx
│       ├── ContactSection.jsx
│       └── [corresponding .css files]
└── .gitignore
```

## Setup & Running

### Local Development
```bash
npm install
npm run dev
```
Server runs on `http://0.0.0.0:5000`

### Build for Production
```bash
npm run build
```
Output: `dist/` directory

### Deployment on Render
1. Connect GitHub repository
2. Select "Static Site" as service type
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

## Render Deployment Commands
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

## Configuration
- **Port**: 5000 (frontend)
- **Host**: 0.0.0.0 (allows all connections)
- **GitHub Username**: JadenAfrix1
- **Auto-refresh**: 5 minutes

## Skills Listed
- JavaScript (Advanced)
- Python (Advanced)
- React (Advanced)
- TypeScript (Intermediate)
- HTML/CSS (Advanced)
- Web Development (Advanced)

## Contact Information
- GitHub: https://github.com/JadenAfrix1
- YouTube: https://youtube.com/@jadenafrix
- WhatsApp Channel: https://whatsapp.com/channel/0029VbBkeEA05MUYnBMVLa37
- Telegram: https://t.me/mrafrix
- Number Channel: https://t.me/malikotpzone9

## Services Offered
- Web Development
- Bot Development
- Collaboration

