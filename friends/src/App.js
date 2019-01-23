import React, { Component } from 'react';
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
     this.setState({friends: response.data})
    })
    .catch(err => {
      console.log(err);
    });

  }
  render() {
    return (
      <div className="App">
      <h1>Friends</h1>
      {this.state.friends.map(friend => (
        <div key ={friend.id}>
          <h2>{friend.name}</h2>
          <h2>{friend.age}</h2>
          <h2>{friend.mail}</h2>
        </div>
      ))}
      </div>
    );
  }
}

export default App;
