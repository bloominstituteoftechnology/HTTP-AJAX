import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import FriendList from './FriendList';
import FriendForm from './FriendForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friend: {
        name: '',
        age: 0,
        email: ''
      }
    };
  }

  componentDidMount() {
    axios // can you use fetch instead
      .get('http://localhost:5000/friends')
      .then((response) => {
        console.log('GET RESPONSE: ', response);
        this.setState({ friends: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleSubmit = () => {
    const friend = { friend: this.state.friend };
    axios
      .post('http://localhost:5000/friends', friend)
      .then((response) => {
        console.log('POST RESPONSE', response);
        this.setState({ friends: response.data, friend: '' }); //should this be an obj?
      })
      .catch((error) => console.log(error));
  };

  handleNameChange = (e) => {
    this.setState({ friend: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <FriendList friends={this.state.friends} />
        <FriendForm handleNameChange={this.handleNameChange} handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
