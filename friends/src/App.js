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

  handleSubmit = () => {
    const id = (this.state.friends[this.state.friends.length - 1].id + 1);
    const newFriend = { id: id, name: this.state.name, age: this.state.age, email: this.state.email };

    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(response => {
        this.setState({ friends: response.data, name: '', age: '', email: '' });
      })
      .catch(err =>
        console.log(err));
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
        <button onClick = {this.handleSubmit}>Submit new friend</button>
        <FriendList friends = {this.state.friends} />
      </div>
    );
  }
}
// commit
export default App;
