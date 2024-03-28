import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

const DentisState = createContext();

const initialState = {
  cart: [],
  list: [],
  theme: "light", // Por defecto, el tema es "light"
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_LIST':
      return {
        ...state,
        list: action.payload,
      };
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light", // Cambia entre "light" y "dark"
      };
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        dispatch({ type: 'GET_LIST', payload: res.data });
      });
  }, []);

  return (
    <DentisState.Provider value={{ state, dispatch }}>
      {children}
    </DentisState.Provider>
  );
};

const useDentistStates = () => useContext(DentisState);

export { ContextProvider, useDentistStates, DentisState };

