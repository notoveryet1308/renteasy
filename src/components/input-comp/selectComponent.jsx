import React, { Component } from 'react';
import './selectComponent.styles.scss';


class SelectComponent extends Component {
    render() {
        return (
            <div className='select-box'>
                <label>Type</label>
                <select className='select' defaultValue=''>
                    <em>none</em>
                    <option value='1'>one</option>
                    <option value='1'>one</option>
                    <option value='1'>one</option>
                    <option value='1'>one</option>
                </select>
            </div>
        )
    }
}

export default SelectComponent;



                    // open={open}
                    // onClose={handleClose}
                    // onOpen={handleOpen}
                    // value={age}
                    // onChange={handleChange}