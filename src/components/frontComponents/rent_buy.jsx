import React, { Component } from 'react';
import './rent_buy.styles.scss';

 class Rent_buy extends Component {
    constructor(props) {
        super(props);
        this.state = { city: '' };
        this.handleCity = this.handleCity.bind(this);
    }
    handleCity(e) {
        this.setState({ city: e.target.value });
    }
    render() {
        return (
            <div className="rent-buy">
                <div className="rent-buy-box">
                    <div className="rent-box">Rent</div>
                    <div className="buy-box">Buy</div>
                </div>
                <div className="input-box">
                    <input
                        type="text"
                        name="city"
                        placeholder="Where do you want to live?"
                        value={this.state.city}
                        onChange={this.handleCity}
                    />
                </div>
            </div>
        )
    }
}


export default Rent_buy;