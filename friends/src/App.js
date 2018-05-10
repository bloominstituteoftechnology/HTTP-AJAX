import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayList from './Component/DisplayList'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FormIn from './Component/FormIn'
import UpdateForm from './Component/UpdateForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to = "/form">
          <Button>form</Button>
        </Link>
        <Route exact path="/form" component={FormIn} />
        <Route exact path="/" component={DisplayList } />
        <Route exact path="/updateform/:id" component={UpdateForm } />

      </div>
      
    );
  }
}

export default App;
