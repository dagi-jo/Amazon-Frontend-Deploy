import React,{Children, createContext, useReducer} from "react";
import { reducer } from "../../Utility/reducer";
exportconst DataContext=createContext()
const DataProvider=({Children})=>{
    return(
        <DataContext.Provider value-{useReducer(reducer,init)}
    )
}