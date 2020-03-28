import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footerLinks.styles.scss';
import apple from './../../images/AppleStore.png'
import googleplay from './../../images/GooglePlay.png'

class FooterLinks extends Component {
    render() {
        return (
            <div className='footer-links'>
                <div className='part part-1'>
                    <Link to='/'>About</Link>
                    <Link to='/'>Patners</Link>
                    <Link to='/'>FAQs</Link>
                    <Link to='/'>Blog</Link>
                </div>
                <div className='part part-2'>
                    <Link to='/'>Help Center</Link>
                    <Link to='/'>Sitemap</Link>
                    <Link to='/'>Terms of use</Link>
                    <Link to='/'>Privacy Policies</Link>
                </div>
                <div className='part part-3'>
                    <p>Get Mobile App for Tenants</p>
                    <div className='store-image'>
                        <img src={apple} alt={apple}/>
                        <img src={googleplay} alt={googleplay}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default FooterLinks;
