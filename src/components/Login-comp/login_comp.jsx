/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';
import './login_comp.styles.scss';
import SignupFb from '../signup-comp/signup_fb';
import DividerEmail from '../divider_part/divider_email';
import Inputcomp from '../input-comp/inputcomp';
import SubmitBtn from '../submit-btn/submit_btn';

export default class Login_comp extends Component {
    render() {
        return (
            <div className='login-comp'>
               
                <SignupFb text='Login with a Facebook' />
                <DividerEmail />
                <form>
                    <Inputcomp type='email' name='email' placeholder='Enter Email' />
                    <Inputcomp type='password' name='password' placeholder='Enter Password' />
                    <SubmitBtn text='Log In'/>
                </form>
            </div>
        )
    }
}
