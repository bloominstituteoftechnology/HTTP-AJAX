import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Friend from './components/friend';

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

  handleFormInput = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  saveFriend = () => {
    const newFriend = {name:this.state.name, age: this.state.age, email: this.state.email}
    axios.post(`http://localhost:5000/friends/`, newFriend)
      .then(friend => {
        console.log(friend);
      })
      .catch(err => {
        console.log('friend did not add', err);
      })
    this.setState({name: '', age:'', email:''});
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/friends/`)
    .then(response => {
      this.setState({friends: response.data});
    })
    .catch(err => {
      console.log('Error', err);
    });
  }

  render() { 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Friend friends={this.state.friends} />
        <input 
          type= 'text'
          onChange = {this.handleFormInput}
          placeholder = 'Name'
          name= 'name'
          value= {this.state.name}
        />
        <input 
          type= 'text'
          onChange = {this.handleFormInput}
          placeholder = 'Age'
          name= 'age'
          value= {this.state.age}
        />
        <input 
          type= 'text'
          onChange = {this.handleFormInput}
          placeholder = 'Email'
          name= 'email'
          value= {this.state.email}
        />
        <button onClick={this.saveFriend}>Save</button>
      </div>
    );
  }
}

export default App;
