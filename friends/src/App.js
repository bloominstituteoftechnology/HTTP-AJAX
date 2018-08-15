import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Link
}from 'react-router-dom';
import axios from 'axios';


import './App.css';
const url  = "http://localhost:5000/friends"

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }
  // Inside your React application, create a component to display the 
  // list of friends coming from the server.

  componentDidMount() {
    axios.get(url).then(response => {
      console.log(response);
      this.setState({
        friends: response.data
      })
    })
  }


  render() {
    console.log(this.state.friends);
    return (
      <div>
        
      </div>
    );
  }
}

export default App;
