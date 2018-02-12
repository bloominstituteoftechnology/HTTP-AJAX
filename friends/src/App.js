import React, { Component } from 'react';
import Friend from './Components/Friends/friends.js';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    friends: [],
  }
  
  render() {
    return (
      <div>
        <div>
          {this.state.friends.map(friend => {
            return <Friend 
            key={friend.id} 
            friend={friend}
            />;
          })}
        </div>
      </div>
    );
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data});
      })
      .catch(error => {
        console.log('there was error', error);
      });
  }
}

export default App;
