import React, { useContext } from 'react';
import Form from './Form';
import { AppContext } from './AppContext';

const Contact = () => {
  const { state } = useContext(AppContext);

  return (
    <div className={state.theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
