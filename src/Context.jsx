import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";



const DentisState = createContext()

const initialState = {
    cart:  [],
    list:  [],

}

const Context = ({children}) => {
    const [state, dispatch] = useReducer(reducer,initialState)
    console.log( state);

    useEffect( ()=>{
        axios('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res)
            dispatch({type:'GET_LIST', payload : res.data})
            })



}, [])

return(
    <DentisState.Provider value={{state ,dispatch}}>
        {children}
    </DentisState.Provider>
)
}

export default Context;

export const userDentistStates = () => useContext(DentisState)