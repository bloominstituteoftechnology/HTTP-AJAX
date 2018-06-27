import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      friendsData: [],
      name: '',
      age: '',
      email: ''
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friendsData: response.data }))
      .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friendsData} />
        <AddFriendForm />
      </div>
    );
  }
}

export default App;
