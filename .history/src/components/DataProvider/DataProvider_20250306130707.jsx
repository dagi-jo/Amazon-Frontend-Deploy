import React,{Children, createContext, useReducer} from "react";
import { initialState, reducer } from "../../Utility/reducer";
export const DataContext=createContext()
const DataProvider=({Children})=>{
    return(
        <DataContext.Provider value={useReducer(reducer,initialState)}>
        {Children}
        </DataContext.Provider>
    )
}