import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

// Definición del contexto
const DentisState = createContext();

// Estado inicial
const initialState = {
  cart: [],
  list: [],
  theme: "light", // Por defecto, el tema es "light"
};

// Reducer para gestionar las acciones
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

// Componente de contexto global
const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Carga de datos iniciales
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

// Función personalizada para acceder al contexto global
const useDentistStates = () => useContext(DentisState);

export { GlobalContextProvider, useDentistStates };
