import React, { Component } from 'react';
import './signup_comp.styles.scss';
import Inputcomp from '../input-comp/inputcomp';
import SignupFb from './signup_fb';
import DividerEmail from '../divider_part/divider_email';
import SubmitBtn from '../submit-btn/submit_btn';

export default class Signup_comp extends Component {
    render() {
        return (
            <div className='signup-comp'>
                <SignupFb  text='Sign up with Facebook'/>
                <DividerEmail />
                <form>
                    <Inputcomp type='text' name='first name' placeholder='Enter First Name' />
                    <Inputcomp type='text' name='last name' placeholder='Enter Last Name' />
                    <Inputcomp type='email' name='email' placeholder='Enter Email' />
                    <Inputcomp type='password' name='password' placeholder='Enter Password' />
                    <SubmitBtn text='Sign Up'/>
                </form>
            </div>
        )
    }
}

// name, type, placeholder,