import React from 'react'
import {useColor} from './ContextProvider'
function ComponentA() {
    const{colorToggler}=useColor()
  return (
    <div>
      <button onClick={co}>color</button>
    </div>
  )
}

export default ComponentA
