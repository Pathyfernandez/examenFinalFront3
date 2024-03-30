import React from "react";
import img_doctor from "../../public/images/doctor.jpg";
import { Link } from "react-router-dom";
import { useContextStates } from "../Context/Context";

const Card = ({ doctor }) => {
  const { dispatch } = useContextStates();
  return (
    <div className="card">
      <div className="cardImg">
        <img src={img_doctor} alt="" />
      </div>
      <Link to={"/detail/" + doctor.id}>
        <h3>{doctor.name}</h3>
      </Link>
      <h4> {doctor.username} </h4>
      <button
        onClick={() => dispatch({ type: "addFav", payload: doctor })}
        className="favButton"
      >
        ⭐
      </button>
    </div>
  );
};

export default Card;
