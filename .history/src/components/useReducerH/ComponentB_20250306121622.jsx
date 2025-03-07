import React from 'react'
import { useColor } from './ContextProvider'
function ComponentB() {
const {color}=useColor
  return (
    <div>
      <h1>ComponentB</h1>
    </div>
  )
}

export default ComponentB
