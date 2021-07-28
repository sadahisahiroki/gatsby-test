import React from "react"
import "../styles/post.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Post({pageContext}) {
  const { title, updatedAt, thumbnail } = pageContext.post 
  const content = pageContext.post.content.childMarkdownRemark.html
  const excerpt = pageContext.post.excerpt.excerpt

  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <div className="post-header">
        <h1>{title}</h1>
        <p>{updatedAt}</p>
        <img className="post-image" src={thumbnail.file.url} alt={thumbnail.title}></img>
        <div dangerouslySetInnerHTML={{ __html: content }} className="post-body" />
      </div>
    </Layout>
  )
}
