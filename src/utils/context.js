import React, { useState, useContext, useEffect } from "react"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [navActive, setNavActive] = useState(false)
  const [viewWidth, setViewWidth] = useState(window.innerWidth)

  const setWindowWidth = () => {
    setViewWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", setWindowWidth)
    return () => window.removeEventListener("resize", setWindowWidth)
  })

  const handleNavBtn = () => {
    setNavActive(!navActive)
  }

  return (
    <AppContext.Provider value={{ handleNavBtn, navActive, viewWidth }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
