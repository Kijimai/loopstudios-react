import React from "react"
import { useGlobalContext } from "../../utils/context"
const Hero = () => {
  const { navActive } = useGlobalContext()

  return (
    <div
      className="hero-header"
      style={{
        marginTop: navActive && "212px",
      }}
    >
      <div className="tagline-container">
        <h1>Immersive Experiences that Deliver</h1>
      </div>
    </div>

    //Styled to maintain position when navbar goes to position fixed
    // <header
    //   className="hero"
    // style={{
    //   marginTop: navActive && "72px",
    // }}
    // >
    //   <h1>Immersive experiences that deliver</h1>
    // </header>
  )
}

export default Hero
