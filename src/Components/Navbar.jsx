import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../Contex/globalContext';
import { routes } from '../Utils/Routes';

const Navbar = () => {
const { state, dispatch } = useContext(AppContext);

const changeTheme = () => {
dispatch({ type: 'TOGGLE_THEME' });
};

return (
<nav className={state.theme === 'dark' ? 'dark-theme' : 'light-theme'}>
    <ul>
    <li>
        <Link to={routes.home}>Home</Link>
    </li>
    <li>
        <Link to={routes.contact}>Contacto</Link>
    </li>
    <li>
        <Link to={routes.favs}>Favoritos</Link>
    </li>
    </ul>
    <button onClick={changeTheme}>Cambiar Tema</button>
</nav>
);
};

export default Navbar;
