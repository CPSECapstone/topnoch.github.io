import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function MarkdownPage({ title, content }) {
  return (
    <div className="md-page">
      <div className="md-page-header">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / {title}
        </div>
        <h1>{title}</h1>
      </div>
      <div className="md-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </div>
  )
}
