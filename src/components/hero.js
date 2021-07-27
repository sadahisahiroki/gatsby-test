import React from "react"
import "../styles/hero.css"

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero-text">
        hero text
      </h1>
      <div className="hero-author">
        <img src="https://api.adorable.io/avatars/30/image.png" className="hero-author-image" alt="avatar"></img>
        <p className="hero-author-text">
          hero author text
        </p>
      </div>
    </div>
  )
}

export default Hero
