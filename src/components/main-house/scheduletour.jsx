import React, { Component } from 'react'
import './scheduletour.styles.scss';

export default class ScheduleTour extends Component{
    
    render() {
        
        
        return (
            <div className='schedule-tour' >
                <div className='sch-tour-box'>
                    <div className='info'>
                        <i className="fas fa-home"></i>
                        <span>Tour</span>
                        <span className='bold'>Pick a date</span>
                    </div>
                    <div className='tour-btn'>
                        <span>Schedule Tour</span>
                    </div>
                </div>
            </div>
        )
    }
}
