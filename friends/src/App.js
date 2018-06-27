import React, { Component } from 'react';
import axios from 'axios';
import Friends from './Friends';
import AddFriendForm from './AddFriendForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    };
  }

  retrieveData() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
      .catch(err => console.log('ERROR:', err));
  }

  componentDidMount() {
    this.retrieveData();
  }

  updateFriends = friends => {
    this.setState({ friends });
  };

  render() {
    return (
      <div>
        <AddFriendForm updateFriends={this.updateFriends} />
        <Friends friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
