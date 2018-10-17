import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { Route, Link} from 'react-router-dom';
import axios from 'axios';


class App extends React.Component {
  state = {
    friends: []
  }
  componentDidMount(){
    axios
        .get(' http://localhost:5000/friends')
        .then(reponse => this.setState({friends: response.data}))
  }

  render() {
    return (
      <div className="App">
        <div>

        </div>
      </div>
    );
  }
}

export default App;
