import React from "react";
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {
    const addFav =() =>{
        const favoritos =  JSON.parse(localStorage.getItem("favorites")) || [];
        if(!favoritos.includes(id)){
            favoritos.push(id);
            localStorage.setItem('favorites',JSON.stringify(favoritos));

    }
};
return(
    <div className="card">
        <h3>{name}</h3>
        <p>username: {username}</p>
        <p>ID: {id}</p>
        <Link to={`/detail/${id}`} className="detailLink">Ver Detalle</Link>
        <button onClick={addFav} >Add to Favorites </button>
    </div>
)


};

export default Card;
