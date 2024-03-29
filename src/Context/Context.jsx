import { createContext, useContext, useReducer, useState } from "react";
import { reducer } from "../Reducers/reducer";

const ContextStates = createContext()

const initialState = {
    doctorList: [],
    favs: []
}

const Context = ({children}) =>{
    // const [favs, setFavs] = useState([])
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)

    return (
        <ContextStates.Provider value={{state, dispatch}}>
            {children}
        </ContextStates.Provider>
    )
}

export default Context

export const useContextStates = () => useContext(ContextStates)