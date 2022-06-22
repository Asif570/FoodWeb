import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="img">
        <img src={props.img} alt="" />
      </div>
      <div className="text">
        <h2>{props.tittle}</h2>
        <p>{props.dis}</p>
      </div>
    </div>
  );
}

export default Card;
