import React,{Children, createContext, useReducer} from "react";
exportconst DataContext=createContext()
const DataProvider=({Children})=>{
    return(
        <DataContext.Provider value-{useReducer()}
    )
}