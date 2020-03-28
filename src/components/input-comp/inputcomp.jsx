import React, { Component } from 'react';
import './inputcomp.styles.scss';

class Inputcomp extends Component {
    constructor(props) {
        super(props);
        this.state = { somethingchanged: false };
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(e) {
        if (e.target.value.length > 0) {
            this.setState({ somethingchanged: true })
        } else {
            this.setState({ somethingchanged: false })
        }
    }

    render() {
        const movetoggle = this.state.somethingchanged ? 'moveup' : 'movedown';
        const { name, type, placeholder, addPropertyStyle} = this.props;
        return (
            <div className={`input-component-box ${addPropertyStyle}`}>

                <input
                   contentEditable= 'true'
                    name={name}
                    type={type}
                    onChange={this.handleChange}
                    placeholder={placeholder}
                />
                <label
                    htmlFor={name}
                    className={`${movetoggle}`}

                >{placeholder}</label>
            </div>
        )
    }
}
export default Inputcomp;