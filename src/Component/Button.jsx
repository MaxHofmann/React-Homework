import React, { Component } from 'react';

class CustomButton extends Component {

  render() {
    let nameBtn = 'Add + 1'
    const {type, onClick} = this.props
    return (
      <div>
        <button
        type={type}
        onClick={onClick}
        >{nameBtn}</button>
      </div>
    )
  }
}

export default CustomButton;