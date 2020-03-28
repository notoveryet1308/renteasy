import React, { Component } from 'react';
import './loginpage.styles.scss';
import LoginComp from '../../components/Login-comp/login_comp';
import BackBtn from '../../components/back-btn/back-btn';

export default class Loginpage extends Component {
    render() {
        return (
            <div className='loginpage'>
                <h1>Welcome Back</h1>
                <LoginComp/>
                <BackBtn/>
            </div>
        )
    }
}
