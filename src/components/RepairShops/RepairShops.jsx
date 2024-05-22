import React from "react";
import "./RepairShops.css";
import Navbar from "../../UniversalComponents/Navbar/Navbar";

import Footer from "../../UniversalComponents/Footer/Footer";
import CardContainer from "../../UniversalComponents/Card/CardContainer";


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
              <CardContainer
                docId="apGRzADWcsGEtZTM6qiZ"
              />
            </div>
            <div className="card-2">
              <CardContainer
              docId="ZTBGac86Vqh2JRmJ72rp"
              />
            </div>
           <div className="card-3">
              <CardContainer
               docId="tZhm1c8G1l16UfX5Iw5D"
              />
            </div>
          </div>
          <div className="cards-2-container">
            <div className="card-4">
              <CardContainer
                docId="BKLdeZGMKXoPTxoKznLy"
              />
            </div>
            <div className="card-5">
              <CardContainer
               docId="qMtlz0Rtd0yRi62Kg6fO"
              />
            </div>
            <div className="card-6">
              <CardContainer
                docId="cltsPHQL3H6KC04YzYPF"
              />
            </div>
          </div>
          <div className="cards-3-container">
          <div className="card-7">
              <CardContainer
               docId="tyE1qHewpSre1nT5FDmR"
              />
            </div>
            <div className="card-8">
              <CardContainer
               docId="LH2ctGzwKGtBu34tTeb8"
              />
            </div> 
             <div className="card-9">
              <CardContainer
                docId="4q5uicUfLV07IYDWjsdm"
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
