import React, { Component } from 'react';

import CustomInput from '../Input.jsx';

class SignUpForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="form-content">
          <form className='registr-form'>
          <h2>Sign up</h2>
          <CustomInput place="Enter name" type='text'/>
          <CustomInput place="Enter email" type='email'/>
          <CustomInput place="Enter password" type='password'/>
          <CustomInput place="Enter again" type='password'/>
        </form>
        </div>
      </div>
    )
  }
}

export default SignUpForm;