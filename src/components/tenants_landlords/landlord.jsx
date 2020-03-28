import React, { Component } from 'react';
import './landlord.styles.scss';
import LandlordInfo from './../../helpers/landlordInfo';
import Twophotoholder from '../PhotoHolder/twophotoholder';
import Onephotoholder from '../PhotoHolder/onephotoholder';
import Textholder from '../TextHolder/textholder';


class Landlord extends Component {
    render() {
        return (
            <div className="landlord-info-box">
                <div className="landlord-info">
                    {LandlordInfo.map(info => {
                        return (<div className="landlord-info-holder">
                            {info.img.length === 2 ?
                                <Twophotoholder img={info.img} /> :
                                <Onephotoholder img={info.img} />}
                            <Textholder heading={info.heading} text={info.text} />
                        </div>)
                    })}
                </div>
            </div>
        )
    }
}

export default Landlord;