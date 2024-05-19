import React from 'react'
import "../Payment/PaymentPage.css";
import Navbar from '../../UniversalComponents/Navbar/Navbar';
import RepairShopBanner from './RepairShopBanner';
import PaymentHeader from './PaymentHeader';
import PaymentDetails from './PaymentDetails';
import Footer from '../../UniversalComponents/Footer/Footer';

function PaymentPage() {
  return (
    <>
       <div>
       <Navbar/>
        </div>
        <RepairShopBanner/>
        <PaymentHeader/>
        <PaymentDetails/>
        <Footer/>
    </>
  )
}

export default PaymentPage
