import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./workshop-home.css";
import Navbar from "../../UniversalComponents/Navbar/Navbar";
import Footer from "../../UniversalComponents/Footer/Footer";
import EmbeddedMap from "../../UniversalComponents/EmbeddedMap/EmbeddedMap";
import { Button } from "../../UniversalComponents/Button/Button";
function workshopHome(){
    return (
        <>
          <Navbar />
            <div className="homeContainer">
                <div className="titleContainer">

                <h1 className="workshopHome-header">
                Hi, Dan's workshop !
                </h1>
                <h1 className="workshopHome-header">
                Welcome back to your dashboard
                </h1>
                </div>

                <div className="mapContainer">
                <h1 className="workshopHome-header">Emergency Order</h1>
                <EmbeddedMap/>
                <Link  className="getOrder-btn" >
          Get Order
        </Link>
                </div>
                <div className="dashboardContainer">
                    <div className="dashboard-top">

                    <h1 className="workshopHome-header">
                        Total Orders This Month 
                    </h1>
                    <p className="workshopHome-text">
                        120 Orders
                    </p>
                    </div>
                    <div className="dashboard-bot">
                        <h1 className="workshopHome-header">
                            Total Revenue This Month 
                        </h1>
                        <p className="workshopHome-text">
                            $1200
                        </p>
                    <Link  className="viewOrder-btn" >
          View Orders
        </Link>
                    </div>
                </div>
                <div className="manualOrder">
                    <h1 className="workshopHome-header">
                        Add Manual Order
                    </h1>
                    <Link  className="manualOrder-btn" >
          Add Order
        </Link>
                </div>
            </div>
            
          <Footer />
        </>
      );
}


export default workshopHome;