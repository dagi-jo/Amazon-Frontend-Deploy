// import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useReducer } from "react";
//import  LayOut from '../LayOut/LayOut'
function Contextapi() {
const {state, dispatch} = useReducer(reducer,initialState, init);
let initialState=0;

function init(a){
  return {count:a}
}

//*Reducer function
    let reducer=(state, action)=>{
        switch(action.type){
            case 'Increase':
            return { count: state.count+1};
            case 'Decrease':
            return { count: state.count-1}
            case'Reset':
            return init(action.payload};
            default:
            return state;
        }
    };
    // const [state, dispatch] = useReducer(reducer,{ count: 0});
    // <LayOut>

    return (
    <>
      <hl>Count: {state.count}</hl>
      <button onClick={()=>dispatch({type: 'Increase'})}>Increase</button>
      <button onClick={()=>dispatch({type: 'Decrease'})}>Decrease</button>
      <button onClick={()=>dispatch({type:'Reset', payload:initialState})}>Reset</button>

    </>
  )
//   <LayOut>

}

export default Contextapi
