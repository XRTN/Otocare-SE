import React from "react";
import "../Payment/RepairShopBanner.css";

function RepairShopBanner() {
  return (
    <>
      <div className="rsb-container">
        <div className="rsb-wrapper">
          <div className="rsb-wrapper-top">
            <h1>VAN REPAIR SHOP</h1>
            <p>
              08.00 - 22.00 | 0.5 KM{" "}
            </p>
            <div className="rsb-rating"><img src="/Star.png" className="rsb-star" /> 5.0 / 49 REVIEWS</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RepairShopBanner;
