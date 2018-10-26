import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: '',
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      })
  }

  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friends} />
        <AddFriends />
      </div>
    );
  }
}

export default App;
