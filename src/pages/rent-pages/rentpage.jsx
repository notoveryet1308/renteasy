import React, { Component } from 'react';
import './rentpage.style.scss';
import MainNavigation from '../../components/Navigation/navigation';
import Housecontainer from '../../components/rentComponents/houseContainer/housecontainer';
import Footer from './../../components/footer/footer';

class Rentpage extends Component {
    render() {
        
        
        return (
            <div className='rentpage'>
                <MainNavigation {...this.props} rentpage={true} className='rentpage-nv' />
                
                <Housecontainer {...this.props} />
                <Footer/>
            </div>
        )
    }
}

export default  Rentpage;