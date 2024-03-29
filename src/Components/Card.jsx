import React from "react";
import img_doctor from '../../public/images/doctor.jpg';
import { Link } from 'react-router-dom'
import { useContextStates } from "../Context/Context";

const Card = ({ doctor }) => {
const {dispatch} = useContextStates()

const addFav = ()=>{
// Aqui iria la logica para agregar la Card en el localStorage
}


return (
<div className="card">
    
    <div className="cardImg">
    <img src={img_doctor} alt="" />
    </div>
    <Link to={'/detail/'+doctor.id} ><h3>{doctor.name}</h3></Link>
    <h4> {doctor.username} </h4>
    
    {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
    <button onClick={()=> dispatch({type: 'addFav', payload: doctor})} className="favButton">Add fav</button>
</div>
);
};

export default Card;
