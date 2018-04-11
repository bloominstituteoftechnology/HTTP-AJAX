import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';

import FriendsList from './components/FriendsList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        console.log(response.data);
        this.setState({friends: response.data}); 
      })
      .catch(error => {
        console.log(error);
      })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={ () => <FriendsList {...this.state}/>}/>
        </div>
      </Router>
    );
  }
}

export default App;
