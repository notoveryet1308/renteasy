import React, { Component } from 'react';
import './onephotoholder.styles.scss';

class Onephotoholder extends Component {
    render() {
        return (
            <div className="onephoto-holder">
                <div className="photo" style={{backgroundImage: `url(${this.props.img})`}}>

                </div>
            </div>
        )
    }
}

export default Onephotoholder;
