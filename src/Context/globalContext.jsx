// Context/globalContext.jsx
import React, { createContext, useReducer } from 'react';

// Estado inicial del contexto
const initialState = {
  theme: 'light',
  dentists: [],
  favorites: [],
};

// Reducer que define cómo se actualiza el estado en función de las acciones
const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      // Cambia el tema de la aplicación entre claro y oscuro
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'SET_DENTISTS':
      // Establece la lista de dentistas con los datos proporcionados
      return { ...state, dentists: action.payload };
    case 'ADD_FAVORITE':
      // Agrega un dentista a la lista de favoritos
      return { ...state, favorites: [...state.favorites, action.payload] };
    default:
      return state;
  }
};

// Creación del contexto de la aplicación
export const AppContext = createContext();

// Proveedor de contexto que envuelve toda la aplicación
export const AppProvider = ({ children }) => {
  // Utiliza el reducer y el estado inicial para crear el estado global
  const [state, dispatch] = useReducer(reducer, initialState);

  // Renderiza los componentes hijos con el contexto proporcionado
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

