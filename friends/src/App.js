import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from'axios';
import Friend from './components/Friend';
import FriendsList from './components/FriendList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response);
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
  }



  render() {
    return (
      <div className="App">
        <FriendList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
