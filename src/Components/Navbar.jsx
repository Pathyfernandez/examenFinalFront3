import React from "react";
import { routes } from "./utils/routes";
import { Link } from "react-router-dom";
import { useContextStates } from "../Context/Context";

const Navbar = () => {
  const { toggleTheme, state } = useContextStates();
  const navbarClassName =
    state.theme === "dark" ? "navbar-dark" : "navbar-light";

  return (
    <nav className={navbarClassName}>
      <Link to={routes.home}>
        <h4>Home</h4>
      </Link>
      <Link to={routes.contact}>
        <h4>Contact</h4>
      </Link>
      <Link to={routes.favs}>
        <h4>Favs</h4>
      </Link>
      <button className="theme-button" onClick={toggleTheme}>
        {state.theme === "light" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
};

export default Navbar;
