import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './FriendsList/FriendsList.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => {
        this.setState({
          friends: response.data
        });
        console.log(this.state.friends);
      })
      .catch(err => console.log(err))
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
