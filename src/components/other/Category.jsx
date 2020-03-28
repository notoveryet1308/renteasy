import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Category.styles.scss';

class Category extends Component {
    render() {
        return (
            <div className='category'>
                <Link className="cat-link" to='/'>{this.props.cat[0]}</Link>
                <Link className="cat-link" to='/'>{this.props.cat[1]}</Link>
            </div>
        )
    }
}

export default  Category;