import { Type } from "./action.type"

export const initialState={
    baske:[]
}



export const reducer=(state,action)=>{
switch(action.Type){
    case Type.ADD_TO_BASKET:
        return{
            ...state,
            baske:[...state.baske, action.item]
        }
        break;
        default:
            
}
}