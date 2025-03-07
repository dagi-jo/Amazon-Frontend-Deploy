import React, { useState } from "react";

function useReducerH() {
    const (count,setCount) =useState(0);
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
      <hl></hl>
    </>
  )
}

export default useReducerH
