import React from 'react'
import "../Confirmation/ConfirmationHeader.css";
import { Button } from '../../UniversalComponents/Button/Button';

function ConfirmationHeader() {
  return (
    <div className="ConfirmationHeader-container">
        <div className="ConfirmationHeader-wrapper">
            <div className='Back-btns'>
                <Button
                    linkTo="/Payment"
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                >
                <img src="BackArrow.png"/>
                </Button>
            </div>
        </div>
    </div>
  )
}

export default ConfirmationHeader
