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
      name: '',
      age: '',
      email: ''
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
    const friend = { name: this.state.name, age: this.state.age, email: this.state.email };
    axios
      .post('http://localhost:5000/friends', friend)
      .then((response) => {
        console.log('POST RESPONSE', response);
        this.setState({ friends: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({ name: '', age: '', email: '' });
  };

  handleFriendChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // handles all 3 forms by name referring to what you name the input form
  };

  render() {
    return (
      <div className="App">
        <FriendList friends={this.state.friends} />
        <FriendForm
          handleFriendChange={this.handleFriendChange}
          handleSubmit={this.handleSubmit}
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
        />
      </div>
    );
  }
}

export default App;
