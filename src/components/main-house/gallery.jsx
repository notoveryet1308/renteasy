import React, { Component } from 'react';
import './gallery.styles.scss';


class Gallery extends Component {
    render() {
        const { small_img } = this.props;


        return (
            <div className='gallery'>
                <div className='gallery-photos'>
                    {small_img.map((img,index) => <div key={index} className='small-img' style={{ backgroundImage: `url(${img})` }} />)}
                </div>
            </div>
        )
    }
}

export default Gallery;
