import React from "react"
import { useGlobalContext } from "../../utils/context"
const Hero = () => {
  const { navActive } = useGlobalContext()

  return (
    //Styled to maintain position when navbar goes to position fixed
    <div
      className="hero"
      style={{
        marginTop: navActive ? "72px" : "0px",
      }}
    >
      <h1>Immersive experiences that deliver</h1>
    </div>
  )
}

export default Hero
