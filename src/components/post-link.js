import React from "react"
import "../styles/post-link.css"

const PostLink = ({post}) => {
  const { title, updatedAt, thumbnail } = post
  const excerpt = post.excerpt.excerpt

  return (
    <div className="post-link">
      <div class="post-link-thumbnail">
        <img src={thumbnail.file.url} className="post-link-image" alt={thumbnail.title} />
      </div>
      <div className="post-link-text">
        <h2>{title}</h2>
        <p class="post-link-date">
          <time datetime={updatedAt}>{updatedAt}</time>
        </p>
        <p class="post-link-body">{excerpt}</p>
      </div>
    </div>
  )
}

export default PostLink
