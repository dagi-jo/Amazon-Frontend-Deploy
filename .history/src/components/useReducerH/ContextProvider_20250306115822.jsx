import { light } from "@mui/material/styles/createPalette"
import { useState, creatContext } from "react"

const ThemeProvider=()=>{
    const[color,setColor]=useState('light')
    
    const colorToggler=()=>{
        setColor((pre)=>pre==='light'?dark:light)
    }
    return(<colorContext.)
}