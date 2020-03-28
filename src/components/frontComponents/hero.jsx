import React, { Component } from 'react';
import './hero.styles.scss';
import RentBuy from './rent_buy';
import OtherInfo from './otherInfo';

export default class Hero extends Component {
    render() {
        return (
            <div className="hero-box">
                <div className="hero-img-box">
                    <div className="hero-title-box">
                        <h1 className="hero-title">Renting Done Right. Finally.</h1>
                    </div>
                </div>
                <div className="rent-buy-component">
                    <RentBuy />
                </div>
                <div className="other-info">
                   <OtherInfo/>
                </div>
                <div className="hero-bottom">

                </div>

            </div >
        )
    }
}
