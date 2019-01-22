import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from "axios"

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }
  componentDidMount() {
    axios 
    .get('http://localhost:5000/friends')
    .then(response =>{
      console.log(response);
     // this.state({frineds: response.data})
    })
    .catch(err => {
      console.log(err);
    });

  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
