import React from "react"
import logo from "../../images/logo.svg"
import { data } from "../../data/data"
import navHamburger from "../../images/icon-hamburger.svg"
import navClose from "../../images/icon-close.svg"
import { useGlobalContext } from "../../utils/context"
const Navigator = () => {
  const { navActive, handleNavBtn } = useGlobalContext()

  return (
    <nav className="navigator">
      <div className="nav-logo">
        <img src={logo} alt="site logo" />
      </div>
      <button onClick={handleNavBtn} className="navBtn">
        <img src={navActive ? navClose : navHamburger} alt="hamburger button" />
      </button>
      <div className={`nav-items-container ${navActive && "active"}`}>
        <ul className="nav-items">
          {data.map((link, index) => {
            return (
              <li key={index}>
                <button className="navItems-btn">{link}</button>
              </li>
            )
          })}
          <button onClick={handleNavBtn} className="navBtn">
            <img
              src={navActive ? navClose : navHamburger}
              alt="hamburger button"
            />
          </button>
        </ul>
      </div>
    </nav>
  )
}

export default Navigator
