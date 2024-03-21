import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
const { state, dispatch } = useContext(AppContext);

const changeTheme = () => {
dispatch({ type: 'TOGGLE_THEME' });
};

return (
<nav className={state.theme === 'dark' ? 'dark-theme' : 'light-theme'}>
    <ul>
    <li>
        <Link to="/">Home</Link>
    </li>
    <li>
        <Link to="/contacto">Contacto</Link>
    </li>
    <li>
        <Link to="/favs">Favoritos</Link>
    </li>
    </ul>
    <button onClick={changeTheme}>Cambiar Tema</button>
</nav>
);
};

export default Navbar;
