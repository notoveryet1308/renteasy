import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './otherInfo.styles.scss';

class OtherInfo extends Component {
    render() {
        return (
            <div className="other-info-box">
                <div className="other-info-text">
                    <p>Make Your property to millions.</p>
                </div>
                <div className="list-link-box">
                    <Link className="link" to="/add-a-property">List Your Rental</Link>
                </div>
            </div>
        )
    }
}

export default OtherInfo;