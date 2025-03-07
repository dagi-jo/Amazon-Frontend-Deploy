import React,{createContext, useReducer} from "react";
import { initialState, reducer } from "../../Utility/reducer";

export const DataContext=createContext()
 export const DataProvider=({Children})=>{
    return(
        <DataContext.Provider value={useReducer(reducer,initialState)}>
        {ch}
        </DataContext.Provider>
    )
}