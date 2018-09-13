import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Friend from './Friend';
import FriendList from './FriendList';

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
        <form>
          <input
            type = 'text'
            placeholder = 'Name'
            name = 'name'
          />
          <input
            type = 'text'
            placeholder = 'Age'
            name = 'age'
          />
          <input
            type = 'text'
            placeholder = 'Email address'
            name = 'email'
          />
        </form>
        <FriendList friends = {this.state.friends} />
      </div>
    );
  }
}
// commit
export default App;
