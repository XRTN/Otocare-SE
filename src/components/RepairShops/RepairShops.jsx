import React from "react";
import "./RepairShops.css";
import Navbar from "../../UniversalComponents/Navbar/Navbar";
import Card from "../../UniversalComponents/Card/Card";
import Footer from "../../UniversalComponents/Footer/Footer";

function RepairShops() {
  return (
    <>
      <Navbar />
      <div className="title-container">
        <div className="title-wrapper">
          <div className="title-left">
            <h1>REPAIR SHOPS</h1>
          </div>
          <div className="title-right"></div>
        </div>
      </div>
      <div className="cards-container">
        <div className="cards-wrapper">
          <div className="cards-1-container">
            <div className="card-1">
              <Card
                img="./gambarrepairshops/card-1.jpg"
                header="VAN REPAIR SHOPS"
                services1="OIL & FLUIDS"
                services2="WHEELS"
                services3="ELECTRICALS"
                rating="5.0"
              />
            </div>
            <div className="card-2">
              <Card
                img="./gambarrepairshops/card-2.jpg"
                header="JEMS AUTO REPAIR"
                services1="OIL & FLUIDS"
                services2="ELECTRICALS"
                rating="4.8"
              />
            </div>
            <div className="card-3">
              <Card
                img="./gambarrepairshops/card-3.jpg"
                header="DAN WHEELS"
                services1="WHEELS"
                rating="4.6"
              />
            </div>
          </div>
          <div className="cards-2-container">
            <div className="card-1">
              <Card
                img="./gambarrepairshops/card-1.jpg"
                header="VAN REPAIR SHOPS"
                services1="OIL & FLUIDS"
                services2="WHEELS"
                services3="ELECTRICALS"
                rating="5.0"
              />
            </div>
            <div className="card-2">
              <Card
                img="./gambarrepairshops/card-2.jpg"
                header="JEMS AUTO REPAIR"
                services1="OIL & FLUIDS"
                services2="ELECTRICALS"
                rating="4.8"
              />
            </div>
            <div className="card-3">
              <Card
                img="./gambarrepairshops/card-3.jpg"
                header="DAN WHEELS"
                services1="WHEELS"
                rating="4.6"
              />
            </div>
          </div>
          <div className="cards-3-container">
          <div className="card-1">
              <Card
                img="./gambarrepairshops/card-1.jpg"
                header="VAN REPAIR SHOPS"
                services1="OIL & FLUIDS"
                services2="WHEELS"
                services3="ELECTRICALS"
                rating="5.0"
              />
            </div>
            <div className="card-2">
              <Card
                img="./gambarrepairshops/card-2.jpg"
                header="JEMS AUTO REPAIR"
                services1="OIL & FLUIDS"
                services2="ELECTRICALS"
                rating="4.8"
              />
            </div>
            <div className="card-3">
              <Card
                img="./gambarrepairshops/card-3.jpg"
                header="DAN WHEELS"
                services1="WHEELS"
                rating="4.6"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default RepairShops;
