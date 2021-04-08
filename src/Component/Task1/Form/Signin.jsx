import React, { Component } from 'react';

import CustomInput from '../Input.jsx';
import { Link } from 'react-router-dom'

class SigninForm extends Component {

  render() {
    return (
      <div className="container">
        <div className="form-content">
          <form className='registr-form'>
          <h2>Signin</h2>
          <CustomInput place="Enter name" type='text'/>
          <CustomInput place="Enter password" type='password'/>
          <Link to='/registration' className="form-button">Sign up</Link>
        </form>
        </div>
      </div>
    )
  }
}

export default SigninForm;