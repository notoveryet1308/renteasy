import React, { Component } from 'react';
import './city.styles.scss';

class City extends Component {
    render() {
        let gradientColor = 'linear-gradient(315deg, #36096d77 0%, #37d6d66c 74%)';
        return (
            <div className='city-box'>
                <div className='city' style={{
                    backgroundImage: `
                   ${gradientColor}, url(${this.props.img})`
                }}>
                
                    <h3>{this.props.name}</h3>
                    <p>See all the apartments</p>
                </div>
            </div>
        )
    }
}

export default City;

