import React, { useState } from "react";

function useReducerH() {
    const {count, setCount} =useState(0);
    let Increase=()=>{
     setCount=(count+1)
       }
       let Decrease=()=>{
        setCount=(count-1)
          }

          let Reset=()=>{
            setCount=(0)
              }
  return (
    <>
      <hl>{count}</hl>
      <button onClick={()=>Increase()}>Increase</button>
      <button onClick={()=>Decrease()}>Decrease</button>
      <button onClick={()=>Reset()}>Reset</button>

    </>
  )
}

export default useReducerH
