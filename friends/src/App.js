import React, { Component, Fragment } from 'react';
import axios from 'axios';
import FriendsForm from './components/FriendsForm';
import FriendsList from './components/FriendsList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      friendName: '',
      friendAge: '',
      friendEmail: ''
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        console.log(response);
        this.setState({friendsData: response.data});
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleNameChange = e => {
    this.setState({friendName: e.target.value});
  }

  handleAgeChange = e => {
    this.setState({friendAge: Number(e.target.value)});
  }

  handleEmailChange = e => {
    this.setState({friendEmail: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();

    const friend = {
      'id': this.state.friendsData.length + 1,
      'name': this.state.friendName,
      'age': Number(this.state.friendAge),
      'email': this.state.friendEmail
    };

    axios.post('http://localhost:5000/friends', friend)
      .then(response => {
        console.log("POST RESPONSE", response);
        this.setState({
          friendsData: response.data,
          friendName: '',
          friendAge: '',
          friendEmail: ''
        }) 
      })
      .catch(error => console.log(error));
  }
  
  render() {
    return (
      <Fragment>
        <div className="App">
          <h1>Friends App</h1>
          <FriendsForm
            handleNameChange={this.handleNameChange}
            handleAgeChange={this.handleAgeChange}
            handleEmailChange={this.handleEmailChange}
            handleSubmit={this.handleSubmit}
            friendName={this.state.friendName}
            friendAge={this.state.friendAge}
            friendEmail={this.state.friendEmail}
          />
          <FriendsList friendsData={this.state.friendsData} />
        </div>
      </Fragment>
    );
  }
}

export default App;
