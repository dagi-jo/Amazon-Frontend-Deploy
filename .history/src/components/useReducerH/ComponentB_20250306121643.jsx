import React from 'react'
import { useColor } from './ContextProvider'
function ComponentB() {
const {color}=useColor
  return (
    <div>
      <h1>Component B</h1>
      

    </div>
  )
}

export default ComponentB
