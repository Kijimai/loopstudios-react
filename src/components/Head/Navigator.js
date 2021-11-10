import React from "react"
import logo from "../../images/logo.svg"
import { data } from "../../data/data"
import navHamburger from "../../images/icon-hamburger.svg"
import navClose from "../../images/icon-close.svg"

const Navigator = () => {
  return (
    <nav>
      <div className="nav-logo">
        <img src={logo} alt="site logo" />
      </div>
      <button className="navHamburger">
        <img src={navHamburger} alt="hamburger button" />
      </button>
    </nav>
  )
}

export default Navigator
