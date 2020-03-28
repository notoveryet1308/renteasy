import React, { Component } from 'react';
import './addpropertypage.styles.scss';
import Inputcomp from '../../components/input-comp/inputcomp';
import Footer from './../../components/footer/footer';
import MainNavigation from './../../components/Navigation/navigation';
import MoneyInfoBox from '../../components/addPropertyComp/moneyInfoBox';
import MenuItem from '../../components/addPropertyComp/MenuItem';
import { Type, Beds, Baths, Featurelandlord } from './../../helpers/menuItemdata';
import SubmitBtn from '../../components/submit-btn/submit_btn';
import FeatureLandlord from './../../components/addPropertyComp/featureLandlord';

class Addpropertypage extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };

    }

    render() {
        return (
            <>
                <MainNavigation style_diff={true} />
                <div className='add-a-property-page'>
                    <div className='add-a-property-box'>
                        <div className="title">
                            <h1>Add Your Property</h1>
                            <p>Rent your property to the best-qualified tenants</p>
                        </div>
                    </div>
                    <div className="property-form-box">
                        <div className="property-form">
                            <form>
                                <Inputcomp placeholder='Property Name' addPropertyStyle='addPropertyStyle' />
                                <div className="email-unit-box">
                                    <div className='e-c-box' style={{ width: '48%' }}>
                                        <Inputcomp placeholder='Add Email Address' addPropertyStyle='other-property-style' />
                                    </div>
                                    <div className='e-c-box' style={{ width: '48%' }}>
                                        <Inputcomp placeholder='Unit# (Optional)'
                                            addPropertyStyle='other-property-style' />
                                    </div>
                                </div>
                                <div className="menu-item-box">
                                    <div className="house-type list-box">
                                        <MenuItem lists={Type} type='Type' isOpen={this.handleToggle} />
                                    </div>
                                    <div className="bed-type list-box">
                                        <MenuItem lists={Beds} type='Beds' isOpen={this.handleToggle} />
                                    </div>
                                    <div className="bath-type list-box">
                                        <MenuItem lists={Baths} type='Baths' isOpen={this.handleToggle} />
                                    </div>
                                    <div className="sqft">
                                        <Inputcomp placeholder='SQFT'
                                            addPropertyStyle='other-property-style' />
                                    </div>
                                </div>
                                <div className="continue-btn">
                                    <SubmitBtn text='Continue' />
                                </div>
                            </form>

                        </div>
                        <div className="other-info-box">
                            <MoneyInfoBox />
                        </div>
                    </div>
                </div>
                <div className="feature-list-box">
                    {Featurelandlord.map((feature, index) => <FeatureLandlord key={index} {...feature} />)}
                </div>
                <div className="footer-box">
                    <Footer />
                </div>
            </>
        )
    }
}
export default Addpropertypage;