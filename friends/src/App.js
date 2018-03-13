import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

 
 

class App extends Component {
  constructor() {
    super();
    this.state= {
      friends: [],
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.friends.map(friend => {
          return(
            <div>
             <div>{friend.name}</div>
             <div>{friend.age}</div>
             <div>{friend.email}</div>
            </div>
          )
        })}
      </div>
    );
  }
  componentDidMount() {
    axios.get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err))
  }
}

export default App;
