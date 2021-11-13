import React from "react"
import logo from "../../images/logo.svg"
import { data } from "../../data/data"
import navHamburger from "../../images/icon-hamburger.svg"
import navClose from "../../images/icon-close.svg"
import { useGlobalContext } from "../../utils/context"
import DesktopNav from "./DesktopNav"

const Navigator = () => {
  const {
    navActive,
    handleNavBtn,
    viewWidth,
    setNavActive,
    closeNav,
    isMobile,
  } = useGlobalContext()

  return (
    <nav className={`navigator ${navActive && "active"}`}>
      <div className={`inner-navigator ${navActive && "active"}`}>
        <div className="logo-container">
          <img src={logo} alt="brand logo" className="logo" />
        </div>
        {isMobile ? (
          <button className="navBtn" onClick={handleNavBtn}>
            <img
              src={navActive ? navClose : navHamburger}
              alt="navigator button"
            />
          </button>
        ) : (
          <DesktopNav />
        )}
      </div>
      <ul className={`mobileNav ${navActive && "active"}`}>
        {data.map((navLink, index) => {
          return (
            <li key={index}>
              <button onClick={closeNav} className="navLink">
                {navLink}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigator
// <nav className={`navigator ${navActive && "active"}`}>
//   <div className="inner-nav">
//     <div className="nav-logo">
//       <img src={logo} alt="site logo" />
//     </div>
//     <button onClick={handleNavBtn} className="navBtn">
//       <img
//         src={navActive ? navClose : navHamburger}
//         alt="navigator button"
//       />
//     </button>
//     <div
//       className={`nav-items-container navDesktop ${navActive && "active"}`}
//     >
//       <ul className="nav-items">
//         {data.map((link, index) => {
//           return (
//             <li key={index}>
//               <button className="navItems-btn">{link}</button>
//             </li>
//           )
//         })}
//       </ul>
//     </div>
//   </div>
//   <div className={`nav-items-container navMobile ${navActive && "active"}`}>
//     <ul className="nav-items">
//       {data.map((link, index) => {
//         return (
//           <li key={index}>
//             <button className="navItems-btn">{link}</button>
//           </li>
//         )
//       })}
//     </ul>
//   </div>
// </nav>
