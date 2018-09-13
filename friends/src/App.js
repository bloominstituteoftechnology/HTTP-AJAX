import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friend from './Friends';
import FriendForm from './FriendForm';

 class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }



   componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      console.log(response);
      this.setState({
        friends: response.data
      })
    })
    .catch(err => console.log(err));
  }
  
  render() {
    return (
      <div className="App">
        <ul>
          {this.state.friends.map(friend => <Friend friend={friend} key={friend.id} />)}
        </ul>
        <FriendForm friends={this.state.friends}  />
      </div>
    );
  }
}
 export default App;