import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';

import Friends from './components/Friends';
import FriendCard from './components/FriendCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: '',
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleTextInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveNoteData = () => {
    const note = { name: this.state.name, age: this.state.age, email: this.state.email };
    axios
      .post(`http://localhost:5000/friend`)
      .then(savedNote => {
        console.log(savedNote);
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({ name: '', age: '', email: '' });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Notes!</h1>
        </header>
        <div>
          {/* <Route exact path="/" component={Friends} /> */}
          <Route path="/components/:id" component={FriendCard} />
        </div>
        <input
          type="text"
          onChange={this.handleTextInput}
          placeholder="name"
          name="name"
          value={this.state.name}
        />
        <input
          type="text"
          onChange={this.handleTextInput}
          placeholder="age"
          name="age"
          value={this.state.age}
        />
        <input
          type="text"
          onChange={this.handleTextInput}
          placeholder="email"
          name="email"
          value={this.state.email}
        />
        <button onClick={this.saveNoteData}>Save Note</button>
        <FriendCard friends = {this.state.friends}/>
      </div>
    );
  }
}

export default App;