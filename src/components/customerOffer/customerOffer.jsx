import React, { Component } from 'react';
import './customerOffer.styles.scss';
import offer_2 from './../../images/custom-offer.png';
import offer_1 from './../../images/custom-offer3@2x.png';
import offer_3 from './../../images/custom-offer4@2x.png';


class CustomerOffer extends Component {
    render() {
        return (
            <div className="customer-offer">
                <h1>Customer Offer</h1>
                <div className="offer-img">
                    <div className="offer">
                        <div className="offer-small offer-1"
                            style={{ backgroundImage: `url(${offer_1})` }} />
                    </div>
                    <div className="offer">
                        <div className="offer-big offer-2"
                            style={{ backgroundImage: `url(${offer_2})` }} />
                    </div>
                    <div className="offer">
                        <div className="offer-small offer-3"
                            style={{ backgroundImage: `url(${offer_3})` }} />
                    </div>

                </div>
                
                <div className='offer-text'>
                    <p>Tired of secretive bids? Rentberry is the only platform that provides a transparent rental auction with the ability to submit custom offers. See the current highest proposal and the number of people who applied for the property, so you can make an informed decision.</p>
                </div>

            </div>
        )
    }
}

export default CustomerOffer;