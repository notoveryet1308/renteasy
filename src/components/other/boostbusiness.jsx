import React, { Component } from 'react';
import './boostbusiness.styles.scss';
import Signupelement from './signupelement';

class Boostbusiness extends Component {
    render() {
        const {heading , text} = this.props.person;
        return (
            <div className="boost-business-box">
                <div className="boost-business">
                    <h3>{heading}</h3>
                    <p>{text}</p>
                    <div className="signup-element-box">
                        <Signupelement />
                    </div>

                </div>

            </div>
        )
    }
}


export default Boostbusiness;