import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Friends from './components/Friends.js';
import FriendForm from './components/FriendForm.js';
import FriendCard from './components/FriendCard.js';
import './App.css';

const url = 'http://localhost:5000/friends';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      loading: true,
      friendName: '',
      friendAge: '',
      friendEmail: '',
      number: undefined
    }
  }

  componentDidMount() {
    axios.get(url).then(response => this.setState({friends: response.data, loading: false, number: response.data.length}));
  }

  addValueHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addNewFriendHandler = (e) => {
    e.preventDefault();
    const newfriend = {
      id: this.state.number +1,
      name: this.state.friendName,
      age: this.state.friendAge,
      email: this.state.friendEmail
    };
    axios.post(url, newfriend)
    .then(result => {
      this.setState({
      friendName: '',
      friendAge: '',
      friendEmail: '',
      friends: result.data,
      number: newfriend.id
    })
  });
  }

  reSetState = () => {
    axios.get(url)
    .then(response => this.setState({friends: response.data}))
    .catch(error => {
      console.error(error);
    });
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={props => <FriendForm {...props} newFriendName={this.state.friendName} newFriendAge={this.state.friendAge} newFriendEmail={this.state.friendEmail} valueAdd={this.addValueHandler} submitFriend={this.addNewFriendHandler} />} />
        <Route exact path='/' render={props => <Friends {...props} friends={this.state.friends} loading={this.state.loading} />} />
        <Route path='/:id' render={props => <FriendCard {...props} friends={this.state.friends} reSetState={this.reSetState} />} />
      </div>
    );
  }
}

export default App;
