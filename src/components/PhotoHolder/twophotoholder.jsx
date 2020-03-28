import React, { Component } from 'react';
import './twophotoholder.styles.scss';

class Twophotoholder extends Component {
    render() {
        return (
            <div className="twophoto-holder">
                <div className="photo-big photo">
                    <div className="photo_1" style={{ backgroundImage: `url(${this.props.img[0]})` }} />
                </div>
                <div className="photo-small photo">
                    <div className="photo_2" style={{ backgroundImage: `url(${this.props.img[1]})` }} />
                </div>
            </div>
        )
    }
}

export default Twophotoholder;