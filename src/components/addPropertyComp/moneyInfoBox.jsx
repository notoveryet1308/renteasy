import React, { Component } from 'react';
import './moneyInfoBox.styles.scss';
import texture from './../../images/texture_3.jpg';
import moneyLogo from './../../images/money.png';

class MoneyInfoBox extends Component {
    render() {
        return (
            <div className='money-info-box' >
               <div className="money-info" style={{backgroundImage: `url(${texture})`}}>
                   <div className='money-logo'>
                       <img src={moneyLogo} alt={moneyLogo}/>
                   </div>
                   <div className='price-info'>
                       <h3>Monthly Price*</h3>
                       <input type='text'/>
                       <p>Security Deposit</p>
                       <input type='text'/>
                       <p className='cur-info'>*In your local currency</p>
                   </div>
                   
               </div>
            </div>
        )
    }
}

export default MoneyInfoBox;