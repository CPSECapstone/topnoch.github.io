import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MarkdownPage from './pages/MarkdownPage'

import featuresListContent from './content/features-list.md?raw'
import eulaContent from './content/eula.md?raw'
import privacyContent from './content/privacy-policy.md?raw'
import installContent from './content/install-user.md?raw'
import deployContent from './content/deploy-admin.md?raw'
import feedbackContent from './content/feedback.md?raw'
import releaseNotesContent from './content/release-notes.md?raw'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          {/* Getting Started */}
          <Route path="/features-list" element={<MarkdownPage 
            title="Features List" 
            content={featuresListContent} 
            next={{
              to: "/install",
              label: "Next: Installation & Usage Guide"
            }}
            />} />
          <Route path="/install" element={<MarkdownPage 
            title="Installation & Usage Guide" 
            content={installContent} 
            next={{
              to: "/feedback",
              label: "Next: Feedback & Bug Reporting"
            }}
            />} />
          {/* Feedback */}
          <Route path="/feedback" element={<MarkdownPage 
            title="Feedback & Bug Reporting" 
            content={feedbackContent} 
            next={{
              to: "/eula",
              label: "Next: End-User License Agreement"
            }}/>} />
          {/* Legal */}
          <Route path="/eula" element={<MarkdownPage 
            title="End-User License Agreement" 
            content={eulaContent} 
            next={{
              to: "/privacy-policy",
              label: "Next: Privacy Policy"
            }}/>} />
          <Route path="/privacy-policy" element={<MarkdownPage 
            title="Privacy Policy" 
            content={privacyContent} 
               next={{
              to: "/",
              label: "Back: Home"
              }}
              />} />
          
          <Route path="/developer" element={<MarkdownPage title="Admin Deployment Guide" content={deployContent} />} />  
          {/* <Route path="/release-notes" element={<MarkdownPage title="Release Notes" content={releaseNotesContent} />} /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App
