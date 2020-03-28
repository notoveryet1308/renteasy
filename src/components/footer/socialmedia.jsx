import React, { Component } from 'react';
import './socialmedia.styles.scss';

class Socialmedia extends Component {
    render() {
        return (
            <div className='social-media'>
                <div className='media-link-box'>
                    
                    <i className="icon fab fa-facebook-f"></i>
                </div>
                <div className='media-link-box'>
                    <i className="icon fab fa-twitter"></i>
                </div>
                <div className='media-link-box'>
                    <i className="icon fab fa-instagram"></i>
                </div>


            </div>
        )
    }
}

export default Socialmedia;