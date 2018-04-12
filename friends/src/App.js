import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import ListOfFriends from './component/ListOfFriends';
import FriendForm from './component/FriendForm';
import Navigation from './component/Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: [],
      name: '',
      age: '',
      email: '',
    }
  }
  

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => {
        this.setState({ friend: response.data});
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleTextInput = e => {
    this.setState({ [e.target.name]: e.target.value});
  };

  saveNoteData = () => {
    const friend = { name: this.state.name, age: this.state.age, email: this.state.email };
    axios
      .post(`http://localhost:5000/friends`, friend)
      .then(savedNote => {
        console.log(savedNote);
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({ name: '', age: '', email: ''});
  };
    
  render() {
    return (
      <div className="App">
        {/* <FriendForm friend={this.state.friend} /> */}
        {/* <ListOfFriends friend={this.state.friend} /> */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Navigation />
        <Route exact path='/' render={(props) => (
        <ListOfFriends {...props} friend={this.state.friend} />
        )}/>
        <Route path='/form' render={(props) => (
        <FriendForm {...props} friend={this.state.friend} />
        )}/>
      </div>
    );
  }
}

export default App;
