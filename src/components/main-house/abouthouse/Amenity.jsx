import React from 'react';
import './Amenity.styles.scss';
import ac from '../../../images/svg/ac.svg';
import dishwasher from '../../../images/svg/dishwasher.svg';
import doorman from '../../../images/svg/doorman.svg';
import elevator from '../../../images/svg/elevator.svg';
import floor from '../../../images/svg/floor.svg';
import parking from '../../../images/svg/parking.svg';
import view from '../../../images/svg/view.svg';
import storage from '../../../images/svg/storage.svg';


function Amenity() {
    return (
        <div className='amenity-container'>
            <div className='amenity-content'>
                <h1 className='amenity-heading'>
                    Amenities
                </h1>
                <div className="amenities-box">
                    <div className="amenity">
                        <img className='amenity-icon' src={elevator} alt='elevator' />
                        <p className='amenity-text'>
                            Elevator
                        </p>
                    </div>
                    <div className="amenity">
                        <img className='amenity-icon' src={ac} alt='ac' />
                        <p className='amenity-text'>
                            Air conditioner
                        </p>
                    </div>
                    <div className="amenity">
                        <img className='amenity-icon' src={floor} alt='floor' />
                        <p className='amenity-text'>
                            Hardwood floor
                        </p>
                    </div>
                    <div className="amenity">
                        <img className='amenity-icon' src={dishwasher} alt='dishwasher' />
                        <p className='amenity-text'>
                            Dish-Washer
                        </p>
                    </div>
                    <div className="amenity">
                        <img className='amenity-icon' src={parking} alt='parking' />
                        <p className='amenity-text'>
                            Parking
                        </p>
                    </div>
                    <div className="amenity">
                        <img className='amenity-icon' src={doorman} alt='doorman' />
                        <p className='amenity-text'>
                            Doorman
                        </p>
                    </div>
                    <div className="amenity">
                        <img className='amenity-icon' src={view} alt='view' />
                        <p className='amenity-text'>
                            View
                        </p>
                    </div>
                    <div className="amenity">
                        <img className='amenity-icon' src={storage} alt='storage' />
                        <p className='amenity-text'>
                            Storage
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Amenity
