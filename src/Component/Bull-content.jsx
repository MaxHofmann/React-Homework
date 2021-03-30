import React, { Component } from 'react';

import BullElem from './Bull.jsx'
import './style.css';

class MyBull extends Component {

  render() {
    return (
      <div className='container'>
        <div className="bull-content">
          <BullElem />
        </div>
      </div>
    )
  }
}

export default MyBull;