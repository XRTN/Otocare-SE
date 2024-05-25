import React from 'react'
import "../History/HistoryPage.css";
import Navbar from '../../UniversalComponents/Navbar/Navbar';
import ConfirmationHeader from '../Confirmation/ConfirmationHeader';
import Footer from '../../UniversalComponents/Footer/Footer';
import HistoryOngoing from './HistoryOngoing';

function HistoryPage() {
  return (
    <>
       <div>
       <Navbar/>
        </div>
        <ConfirmationHeader/>
        <HistoryOngoing/>
        <Footer/>
    </>
  )
}

export default HistoryPage
