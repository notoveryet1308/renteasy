import React, { Component } from 'react';
import './tenants.styles.scss';
import TenantsInfo from './../../helpers/tenantsInfo';
import Onephotoholder from './../PhotoHolder/onephotoholder';
import Twophotoholder from './../PhotoHolder/twophotoholder';
import Textholder from './../TextHolder/textholder';

export default class Tenants extends Component {
    
    render() {
     
        return (
            <div className="tenants-info-box">
                <div className="tenants-info">
                    {TenantsInfo.map((info,index) => {
                        return(<div key={index} className="tenants-info-holder">
                            {info.img.length ===2 ? 
                                <Twophotoholder img={info.img}/> :
                                 <Onephotoholder img={info.img} />}
                            <Textholder heading={info.heading} text={info.text} />
                        </div>)
                    })}
                </div>
            </div>
        )
    }
}
