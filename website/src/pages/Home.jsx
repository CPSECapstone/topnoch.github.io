import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home-simple">
      <h1>NOCH (Alpha)</h1>
      <p className="home-subtitle">A social dining platform for restaurant discovery, reservations, and community. Currently in alpha.</p>
      <p className="home-subtitle">Our role is to integrate AI features into the app to improve the user experience and access.</p>

      <h2>Getting Started</h2>
      <ul>
        <li><Link to="/features-list">Features List</Link></li>
        <li><Link to="/install">Installation & Sign In</Link></li>
      </ul>

      <h2>Feedback</h2>
      <ul>
        <li><Link to="/feedback">Report a Bug or Give Feedback</Link></li>
        {/* <li><a href="https://calpoly-se-capstone.atlassian.net/jira/software/c/projects/TN/boards/263/backlog" target="_blank" rel="noopener noreferrer">Jira Board for Bug reports</a></li> */}
      </ul>

      <h2>Legal</h2>
      <ul>
        <li><Link to="/eula">End-User License Agreement (EULA)</Link></li>
        <li><Link to="/privacy-policy">Privacy Policy (GDPR)</Link></li>
      </ul>
{/* 
      <h2>Source Code</h2>
      <ul>
        <li><Link to="/developer">Developer Documentation</Link></li>
        <li><a href="https://github.com/CPSECapstone/noch" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
      </ul> 
*/}
    </div>
  )
}
