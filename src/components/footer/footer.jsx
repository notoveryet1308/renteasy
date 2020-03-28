import React, { Component } from 'react';
import './footer.styles.scss';
import Socialmedia from './socialmedia';
import Rights from './right';
import FooterLinks from './footerLinks';

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <footer>
                    <div className='social-media-rights'>
                        <Socialmedia/>
                        <Rights/>
                    </div>
                    <div className='footer-links'>
                        <FooterLinks/>
                    </div>

                </footer>
                
            </div>
        )
    }
}
