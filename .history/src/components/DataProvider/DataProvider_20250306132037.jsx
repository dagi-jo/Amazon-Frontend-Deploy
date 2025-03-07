import React,{createContext, useReducer} from "react";
import { initialState, reducer } from "../../Utility/reducer";

export const DataContext=createContext()
 export const DataProvider=({ch})=>{
    return(
        <DataContext.Provider value={useReducer(reducer,initialState)}>
        {Children}
        </DataContext.Provider>
    )
}