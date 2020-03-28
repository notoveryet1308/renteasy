import React, { Component } from 'react';
import './ListCategory.styles.scss';
import Category from './Category';

export default class ListCategory extends Component {
    static defaultProps = {
        category: ['Apartments for Rent', 'Houses for Rent', 'Condos for Rent', 'Duplexes for Rent', 'Townhouses for Rent', 'Lofts for Rent', 'Rooms for Rent']
    }
    render() {
        let categories = [];
        let {category} = this.props;
        for (let i = 0; i < category.length; i++) {
             let item = [category[i], category[i+1]];
             i++;
             categories.push(item);
            
        }
        return (
            <div className="list-category">
                <h1>Listing Categories</h1>
                <div className="list">
                     {categories.map((cat,index) => <Category key={index} cat={cat} />)}
                </div>

            </div>
        )
    }
}
