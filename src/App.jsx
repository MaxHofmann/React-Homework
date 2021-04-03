import React, { Component } from 'react';
import Range from './Component/Range.jsx';
import Test from './Component/Test.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
  }

  handleClick = () => {
    console.log('test');
    this.setState({
      value: this.state.value + 1
    })
  }

  render() {
    return (
      <div>
        <Range />
        <Test
        trigger={15}
        value={this.state.value}
        handleClick={this.handleClick}
        />
      </div>
    )
  }
}

export default App;
