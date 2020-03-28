import React, { Component } from 'react';
import BrandList from './../../helpers/brandList';
import Brand from './brand';
import './brandContainer.styles.scss';

export default class BrandContainer extends Component {
    render() {
        return (
            <div className="brand-container">
                <div className="brands">
                    {BrandList.map((brand, index) => <Brand key={index} img={brand.img}/>)}
                </div>

            </div>
        )
    }
}
