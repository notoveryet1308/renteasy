import React, { Component } from 'react';

import './signuppage.styles.scss';
import SignupComp from '../../components/signup-comp/signup_comp';
import LoginRedirect from '../../components/login_redirect/login_redirect';
import BackBtn from '../../components/back-btn/back-btn';


export default class Signuppage extends Component {
    render() {
        return (
            <div className='signup-page'>
                <h1>Sign Up</h1>
                <SignupComp />
                <LoginRedirect />
                <BackBtn/>               
            </div>
        )
    }
}
