import React, { Component } from 'react';
import Friend from './Components/Friends/friends.js';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    friends: [],
    newFriend: {
      id: '',
      name: '',
      age: '',
      email: '',
    },
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
        <form>
          <input type="text" onChange={this.handleNewFriend} name="Name Here" />
          <input type="text" onChange={this.handleNewFriend} age="Age Here" />
          <input type="text" onChange={this.handleNewFriend} email="Email Here" />
          <input type="submit" value="Add Friend" />
        </form>
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
