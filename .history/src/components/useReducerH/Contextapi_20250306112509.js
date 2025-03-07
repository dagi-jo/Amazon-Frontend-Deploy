// import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useReducer } from "react";
//import  LayOut from '../LayOut/LayOut'
let initialState
function Contextapi() {
    const [count, setCount] =useState(0);
    // const {state, dispatch} = useReducer(reducer,initialState, init);
//*Reducer function
    let reducer=(state, action)=>{
        switch(action.type){
            case 'Increase':
            return { count: state.count+1};
            case 'Decrease':
            return { count: state.count-1}
            case'Reset':
            return { count: 0};
            default:
            return state;
        }
    };
    const [state, dispatch] = useReducer(reducer,{ count: 0});
    // <LayOut>

    return (
    <>
      <hl>{state.count}</hl>
      <button onClick={()=>dispatch({type: 'Increase'})}>Increase</button>
      <button onClick={()=>dispatch({type: 'Decrease'})}>Decrease</button>
      <button onClick={()=>dispatch({type:'Reset'})}>Reset</button>

    </>
  )
//   <LayOut>

}

export default Contextapi
