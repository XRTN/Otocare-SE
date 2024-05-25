import React from 'react'
import "../Confirmation/ConfirmationDetails.css";
import "../Payment/PaymentDetails.css";
import { Button } from '../../UniversalComponents/Button/Button';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 10,
            width: '100%'
        }}
    />
  );

function ConfirmationDetails() {
  return (
    <div className='ConfirmationDetails-container'>
        <div className='ConfirmationDetails-wrapper'>
            <div className='ConfirmationDetails-margin'>
                <div className='ConfirmationDetails-wrapper-top'>
                    <img src="Confirmed.png" />
                    <h1>PAYMENT CONFIRMED</h1>
                </div>
                <div className='PaymentDetails-wrapper-middle'>
                    <div className='ServicePayment'>
                        <p>STANDARD OIL CHANGE</p>
                        <p>Rp 500.000</p>
                    </div>
                <div className='MobileServiceCharge'>
                        <p>MOBILE SERVICE CHARGE</p>
                        <p>RP 10.000</p>
                </div>
                <ColoredLine color="black"/>
                    <div className='Subtotal'>
                        <p>SUBTOTAL</p>
                        <p>RP 510.000</p>
                    </div>
                </div>
                <div className='ConfirmationDetails-wrapper-middle'>
                    <h1>THANK YOU FOR USING OUR SERVICE PLEASE CONTACT OUR MECHANICS FOR MORE INFORMATION ABOUT YOUR ORDER</h1>
                </div>
                <div className='ConfirmationDetails-wrapper-bottom'>
                    <div className='Contact-btns'>
                        <Button
                            linkTo="/RepairShops"
                            className="btns"
                            buttonStyle="btn--primary"
                            buttonSize="btn--large"
                        >
                        CONTACT OUR MERCHANT
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ConfirmationDetails
