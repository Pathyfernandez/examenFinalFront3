import React, { useContext } from 'react';
import { AppContext } from '../Contex/globalContext';

const Footer = () => {
const { state } = useContext(AppContext);

return (
<footer className={state.theme === 'dark' ? 'dark-theme' : 'light-theme'}>
    <p>Powered by</p>
    <img src="images/DH.png" alt="DH-logo" />
</footer>
);
};

export default Footer;
