import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    error: "",
    successMessage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.fullName.length <= 5 || !formData.email.includes("@")) {
      setFormData({
        ...formData,
        error: "Por favor verifique su información nuevamente",
        successMessage: "",
      });
      return;
    }

    setFormData({
      fullName: "",
      email: "",
      error: "",
      successMessage: `Gracias ${formData.fullName}, te contactaremos cuanto antes vía email`,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Nombre Completo"
        />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />

        {formData.error && <p>{formData.error}</p>}
        {formData.successMessage && <p>{formData.successMessage}</p>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
