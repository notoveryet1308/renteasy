import React from 'react';
import './ContactInfo.styles.scss'

function ContactInfo() {
    return (
        <div className='contact-info-container'>
            <h1 className='contact-heading'>
                Contact Information
            </h1>
            <div className="number-info">
                <i className="far fa-user-circle"></i>
                <div className="name">
                    <span className='name-text'>Rahul Raj</span>
                    <span className='number'>+91(908)090-9090</span>
                </div>

            </div>
            <button className="contact-btn">
                Contact
            </button>
        </div>
    )
}

export default ContactInfo
