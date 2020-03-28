import React, { Component } from 'react';
import './StickyElement.scss'
import Tenants from '../tenants_landlords/tenants';
import Landlord from '../tenants_landlords/landlord';
import Boostbusiness from '../other/boostbusiness';

class StickyElement extends Component {
    static defaultProps = {
        tenants: {
            heading: 'Searching for a Apartment?',
            text: 'Your perfect home is waiting for you on Rentberry. Browse thousands of apartments worldwide, negotiate terms and prices, sign lease online, and communicate with your landlord right on your laptop or smartphone.'
        },
        landlords: {
            heading: 'Boost Your Rental Business',
            text: 'Join Rentberry to start getting the most out of your rental business. Syndication to partner platforms, price negotiation algorithm, and online solutions to all rental tasks will bring your landlord’s career to ever greater heights.'
        }
    }
    constructor(props) {
        super(props);
        this.state = { scrolled: false, tenant: true };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ tenant: !this.state.tenant })
    }
    render() {
        let gradinetColor = this.state.tenant ? "gradientTenants" : "gradientLandlord";
        let isScrolled = this.state.scrolled ? 'head-scrolled' : null;
        
        return (
            <div>
                <div className={`tenants-landlord-box ${gradinetColor}`} >
                    <div className={`tenant-landlord ${isScrolled} `}>
                        <div className="tenant" onClick={this.handleChange}>
                            <p>For Tenants</p>
                        </div>
                        <div className="divider"></div>
                        <div className="landlord" onClick={this.handleChange}>
                            <p>For Landlord</p>
                        </div>
                    </div>
                    {this.state.tenant ? <Tenants /> : <Landlord />}
                </div>
                <Boostbusiness 
                person={this.state.tenant ? this.props.tenants : this.props.landlords} />
            </div>
        )
    }
}

export default StickyElement;