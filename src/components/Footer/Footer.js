import React from "react"
import logo from "../../images/logo.svg"
import { data, linkIcons as socialIcons } from "../../data/data"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="inner-footer">
        <div className="footer-logo-links">
          <div className="logo">
            <img src={logo} alt="footer-logo" />
          </div>
          <ul className="footer-links">
            {data.map((link, index) => {
              return (
                <li key={index}>
                  <button>{link}</button>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="social-copyright">
          <ul className="social-links">
            {socialIcons.map((link, index) => {
              return (
                <li key={index}>
                  <button>
                    <img src={link} alt="..." />
                  </button>
                </li>
              )
            })}
          </ul>
          <p className="copyright">
            &copy; {currentYear} Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
