import React, { Component } from 'react';
import './submit_btn.styles.scss';

class Submit_btn extends Component {
    render() {
        const { text } = this.props;
        return (
            <div className='submit-btn'>
                <div className='submit-btn-box'>
                    <button type='submit'>{text}</button>
                </div>
            </div>
        )
    }
}

export default Submit_btn;