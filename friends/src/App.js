import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendList from './FriendList';
import Friend from './Friend'; 
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
    axios.get('http://localhost:5000/friends').then(response => {
        console.log("GET RESPONSE: ", response);
        this.setState({ friendsData: response.data });
      }).catch(err =>{
        console.log(err);
      });
   }

   
  handleFriendNameInput = e => {
    this.setState({ friendName: e.target.value });
  }

  handleFriendAgeInput = e => {
     this.setState({ friendAge: e.target.value });
  }
  
  handleFriendEmailInput = e => {
    this.setState({ friendEmail: e.target.value });
  }
    // you wouldn't put a post in your lifecycle method unless you wanted your data to be created automatically
    
  handleSubmitFriend = (e) => {
    e.preventDefault();
    const friend = { name: this.state.friendName, age: this.state.friendAge, email: this.state.friendEmail };
    axios
      .post('http://localhost:5000/friends', friend)
      .then(response => {
        console.log("POST RESPONSE: ", response);
        this.setState({ friendsData: response.data, friendName: '', friendAge: '', friendEmail: '' });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <Link className="add-friend-link" to="/add_friends">Click here to start adding friends</Link>
          </header>
          <Route path="/add_friends" render={props => <Friend 
            props = {this.state}
            handleFriendNameInput={this.handleFriendNameInput}
            handleFriendAgeInput={this.handleFriendAgeInput}
            handleFriendEmailInput={this.handleFriendEmailInput}
            handleSubmitFriend={this.handleSubmitFriend}/>} 
          />
          <FriendList friends={this.state.friendsData}/>
        </div>
    );
  }
}

App.propTypes = {
  friendName: PropTypes.string,
  friendAge: PropTypes.number,
  friendEmail: PropTypes.string
}

export default App;
