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

  handleFormInput = e => {
    this.setState ({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <form>
          <input
            type = 'text'
            placeholder = 'Name'
            name = 'name'
            value = {this.state.name}
            onChange = {this.handleFormInput}
          />
          <input
            type = 'text'
            placeholder = 'Age'
            name = 'age'
            value = {this.state.age}
            onChange = {this.handleFormInput}
          />
          <input
            type = 'text'
            placeholder = 'Email address'
            name = 'email'
            value = {this.state.email}
            onChange = {this.handleFormInput}
          />
        </form>
        <FriendList friends = {this.state.friends} />
      </div>
    );
  }
}
// commit
export default App;
