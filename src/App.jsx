import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SigninForm from './Component/Task1/Form/Signin.jsx'
import SignUpForm from './Component/Task1/Form/SignUp.jsx'
import Table from './Component/Task2/Table.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={SigninForm} />
            <Route exact path="/registration" component={SignUpForm} />
          </Switch>
      </BrowserRouter>
      <Table />
      </>
    )
  }
}

export default App;
