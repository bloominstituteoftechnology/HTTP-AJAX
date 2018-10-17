import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <form>
          <input type="text" placeholder="name" />
          <input type="number" placeholder="age" />
          <input type="text" placeholder="email" />
          <input type="submit" />
        </form>

        {this.state.friends.map(friend => (
        <div
          className="friend-card"
          key={friend.email}
        >
          <p>{friend.name}</p>
          <p>{friend.age}</p>
          <p>{friend.email}</p>
        </div>
      ))}
      </div>
    );
  }
}

export default App;
