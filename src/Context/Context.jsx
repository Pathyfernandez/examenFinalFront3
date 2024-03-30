import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "../Reducers/reducer";
import axios from "axios";

const ContextStates = createContext();

const initialState = {
  list: [],
  detail: {},
  favs: JSON.parse(localStorage.getItem("favs")) || [],
  theme: "light",
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => dispatch({ type: "getList", payload: res.data }));
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  const toggleTheme = () => {
    dispatch({ type: "toggleTheme" });
  };

  return (
    <ContextStates.Provider value={{ state, dispatch, toggleTheme }}>
      {children}
    </ContextStates.Provider>
  );
};

export default Context;

export const useContextStates = () => useContext(ContextStates);
