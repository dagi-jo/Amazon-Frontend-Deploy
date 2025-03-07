import { light } from "@mui/material/styles/createPalette"
import { useState, createContext } from "react"

export const ThemeProvider=()=>{
    const[color,setColor]=useState('light')
    
    const colorToggler=()=>{
        setColor((pre)=>pre==='light'?dark:light)
    }
    return(
    <colcolorContext.Provider value={{color,colorToggler}}>
   </colcolorContext.Provider/>
    )
}