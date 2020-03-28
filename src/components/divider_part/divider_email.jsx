import React, { Component } from 'react';
import './divider_email.styles.scss';

class Divider_email extends Component {
    render() {
        return (
            <div className='divider-email'>
                <div className='divider-part'>
                    <div className='part part-1'/>
                    <div className=' part-2'>or email</div>
                    <div className='part part-3'/>           
                </div>
            </div>
        )
    }
}

export default  Divider_email;