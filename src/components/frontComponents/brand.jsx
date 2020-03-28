import React, { Component } from 'react';
import './brand.styles.scss';
 class Brand extends Component {
    render() {
        return (
            <div className="brand-box">
                <div className="brand">
                    <img src={this.props.img} alt={this.props.img}/>
                </div>               
            </div>
        )
    }
}

export default Brand;
