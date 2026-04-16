import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home-simple">
      <h1>NOCH</h1>
      <p className="home-subtitle">A social dining platform for restaurant discovery, reservations, and community. Currently in alpha.</p>

      <h2>Getting Started</h2>
      <ul>
        <li><Link to="/install">Installation & Usage Guide</Link></li>
        <li><Link to="/deploy">Admin Deployment Guide</Link></li>
        <li><Link to="/release-notes">Release Notes (v1.0.0-alpha)</Link></li>
      </ul>

      <h2>Feedback</h2>
      <ul>
        <li><Link to="/feedback">Report a Bug or Give Feedback</Link></li>
        <li><a href="https://github.com/CPSECapstone/noch/issues" target="_blank" rel="noopener noreferrer">GitHub Issue Tracker</a></li>
        <li><a href="mailto:noch-support@cpsecapstone.org">Email: noch-support@cpsecapstone.org</a></li>
      </ul>

      <h2>Legal</h2>
      <ul>
        <li><Link to="/eula">End-User License Agreement (EULA)</Link></li>
        <li><Link to="/privacy-policy">Privacy Policy (GDPR)</Link></li>
      </ul>

      <h2>Source Code</h2>
      <ul>
        <li><a href="https://github.com/CPSECapstone/noch" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
      </ul>
    </div>
  )
}
