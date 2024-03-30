import React from "react";
import Form from "../Components/Form";
import { useContextStates } from "../Context/Context";

const Contact = () => {
  const { state } = useContextStates();
  return (
    <div className={state.theme}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
