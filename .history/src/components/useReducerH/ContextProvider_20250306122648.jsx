//import { light } from "@mui/material/styles/createPalette"
import React, { useState, createContext, useContext } from "react"

const colorContext =createContext()

export const useColor =()=>{
 return useContext(colorContext)
}
// ThemeProvider component to wrap your app
export const ThemeProvider=({children})=>{
    const[color, setColor] = useState("light")
    
    // Toggles between light and dark modes
    const colorToggler=()=>{
        setColor((pre)=>pre==="light" ? "dark":"light")
    }
    return(
    <colorContext.Provider value={{color,colorToggler}}>
       {children}
   </colorContext.Provider>
    )
}