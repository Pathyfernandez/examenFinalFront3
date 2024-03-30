import React from "react";
import Form from "../Components/Form";
import { useContextStates } from "../Context/Context";

const Contact = () => {
  const { state } = useContextStates();
  return (
    <div className={state.theme}>
      <h2>¿Quieres saber mas?</h2>
      <p>¡Envia tus preguntas y te contactaremos!</p>
      <Form />
    </div>
  );
};

export default Contact;
