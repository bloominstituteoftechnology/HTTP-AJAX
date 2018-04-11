import React, { Component } from 'react';
import logo from './logo.jpeg';
import './App.css';
import axios from 'axios';
import Display from './display';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: '',
      email: '',
      age: ''
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
    const friend = { name: this.state.name, email: this.state.email, age: this.state.age };
    axios
      .post(`http://localhost:5000/friends`, friend)
      .then(newFriend => {
        console.log(newFriend);
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({ name: '', email: '', age: '',});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Friends</h1>
        </header>
        <input
          type="text"
          onChange={this.handleTextInput}
          placeholder="name"
          name="name"
          value={this.state.name}
          className='input__general'
        />
        <input
          type="text"
          onChange={this.handleTextInput}
          placeholder="email"
          name="email"
          value={this.state.email}
          className='input__general'
        />
        <input
          type="text"
          onChange={this.handleTextInput}
          placeholder="age"
          name="age"
          value={this.state.age}
          className='input__general'
        />
        <button className='input__general' onClick={this.saveNoteData}>Make Friend</button>
        <Display friends={this.state.friends} />
      </div>
    );
  }
}

export default App;