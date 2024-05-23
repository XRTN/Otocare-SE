import React from 'react';
import Navbar from '../../UniversalComponents/Navbar/Navbar';
import Footer from '../../UniversalComponents/Footer/Footer.jsx';
import './ShopServices.css';
import ServiceBox from './ServiceBox';
import RepairShopBanner from '../Payment/RepairShopBanner.jsx';

function ShopServices() {
  return (
    <div>
      <Navbar />
      <RepairShopBanner />
      <h2 className="services-heading">SERVICES</h2>
      <div className="shop-services-container">
        <ServiceBox
          serviceName="OIL CHANGE"
          imageUrl="/gambarservices/OilService.jpg"
          priceStandard="Rp500.000"
          pricePremium="Rp1.100.000"
        />
        <ServiceBox
          serviceName="TIRE REPLACE"
          imageUrl="/gambarservices/TireService.jpg"
          priceStandard="Rp700.000"
          pricePremium="Rp1.500.000"
        />
        <ServiceBox
          serviceName="BATTERY CHANGE"
          imageUrl="/gambarservices/BatteryService.jpg"
          priceStandard="Rp300.000"
          pricePremium="Rp800.000"
        />
      </div>
      <Footer />
    </div>
  );
}

export default ShopServices;
