import React, { Component } from 'react';
import './address.styles.scss';

export default class Address extends Component {
    render() {
        return (
            <div className='address'>
                <p>{this.props.location}</p>
            </div>
        )
    }
}
