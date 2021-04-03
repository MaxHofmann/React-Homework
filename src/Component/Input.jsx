import React, { Component } from 'react';

class CustomInput extends Component {
  render() {
    const {type, value, onChange, readOnly} = this.props
    return (
      <div>
        <input
        type={type}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        />
      </div>
    )
  }
}

export default CustomInput;