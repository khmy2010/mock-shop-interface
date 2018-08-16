import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Slider.css';

class Slider extends Component {
    state = {
        value: this.props.initialValue || this.props.min
    };

    handleChange = evt => {
        const { value } = evt.target;
        this.setState({ value });
    };

    render() {
        return (
            <div className="slider-wrapper">
                <input
                    type="range"
                    min="1"
                    max="100"
                    value={this.state.value}
                    className="slider"
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

Slider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    initialValue: PropTypes.number,
    updateValue: PropTypes.func
};

export default Slider;
