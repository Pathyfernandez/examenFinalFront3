import React, { useContext } from 'react';
import { DentisState } from '../Context/Context';

const Navbar = () => {
const { state } = useContext(DentisState);

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