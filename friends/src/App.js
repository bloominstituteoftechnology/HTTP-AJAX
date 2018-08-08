import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Friends from './components/Friends.js';
import FriendForm from './components/FriendForm.js';
import './App.css';

const url = 'http://localhost:5000/friends';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      loading: true,
      friendName: '',
      friendAge: undefined,
      friendEmail: '',
      number: undefined
    }
  }

  componentDidMount() {
    axios.get(url).then(response => this.setState({friends: response.data, loading: false, number: response.data.length}));
  }

  addNameHandler = (e) => {
    this.setState({
      friendName: e.target.value.toString()
    })
  }

  addAgeHandler = (e) => {
    this.setState({
      friendAge: parseInt(e.target.value)
    })
  }

  addEmailHandler = (e) => {
    this.setState({
      friendEmail: e.target.value.toString()
    })
  }

  addNewFriendHandler = (e) => {
    e.preventDefault();
    const newfriend = {
      id: this.state.number +1,
      name: this.state.friendName,
      age: this.state.friendAge,
      email: this.state.friendEmail
    }
    axios.post('http://localhost:5000/friends', newfriend)
    .then(result => {
      this.setState({
      friendName: '',
      friendAge: undefined,
      friendEmail: '',
      friends: result.data
    });
  })
  console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <Route path='/' render={props => <Friends {...props} friends={this.state.friends} loading={this.state.loading} />} />
        <Route path='/' render={props => <FriendForm {...props} newFriendName={this.state.friendName} newFriendAge={this.state.friendAge} newFriendEmail={this.state.friendEmail} nameAdd={this.addNameHandler} ageAdd={this.addAgeHandler} emailAdd={this.addEmailHandler} />} />
      </div>
    );
  }
}

export default App;
