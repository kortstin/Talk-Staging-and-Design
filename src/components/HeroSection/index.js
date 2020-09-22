import React from "react"
import { Button } from "../ButtonElements"
import "./HeroSection.css"

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Home Staging</h1>
      <p>Made easier for you </p>
      <div className="hero-btns">
        <Button fontBig big primary>
          Get Started
        </Button>
      </div>
    </div>
  )
}

export default HeroSection