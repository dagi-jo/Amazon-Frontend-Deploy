import { light } from "@mui/material/styles/createPalette"
import { useState, createContext } from "react"

expoconst ThemeProvider=()=>{
    const[color,setColor]=useState('light')
    
    const colorToggler=()=>{
        setColor((pre)=>pre==='light'?dark:light)
    }
    return(
    <colorContext.Provider value={{color,colorToggler}}/>
  <colorContext.Provider/>
    )
}