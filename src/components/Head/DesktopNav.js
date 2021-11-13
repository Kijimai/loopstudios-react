import React from "react"
import { data } from "../../data/data"
import { useGlobalContext } from "../../utils/context"

const DesktopNav = () => {
  const { closeNav } = useGlobalContext()
  
  return (
    <ul className="desktopNav">
      {data.map((navLink, index) => {
        return (
          <li key={index}>
            <button className="navLink" onClick={closeNav}>
              {navLink}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default DesktopNav
