import React from 'react'
import {useColor} from './ContextProvider'
function ComponentA() {
    const{colorToggler}=useColor()
  return (
    <div>

<h1>component a</h1>
      <button onClick={colorToggler}>color {colorToggler</button>
    </div>
  )
}

export default ComponentA
