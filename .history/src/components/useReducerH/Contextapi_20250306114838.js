// import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer } from "react";
//import  LayOut from '../LayOut/LayOut'
function Contextapi() {
  let initialState=0;
const {state, dispatch} = useReducer(reducer,initialState, init);

function init(){
  return {count:0}
}

//*Reducer function
    function reducer(state, action){
        switch(action.type){
            case 'Increase':
            return { count: state.count+1};
            case 'Decrease':
            return { count: state.count-1}
            case'Reset':
            return init(action.payload);
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
