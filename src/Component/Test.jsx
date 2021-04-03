import React, { Component } from 'react';

import CustomButton from './Button.jsx';
import CustomInput from './Input.jsx';
import './style.css';

class Test extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: 0
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (state.value !== props.trigger) {
      return {
        value: props.value
      }
    }
    return null;
  }

  render() {
    return (
      <div className="container">
        <div className="test-content">
          <CustomInput value={this.state.value} readOnly={true} type='text' />
          <CustomButton onClick={this.props.handleClick} type='button'/>
        </div>
      </div>
    )
  }
}

export default Test;