import React, { Component } from 'react';
import './App.css';
import FriendList from './Component/FriendList';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()

    this.state = {
      friends: [],
    }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => {
        console.log('This is the axios');
        console.log(response.data);
        this.setState({ friends: response.data })
      })
  }

  render() {
    return (
      <div className="App">
        {this.state.friends.map(friend => (
          <FriendList key={friend.id} friend={friend} />
        ))}
        <form>
          <input placeholder='Name'></input>
          <input placeholder='Age'></input>
          <input placeholder='Email'></input>
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default App;
