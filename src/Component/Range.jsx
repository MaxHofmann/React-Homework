import React, { Component } from 'react';

import CustomInput from './Input.jsx';
import './style.css';

class Range extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '50',
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="container">
        <div className="range-content">
          <CustomInput onChange={this.handleChange} value={this.state.value} type='range' min="0" max="100" step="1"/>
          <CustomInput onChange={this.handleChange} type='text' value={this.state.value} />
        </div>
      </div>
    )
  }
}

export default Range;