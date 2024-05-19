import React from 'react'
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

function PaymentDetails() {
  return (
    <div className='PaymentDetails-container'>
      <div className='PaymentDetails-wrapper'>
        <div className='PaymentDetails-margin'>
          <div className='PaymentDetails-wrapper-top'>
            <div className='standard-btns'>
              <Button
                linkTo="/RepairShops"
                className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large"
              >
                STANDARD
              </Button>
            </div>
            <div className='premium-btns'>
              <Button
                linkTo="/RepairShops"
                className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large"
              >
                PREMIUM
              </Button>
            </div>
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
          <div className='PaymentMethod'><h1>PAYMENT METHOD</h1></div>
          <div className='PaymentDetails-wrapper-bottom'>
            <div className='PayAtMerchant-btns'>
              <Button
                linkTo="/RepairShops"
                className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large"
              >
                <div className='Merchant'>
                  <p>PAY AT MERCHANT</p>
                  <img src="/Merchant.png" alt="Merchant" />
                </div>
              </Button>
            </div>
          </div>
          <div className='order-btns'>
              <Button
                linkTo="/RepairShops"
                className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large"
              >
                ORDER NOW
              </Button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentDetails

