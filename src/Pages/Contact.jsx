import React, { useContext } from 'react';
import Form from '../Components/Form';
import { DentisState } from '../Context/GlobalContext';

const Contact = () => {
  const { state } = useContext(DentisState);

  return (
    <div className={state.theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <h2>Quiere saber más?</h2>
      <p>Envíanos tus preguntas y nos pondremos en contacto contigo</p>
      <Form />
    </div>
  );
};

export default Contact;
