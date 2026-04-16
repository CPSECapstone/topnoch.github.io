import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>NOCH</h3>
          <p>A social dining platform for restaurant discovery, reservations, social posting, and more.</p>
        </div>
        <div className="footer-col">
          <h4>Product</h4>
          <ul>
            <li><Link to="/install">Get Started</Link></li>
            <li><Link to="/release-notes">Release Notes</Link></li>
            <li><Link to="/feedback">Feedback</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Admin</h4>
          <ul>
            <li><Link to="/deploy">Deployment Guide</Link></li>
            <li><a href="https://github.com/CPSECapstone/noch" target="_blank" rel="noopener noreferrer">Repository</a></li>
            <li><a href="https://github.com/CPSECapstone/noch/issues" target="_blank" rel="noopener noreferrer">Issue Tracker</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><Link to="/eula">EULA</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} NOCH Team &mdash; Cal Poly CPSE Capstone. All rights reserved.
      </div>
    </footer>
  )
}
