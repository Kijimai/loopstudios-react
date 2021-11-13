import React, { useState, useContext, useEffect } from "react"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [navActive, setNavActive] = useState(false)
  const [viewWidth, setViewWidth] = useState(window.innerWidth)
  const [isMobile, setIsMobile] = useState(false)

  const setWindowWidth = () => {
    setViewWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", setWindowWidth)
    return () => window.removeEventListener("resize", setWindowWidth)
  })

  useEffect(() => {
    if (viewWidth < 768) {
      return setIsMobile(true)
    }
    setNavActive(false)
    return setIsMobile(false)
  }, [viewWidth])

  const handleNavBtn = () => {
    setNavActive(!navActive)
  }

  const closeNav = () => {
    setNavActive(false)
  }

  return (
    <AppContext.Provider
      value={{
        handleNavBtn,
        navActive,
        setNavActive,
        closeNav,
        isMobile,
        viewWidth,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
