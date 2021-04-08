import React, { Component } from 'react';

class CustomInput extends Component {
  render() {
    const {type, place} = this.props
    return (
      <div>
        <input
        type={type}
        placeholder={place}
        className='input'
        />
      </div>
    )
  }
}

export default CustomInput;