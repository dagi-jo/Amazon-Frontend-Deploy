import React from 'react'
import { useColor } from './ContextProvider'
import classes from './style.module.css'
function ComponentB() {
const {color}=useColor()
  return (
    <div className={classes.lig}>
      <h1>Component B</h1>
      <h1>color is{color}</h1>

    </div>
  )
}

export default ComponentB
