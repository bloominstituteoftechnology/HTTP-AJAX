import React, { Component } from 'react';
import './App.css';
import FriendsList from './FriendsList';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      friend: '',
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friendsData: response.data });
      })
      .catch(error => {
        console.log('error', error);
      })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        <form>
          <h3>New Friend:</h3>
          <input type='text' placeholder='Enter name here'/>
          <input type='number' placeholder='Enter age here'/>
          <input type='text' placeholder='Enter email here'/>
          <button>Submit New Friend</button>
        </form>
        <h3>List of Friends:</h3>
        <FriendsList 
          friends={this.state.friendsData}
        />
      </div>
    );
  }
}

export default App;
