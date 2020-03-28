import React, { Component } from 'react';
import './house.styles.scss';
import Mapbox from '../../mapbox/mapbox';

class HouseCard extends Component {
    render() {
        const { index, latitude, longitude, bed_room, area, bathroom, price, image, history, match } = this.props;
        return (
            <div className='house-card' onClick={() => history.push(`${match.url}/${index}`)}>
                <div className='house-card-box'>
                    <div className='house-card-details'>
                        <div className='price-info'>
                            <p>{price}$</p>
                        </div>
                        <div className='img-box'>
                            <img src={image} alt={image} />

                        </div>
                        <div className='other-info'>
                            <div className='info  bedroom-info'>
                                <i className=" icon fas fa-bed"></i>
                                <p>{bed_room} bed-room</p>
                            </div>
                            <div className='info  bathroom-info'>
                                <i className="icon fas fa-bath"></i>
                                <p>{bathroom} bathroom</p>
                            </div>
                            <div className='info  area-info'>
                                <div className='square-rotate' >
                                    <i className="icon far fa-square"></i>
                                </div>
                                <p>{area} sq foot</p>
                            </div>
                        </div>
                    </div>
                    <div className='mapbox-gl'>
                        <Mapbox latitude={latitude} longitude={longitude} />
                    </div>
                </div>
            </div>
        )
    }
}
export default HouseCard;