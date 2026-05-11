import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

export default function MarkdownPage({ title, content, next }) {
  return (
    <div className="md-page">
      <div className="md-page-header">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / {title}
        </div>

        <h1>{title}</h1>
      </div>

      <div className="md-body">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        >
          {content}
        </ReactMarkdown>
      </div>

      <div>
        {next && (
          <Link to={next.to}>
            {next.label}
          </Link>
        )}
      </div>
    </div>
  )
}