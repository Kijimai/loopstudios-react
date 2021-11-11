import React, { useState, useContext } from "react"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [navActive, setNavActive] = useState(false)
  const [viewport, setViewport] = useState('')

  

  const handleNavBtn = () => {
    setNavActive(!navActive)
  }

  return (
    <AppContext.Provider value={{ handleNavBtn, navActive }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
