import React, { Component } from 'react';
import './housepage.styles.scss';
import MainNavigation from './../../components/Navigation/navigation';
import MainHouseBox from '../../components/main-house/main_house_box';
import MainHouseBoxMobile from '../../components/Mobile/MainHouseBoxMobile';

export default class Housepage extends Component {
    render() {
        const { match } = this.props;
        const id = match.params.index;


        return (
            <div className='housepage'>
                <MainNavigation style_diff={true} />
                <MainHouseBox className='Main-house-box' id={id} />
                <MainHouseBoxMobile id={id}/>
                
            </div>
        )
    }
}
