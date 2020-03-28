/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import './MenuItem.styles.scss';

class MenuItem extends Component {
    
    constructor(props) {
        super(props);
        this.state = { selectedValue: null, isOpen: false };
        this.handleList = this.handleList.bind(this);
        this.isOpen = this.isOpen.bind(this);
    }
    handleList(e) {
        if (!e.target.id) {
            this.setState({ selectedValue: this.state.selectedValue })
        } else {
            this.setState({ selectedValue: e.target.id })
        }
    }
    isOpen(e) {
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        const {lists, type} = this.props;
        let typed = this.state.selectedValue !== null ? this.state.selectedValue : type;
        return (
            <div className='menu-item-box'>
                <div className='menu-item'>
                    <div className="menu" onClick={this.isOpen}>
                        <span>{typed} &nbsp;</span>
                        <i className="fas fa-caret-down"></i>
                    </div>
                    {this.state.isOpen &&
                        <div className="list" onClick={this.handleList}>
                            <ul onClick={this.isOpen}>
                                {lists.map((list, index) => <li key={index} id={list}>{list}</li>)}
                            </ul>
                        </div>}
                </div>
            </div>
        )
    }
}
export default MenuItem;