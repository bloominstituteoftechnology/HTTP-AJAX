import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ListOfFriends from './ListOfFriends';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsList: [],
      newFriend: '',
      newAge: 0,
      newEmail: ''
    }
  }

  handleSetData = data => this.setState({ friendsList: data });
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input
          type='text'
          placeholder='Name...'
          onChange={this.handleChange}
          name='newFriend'
          value={this.state.newFriend}
        />
        <input
          type='number'
          placeholder='Age...'
          onChange={this.handleChange}
          name='newAge'
          value={this.state.newAge}
        />
        <input
          type='text'
          placeholder='Email...'
          onChange={this.handleChange}
          name='newEmail'
          value={this.state.newEmail}
        />
        <button onClick={this.handleSubmit}>Submit New Friend</button>

        <ListOfFriends friendsData={this.state.friendsList} handleSetData={this.handleSetData} />
      </div>
    );
  }
}

export default App;
