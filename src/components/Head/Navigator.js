import React from "react"
import logo from "../../images/logo.svg"
import { data } from "../../data/data"
import navHamburger from "../../images/icon-hamburger.svg"
import navClose from "../../images/icon-close.svg"
import { useGlobalContext } from "../../utils/context"
const Navigator = () => {
  const { navActive, handleNavBtn, viewWidth, setNavActive } =
    useGlobalContext()

  // if (viewWidth > 768) {
  //   setNavActive(true)
  // }

  return (
    <nav className="navigator">
      <div className="main-navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <button>
          <img
            onClick={handleNavBtn}
            src={navActive ? navClose : navHamburger}
            alt="navigator button"
          />
        </button>
      </div>
      <div className="mobile-navbar"></div>
      <div className="desktop-navbar"></div>
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
