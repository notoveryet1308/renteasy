import React, { Component } from 'react';
import './signup_fb.styles.scss';

class Signup_fb extends Component {
    render() {
        const { text } = this.props;
        return (
            <div className='signup-fb'>
                <div className='fb-box'>
                    <div className='fb-icon'>
                        <i className="fab fa-facebook-square"></i>
                    </div>
                    <div className='fb-text'>
                        <span>{text}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup_fb;
