import React, { Component } from 'react';
import './signupelement.styles.scss';
import {Link} from 'react-router-dom';

class Signupelement extends Component {
    render() {
        return (
            <div className="signup-element-box">
                <Link className="signup-link-big" to="/signup">Sign Up For Free</Link>
            </div>
        )
    }
}

export default Signupelement;
