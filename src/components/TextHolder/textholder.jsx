import React, { Component } from 'react';
import './textholder.styles.scss';
import { Link } from 'react-router-dom';
class Textholder extends Component {
    render() {
        return (
            <div className="text-holder">
                <div className="text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                    <Link className="learn-more-link" to="/">Learn more..</Link>

                </div>

            </div>
        )
    }
}

export default Textholder;