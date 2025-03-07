import { light } from "@mui/material/styles/createPalette"
import { useState, createContext, useContext } from "react"

const colorContext =createContext()
export const useColor =()=>{
 return useContext(colorContext)
}
export const ThemeProvider=({children})=>{
    const[color,setColor] = useState('light')
    
    const colorToggler=()=>{
        setColor((pre)=>pre==='light'? 'dark':'light')
    }
    return(
    <colorContext.Provider value={{color,colorToggler}}>
       {children}
   </colorContext.Provider>
    )
}