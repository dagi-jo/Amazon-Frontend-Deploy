import React, { useState } from "react";

function useReducerH() {
    const (count,setCount) =useState(0);
    let Increase=()=>{
     setCount=(count+1)
       }
       let Decrease=()=>{
        setCount=(count-1)
          }

          let Increase=()=>{
            setCount=(count+1)
              }
  return (
    <div>
      
    </div>
  )
}

export default useReducerH
