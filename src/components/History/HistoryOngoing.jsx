import React from 'react'
import "../History/HistoryOngoing.css";
import { Button } from '../../UniversalComponents/Button/Button';

function HistoryOngoing() {
  return (
    <div className='HistoryOngoing-container'>
        <div className='HistoryOngoing-wrapper'>
            <div className='HistoryOngoing-margin'>
                <div className='HistoryOngoing-wrapper-top'>
                    <div className='Title'><h1>YOUR ORDERS</h1></div>
                    <div className='HistoryOngoing-wrapper-top-margin'>
                        <div className='ongoing-btns'>
                            <Button
                                linkTo="/RepairShops"
                                className="btns"
                                buttonStyle="btn--primary"
                                buttonSize="btn--medium"
                            >
                            ONGOING
                            </Button>
                        </div>
                        <div className='completed-btns'>
                            <Button
                                linkTo="/RepairShops"
                                className="btns"
                                buttonStyle="btn--primary"
                                buttonSize="btn--medium"
                            >
                            COMPLETED
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='HistoryOngoing-wrapper-middle'>
                    <div className='HistoryCard-container'>
                        <div className='HistoryCard-wrapper'>
                            <div className='OrderDetails'>
                                <div className='OrderDetails-wrapper-top'>
                                    <h1>OIL CHANGE | VAN REPAIR SHOP</h1>
                                    <div className='StatusText'>
                                        <p>STATUS : PAYMENT CONFIRMED</p>
                                    </div>
                                </div>
                                <div className='OrderDetails-wrapper-bottom'>
                                    <div className='price'><p>RP 510.000</p></div>
                                    <div className='message-btns'>
                                        <Button
                                            linkTo="/RepairShops"
                                            className="btns"
                                            buttonStyle="btn--primary"
                                            buttonSize="btn--medium"
                                        >
                                        MESSAGE MECHANIC
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <img src="OilChange.jpg"/>
                        </div>
                    </div>
                    <div className='HistoryCard-container'>
                        <div className='HistoryCard-wrapper'>
                            <div className='OrderDetails'>
                                <div className='OrderDetails-wrapper-top'>
                                    <h1>TIRE REPLACE | JEMS AUTO REPAIR</h1>
                                    <div className='StatusText'>
                                        <p>STATUS : AWAITING PAYMENT</p>
                                    </div>
                                </div>
                                <div className='OrderDetails-wrapper-bottom'>
                                    <div className='price'><p>RP 850.000</p></div>
                                    <div className='message-btns'>
                                        <Button
                                            linkTo="/RepairShops"
                                            className="btns"
                                            buttonStyle="btn--primary"
                                            buttonSize="btn--medium"
                                        >
                                        MESSAGE MECHANIC
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <img src="OilChange.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HistoryOngoing
