import React, { Component } from 'react';
import './main_house_box.styles.scss';
import { Real_House_Data } from './../../helpers/demoHouseData';
import Housetype from './housetype';
import Address from './address';
import MiniDes from './mini_des';
import Applycard from './applycard';
import Gallery from './gallery';
import ScheduleTour from './scheduletour';
import Fulldes from './abouthouse/fulldes';
import Footer from './../footer/footer';
import Amenity from './abouthouse/Amenity';
import ContactInfo from './abouthouse/ContactInfo';

export default class Main_house_box extends Component {
    constructor(props) {
        super(props);
        this.state = { scrolled: false }
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY>= 700 ;
            
            if (isTop) {
                this.setState({ scrolled: true })
            } else {
                this.setState({ scrolled: false })
            }


        })
    }
    render() {
        const position_ = this.state.scrolled ? 'fixed' : 'absolute';
        const { id } = this.props;
        const linear_grad = `linear-gradient(315deg, #292b2cb4 0%, #22272eb7 74%)`;
        const data = Real_House_Data[id];
        return (
            <div className='main-house'>
                <div className='main-house-box' style={{ backgroundImage: `${linear_grad} ,url(${data.large_img})` }}>
                    <div className='main-house-sec address-housetype'>
                        <Housetype />
                        <Address location={data.address} />
                    </div>
                    <div className='main-house-sec general-info'>
                        <MiniDes {...data} />
                        <Applycard />
                    </div>

                </div>
                <Gallery small_img={data.small_img} />
                <div className='sticky-schedule' >
                    <div className='sticky-box' style={{position: `${position_}`}}>
                        <ScheduleTour />
                    </div>
                </div>
                <Fulldes />
                <Amenity/>
                <ContactInfo/>
                <Footer/>
            </div>
        )
    }
}
