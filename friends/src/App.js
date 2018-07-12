import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import Form from './components/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends').then(response => {
      console.log(response);
      this.setState({ friendsData: response.data });
    }).catch(err => {
      console.log(err);
    });
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  
  handleSubmit = () => {
    const friend = {
      name: this.state.name,
      age: Number(this.state.age),
      email: this.state.email
    };
    axios.post('http://localhost:5000/friends', friend).then(create => {
      console.log(create);
      console.log(create.data);
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>REACT FRIENDS LIST</h1>
        <FriendsList friends={this.state.friendsData} />
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
