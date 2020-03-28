import React from 'react';
import './MainHouseBoxStyles.scss';
import { Real_House_Data } from '../../helpers/demoHouseData';
import MainImage from './MainImage'

function MainHouseBoxMobile({ id }) {
    const data = Real_House_Data[id];
    return (
        <div className='mainhouse-mobile-container'>
            <MainImage imgSrc={data.large_img} data={data} />
        </div>
    )
}

export default MainHouseBoxMobile
