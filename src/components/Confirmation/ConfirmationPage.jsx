import React from 'react'
import "../Confirmation/ConfirmationPage";
import Navbar from '../../UniversalComponents/Navbar/Navbar';
import Footer from '../../UniversalComponents/Footer/Footer';
import ConfirmationHeader from './ConfirmationHeader';
import ConfirmationDetails from './ConfirmationDetails';

function ConfirmationPage() {
  return (
    <>
        <div>
        <Navbar/>
        </div>
        <ConfirmationHeader/>
        <ConfirmationDetails/>
        <Footer/>
    </>
  )
}

export default ConfirmationPage
