import React from 'react'
import {useColor} from './ContextProvider'
function ComponentA() {
    const{colorToggler}=useColor()
  return (
    <div>
      <button onclicl>color</button>
    </div>
  )
}

export default ComponentA
