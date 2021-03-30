import React, { Component } from 'react';

import CustomInput from './Input.jsx';
import CustomButton from './Button.jsx';
import './style.css';

class Form extends Component {

  render() {
    return (
      <div className="container">
        <div className="form-content">
          <form className='registr-form'>
            <h2>Sing up</h2>
          <CustomInput place="Enter name" type='text'/>
          <CustomInput place="Enter email" type='email'/>
          <CustomInput place="Enter password" type='password'/>
          <CustomButton/>
        </form>
        </div>
      </div>
    )
  }
}

export default Form;