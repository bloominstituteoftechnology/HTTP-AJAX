import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './components/FriendsList';

class App extends Component {
  state = {
    friends: [],
  }

  componentDidMount = () => {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data});
      })
      .catch(err => {
        console.log('CRAP!', err);
    });
  }
  
  render() {
    return (
      <div className="App">
        {this.state.friends.map(friend => (
          <FriendsList key={friend.id} friend={friend} />
        ))}
      </div>
    );
  }
}

export default App;
