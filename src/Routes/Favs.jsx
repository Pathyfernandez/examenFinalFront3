import React from "react";
import Card from "../Components/Card";
import { useContextStates } from "../Context/Context";

const Favs = () => {
  const { state } = useContextStates();

  return (
    <div className={state.theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.map((favs) => (
          <Card key={favs.id} doctor={favs} />
        ))}
      </div>
    </div>
  );
};

export default Favs;
