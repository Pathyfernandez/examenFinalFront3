import React, { useContext } from 'react';
import { DentisState } from '../Context/Context';

const Footer = () => {
const { state } = useContext(DentisState);

return (
<footer className={state.theme === 'dark' ? 'dark-theme' : 'light-theme'}>
    <p>Powered by</p>
    <img src="images/DH.png" alt="DH-logo" />
</footer>
);
};

export default Footer;
