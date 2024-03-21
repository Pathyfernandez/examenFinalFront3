import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {

const addFav = () => {
// Lógica para agregar la Card en el localStorage
const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
if (!favorites.includes(id)) {
    favorites.push(id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}
};

return (
<div className="card">
    <h2>Name: {name}</h2>
    <p>Username: {username}</p>
    <p>ID: {id}</p>
    <Link to={`/dentista/${id}`} className="detailLink">Ver Detalle</Link>
    <button onClick={addFav} className="favButton">Add fav</button>
</div>
);
};

export default Card;
