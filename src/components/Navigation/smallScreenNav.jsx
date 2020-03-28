import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../images/mstile-144x144.png';
import './smallScreenNav.styles.scss';
import SearchBox from './searchBox';

export default class SmallScreenNav extends Component {
    constructor(props) {
        super(props);
        this.state = { barClicked: false, searchClicked: false, stayLocation: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleDownNav = this.handleDownNav.bind(this);
        this.handleSearchNav = this.handleSearchNav.bind(this);
        this.removeSearch = this.removeSearch.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleDownNav(e) {
        console.log('clicked');

        this.setState(st => ({
            barClicked: !st.barClicked
        }))
    }

    handleSearchNav(e) {
        this.setState(st => ({
            searchClicked: !st.searchClicked
        }))
    }
    removeSearch(e) {
        this.setState(st => ({
            barClicked: false,
            searchClicked: false
        }))
    }

    render() {
        let bar;
        if (this.state.barClicked) {
            bar = <i className="times fas fa-times"></i>
        } else {
            bar = <div>
                {this.state.searchClicked ? null : <i className="bars fas fa-bars"></i>}
            </div>

        }
        return (
            <div className="mobile-navigation">
                <div className="nav-head-box">
                    <div className="nav-head">
                        <div className="bar-box" onClick={this.handleDownNav}>
                            {bar}
                        </div>
                        <div className="logo-box">
                            {this.state.searchClicked ? null : <img style={{ height: "30px" }} src={logo} alt={logo} />}
                        </div>
                        {this.state.searchClicked ? null: <div onClick={this.handleSearchNav}>
                            {this.state.barClicked ? null : <i className="search fas fa-search"></i>}
                        </div>}
                    </div>
                </div>
                {this.state.searchClicked && <SearchBox removeSearch={this.removeSearch}/>}
                <div className={`nav-down-box ${this.state.barClicked ? "show" : "hide"}`}>
                    <div className="nav-down">
                        <div className="nav-down-items">
                            <div className="list-property-box">
                                <Link className="mobile-link list-property" to="/add-a-property">List a property</Link>
                            </div>
                            <div className="rent-buy">
                                <Link className="mobile-link rent-link" to="/rent">Rent</Link>
                                <Link className="mobile-link buy-link" to="/buy">Buy</Link>
                            </div>
                            <div className="divider"></div>
                            <div className="login-sign-up">
                                <Link className="mobile-link login-link" to="/login">Log In</Link>
                                <Link className="mobile-link signup-link" to="/signup">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
