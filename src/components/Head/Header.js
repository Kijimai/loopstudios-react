import React from "react"
import Navigator from "./Navigator"
import Hero from "./Hero"

const Header = () => {
  return (
    <header className="main-header">
      <div className="inner-main-header">
        <Navigator />
        <Hero />
      </div>
    </header>
  )
}

export default Header
