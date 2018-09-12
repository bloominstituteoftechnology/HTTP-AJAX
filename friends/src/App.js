import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state= {
      friends: []
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({friends: response.data});
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
       <h1>All My Lambda Friends</h1>
        {this.state.friends.map(friend => (
        <div>
          <h1>{friend.name}</h1>
          <h2>Age: {friend.age}</h2>
          <h2>Email: {friend.email}</h2>
        </div>
        ))}
      </div>
    );
  }
}

export default App;
