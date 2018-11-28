import React, { Component } from 'react';
import './App.css';
import FriendsList from './Components/FriendsList';
import axios from 'axios'

class App extends Component {

  constructor() {
    super()
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response)
        this.setState({ friends: response.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  addNewFriend(e) {

  }

  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
