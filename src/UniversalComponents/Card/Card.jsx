import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();

  const handleClick = (title) => {
    navigate(`/shopServices/${title}`);
  };

  return (
    <div className="card" onClick={() => handleClick(props.title)}>
      <div className="card-top">
        <img src={props.img} className="card-img" />
      </div>
      <div className="card-bottom">
        <h1 className="card-title">{props.title}</h1>
        <h2 className="card-subtitle"> {props.subtitle}</h2>
        <p className="card-services1">{props.services1}</p>
        <p className="card-services2">{props.services2}</p>
        <p className="card-services3">{props.services3}</p>
      </div>
      <div className="card-rating">
        <img src={props.star} className="rating-img" />
        <p className="rating-number">{props.rating}</p>
      </div>
    </div>
  );
}

export default Card;
