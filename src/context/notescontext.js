import React,{createContext,useReducer} from 'react';
import { Text,View,StyleSheet} from "react-native"
import {reducers,initialstate} from "../reducers/NotesReducer"
export const Notescontext = createContext()

export const NotesProvider =({children})=>{



const [state,dispatch]  =  useReducer(reducers,initialstate)

    return(
        <Notescontext.Provider value={{state,dispatch}}>
            {children}
        </Notescontext.Provider>
    )
}


