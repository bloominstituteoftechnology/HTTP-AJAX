import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import FriendList from './Friends/FriendList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/friends")
      .then(response => {this.setState({ friends: response.data })})
      .catch(err => {
        console.log(err);
      })
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
