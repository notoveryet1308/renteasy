import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './login_redirect.styles.scss';

class Login_redirect extends Component {
    render() {
        return (
            <div className='login-redirect'>
                <div className='login-redirect-box'>
                    <span>Already a member ?</span>
                    <Link className='login-redirect-link' to='/login'>Login</Link>
                </div>

            </div>
        )
    }
}

export default Login_redirect;
