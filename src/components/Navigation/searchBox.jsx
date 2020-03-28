import React, { Component } from 'react';
import './searchBox.styles.scss';

export default class SearchBox extends Component {

    constructor(props){
        super(props);
        this.state={stayLocation: ''};
        this.handleChange= this.handleChange.bind(this);
        this.removeSearch= this.removeSearch.bind(this);
    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    removeSearch(){
        this.props.removeSearch();
    }
    render() {
        return (
            <div className="search-box">
                <div className="active-search" >
                    <div className="search-icon">
                        <i className="search fas fa-search"></i>
                    </div>
                    <div className="input-box">
                        <input
                            autoFocus
                            name="stayLocation"
                            placeholder="Where do you want to live ?"
                            value={this.state.stayLocation}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="cut-box" onClick={this.removeSearch}>
                        <i className="times fas fa-times"></i>
                    </div>
                </div>
            </div>
        )
    }
}
