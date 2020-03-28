import React, { Component } from 'react';
import './back-btn.styles.scss';
import {withRouter} from 'react-router-dom';


class Back_btn extends Component {
   
    render() {
    
        return (
            <div className={`back-btn`} onClick={this.props.history.goBack}>
                <div className='svg-white'></div>

            </div>
        )
    }
}

export default withRouter(Back_btn);
