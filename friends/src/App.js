import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ListOfFriends from './ListOfFriends';

import { Route } from 'react-router-dom';



class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsList: [],
      name: '',
      age: '',
      email: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const newFriendObj = { 
      // 'name' is from server.js
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };    
    
    axios
    .post("http://localhost:5000/friends", newFriendObj)
    .then(response => {
      console.log("GET RESPONSE: ", response);

      this.setState({ friendsList: response.data, name: '', age: '', email: '' });
    })
    .catch(err => {
      console.log(err);
    });
  }

  handleSetData = friends => this.setState({ friendsList: friends });
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log("GET RESPONSE: ", response);
        this.setState({ friendsList: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form>
          <input
            type='text'
            placeholder='Name...'
            onChange={this.handleChange}
            name='name'
            value={this.state.name}
          />
          <input
            type='number'
            placeholder='Age...'
            onChange={this.handleChange}
            name='age'
            value={this.state.age}
          />
          <input
            type='text'
            placeholder='Email...'
            onChange={this.handleChange}
            name='email'
            value={this.state.email}
          />
          <button onClick={this.handleSubmit}>Submit New Friend</button>
        </form>

        <Route path='/' render={(props) => <ListOfFriends {...props} friendsData={this.state.friendsList} handleSetData={this.handleSetData} /> }
        />
      </div>
    );
  }
}

export default App;
