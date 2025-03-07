import { Type } from "./action.type"

// export const initialState={
//     baske:[]
// }



// export const reducer=(state,action)=>{
// switch(action.Type){
//     case Type.ADD_TO_BASKET:
//         return{
//             ...state,
//             baske:[...state.baske, action.item]
//         }
   
//         default:
//             return state
// }
// }

// reducer.js
export const initialState = {
    basket: [],
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      default:
        return state;
    }
  };
  