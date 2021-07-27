import React from "react"
import "../styles/post-link.css"

const RANDOM_IMG = "https://source.unsplash.com/collection/175083/640x360"

const PostLink = () => {
  return (
    <div className="post-link">
      <div>
        <img src={RANDOM_IMG} className="post-link-image" alt="post-cover" />
      </div>
      <div className="post-link-text">
        <h2>ブログタイトル</h2>
        <p class="post-link-date">
          <time datetime="2021-07-15">2021年7月15日</time>
        </p>
        <p class="post-link-body">ブログ本文</p>
      </div>
    </div>
  )
}

export default PostLink
