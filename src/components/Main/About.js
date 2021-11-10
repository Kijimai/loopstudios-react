import React from "react"
import mobileImg from "../../images/mobile/image-interactive.jpg"
import desktopImg from "../../images/desktop/image-interactive.jpg"

const About = () => {
  return (
    <header className="secondary-header">
      <div className="secondary-header-img-container">
        <img className="mobileImg" src={mobileImg} alt="guy in VR mobile version" />
        <img className="desktopImg" src={desktopImg} alt="guy in VR desktop version" />
      </div>
      <div className="secondary-header-info">
        <h2>The leader in interactive VR</h2>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </header>
  )
}

export default About
