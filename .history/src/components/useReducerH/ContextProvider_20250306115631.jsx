import { useState } from "react"

const ThemeProvider=()=>{
    const[color,setColor]=useState('light')
    const colorToggler=()=>{
        setColor((pre)=>pre==='light'?dark)
    }
}