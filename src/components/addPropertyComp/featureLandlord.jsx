import React, { Component } from 'react';
import './featureLandlord.styles.scss';

class FeatureLandlord extends Component {
    render() {
        const { imgSrc, heading, subtext } = this.props;
        return (
            <div className='feature-landlord'>
                <div className="feature-box">
                    <img src={imgSrc} alt={imgSrc} />
                    <h2>{heading}</h2>
                    <p>{subtext}</p>
                </div>
            </div>
        )
    }
}
export default FeatureLandlord;