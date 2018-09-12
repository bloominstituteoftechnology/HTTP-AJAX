import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount () {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      this.setState({ friends: response.data });
    })
    .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="App">
       <h1>Friends List</h1>
       <div className="friends-list">

       {this.state.friends.map(friend => (
          <FriendsList key={friend.id} friend={friend}  />
        ))}
       </div>
      </div>
    );
  }
}

export default App;
