import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    friends: [],
  }
  render() {
    return (
      <div className="App">
        {this.state.friends.map(friend => {
          return (
            <li key={friend.id} className="friend">
              <div className="friend-name">{friend.name}</div>
              <div className="friend-age">{friend.age}</div>
              <div className="friend-email">{friend.email}</div>
            </li>
          )
        })}
      </div>
    );
  }
  componentDidMount(){
    axios.get('http://localhost:5000/friends')
    .then((response) => {
      this.setState({ friends: response.data})
    })
    .catch((error) => {
      console.log('there was an error', error);
    });
  }
}

export default App;
