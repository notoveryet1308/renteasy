import React, { Component } from 'react';
import './housecontainer.styles.scss';
import HouseCard from '../houseCard/house';
import {DemoHouse} from './../../../helpers/demoHouseData';

export default class Housecontainer extends Component {
    render() {
        return (
            <div className='house-container'>
                <p className='rent-ava-text'>Rent available near you...</p>
                <div className='house-box'>
                    <div className='houses'>
                        {DemoHouse.map(house=> <HouseCard key={house._id} {...house} {...this.props} className='housecard'/>)}
                    </div>
                </div>
            </div>
        )
    } 
}
