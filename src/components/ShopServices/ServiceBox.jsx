import React from "react";
import "./ServiceBox.css";

function ServiceBox(props) {
  return (
    <div className="serv-card">
      <div className="serv-card-top">
        <img src={props.imageUrl} className="serv-card-img" alt={props.serviceName} />
      </div>
      <div className="serv-card-bottom">
        <h1 className="serv-card-title">{props.serviceName}</h1>
        <h2>PRICE</h2>
        <p className="serv-card-services1">Standard: {props.priceStandard}</p>
        <p className="serv-card-services2">Premium: {props.pricePremium}</p>
      </div>
    </div>
  );
}

export default ServiceBox;
