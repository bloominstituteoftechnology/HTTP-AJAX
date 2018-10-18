import React, { Component } from 'react';

import './App.css';
import FriendsList from './components/friendsList';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      name: '',
      age: '',
      email: ''
    };
  }

  editFriendHandle = data => {
    this.setState({ friendsData: data, name: "", age: "", email: "" })
  }
  componentDidMount() {
    axios.get('http://localhost:5000/friends').then(response => {
      console.log(response);
      this.setState({ friendsData: response.data });
    })
      .catch(err => {
        console.log(err);
      });
  }


  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  }


  addFriend = event => {
    event.preventDefault();
    const newFriends = { name: this.state.name, age: this.state.age, email: this.state.email }
    axios.post('http://localhost:5000/friends', newFriends)
      .then(response => {
        this.setState({ friendsData: response.data, name: "", age: "", email: "" });
      })
      .catch(err => {
        console.log(err);
      });

  }
  render() {
    return (
      <div className="App">
        <FriendsList editFriendHandle={this.editFriendHandle} friends={this.state.friendsData}
          addFriend={this.addFriend}
          changeHandler={this.changeHandler}
        />
      </div>
    );
  }
}

export default App;
