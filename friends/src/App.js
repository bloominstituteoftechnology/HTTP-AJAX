import React, { Component } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';
import ListOfFriends from './component/ListOfFriends';

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input
        type= 'text'
        onChange={this.handleTextInput}
        placeholder= 'Name'
        name= 'name'
        value= {this.state.name}
        />
        <input
        type= 'text'
        onChange={this.handleTextInput}
        placeholder= 'Age'
        name= 'age'
        value= {this.state.age}
        />
        <input
        type= 'text'
        onChange= {this.handleTextInput}
        placeholder= 'Email'
        name= 'email'
        value= {this.state.email}
        />
        <button onClick={this.saveNoteData}>Make A Friend </button>

        <ListOfFriends friend={this.state.friend} />
      </div>
    );
  }
}

export default App;
