import React, { Component } from 'react';
import MyBull from './Component/Bull-content.jsx';
import Form from './Component/Form.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <MyBull />
        <Form />
      </div>
    )
  }
}

export default App;
