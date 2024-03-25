import React, { useContext } from "react";
import { AppContext } from '../Context/globalContext';
import Card from "../Components/Card";

const Favs = () => {
  const { state } = useContext(AppContext);
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  return (
    <div className={state.theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {favorites.length > 0 ? (
          favorites.map(id => (
            <Card
              key={id}
              id={id}
              name="Nombre"
              username="Usuario"
            />
          ))
        ) : (
          <p>No hay dentistas favoritos aún.</p>
        )}
      </div>
    </div>
  );
};

export default Favs;

