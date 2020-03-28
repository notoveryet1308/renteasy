import React, { Component } from 'react';
import './fulldes.styles.scss';

export default class Fulldes extends Component {
    constructor(props) {
        super(props);
        this.state = { show_des: false , show_btn: true };
        this.handleRead = this.handleRead.bind(this);
    }
    handleRead() {
        this.setState({ show_des: true , show_btn: false });
    }
    render() {
        const text_toggle = this.state.show_des ? 'show_text' : 'hide_text';
        const btn_toggle = this.state.show_btn ? 'show_btn': 'hide_btn';
        return (
            <div className='fulldes'>
                <h1>Apartment Description</h1>
                <p className='alert'>***NO BROKER FEE | TWO FREE MONTHS***</p>
                <div className='show' >
                    <p className='text'>
                        Luxury oceanfront living has arrived in Coney Island. With sweeping ocean views unlike anywhere else in New York City, Ocean Drive offers a collection of studio to three-bedroom luxury apartment rentals with a full complement of high-end services and amenities. With over 95% of apartments offering direct ocean views, select the one that's right for you!
                    </p>
                </div>
                <div className='show-box'>
                    <div className={`${btn_toggle} btn`} onClick={this.handleRead}>
                        Continue Reading...
                    </div>
                    <div className={`${text_toggle}`}>
                        <p className='text'>
                            Chic and stylish residences come with elegant finishes and a choice of exclusive terraces and balconies for you to enjoy the unparalleled vistas of Coney Island's historic amusement park, the unmistakable Manhattan skyline, the beauty of the Verrazzano-Narrows Bridge, and the unmatched views of the Atlantic Ocean. Relax and unwind on the 25,000 square foot landscaped oceanfront sundeck, take a dip in the indoor swimming pool, or challenge yourself in the state-of-the-art gym. Feel like you've stepped into an everyday vacation and live the dream at Ocean Drive.
                        </p>
                        <p className='text'>
                            Chic and stylish residences come with elegant finishes and a choice of exclusive terraces and balconies for you to enjoy the unparalleled vistas of Coney Island's historic amusement park, the unmistakable Manhattan skyline, the beauty of the Verrazzano-Narrows Bridge, and the unmatched views of the Atlantic Ocean. Relax and unwind on the 25,000 square foot landscaped oceanfront sundeck, take a dip in the indoor swimming pool, or challenge yourself in the state-of-the-art gym. Feel like you've stepped into an everyday vacation and live the dream at Ocean Drive.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
