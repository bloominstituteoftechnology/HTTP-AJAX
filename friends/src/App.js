import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import FriendFormPage from './components/Friends/FriendFormPage';
import FriendsListPage from './components/Friends/FriendsListPage';

const API_URL = 'http://localhost:5000/friends';

class App extends Component {

  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  onSubmitFriend = (friend) => {
    friend.age = Number(friend.age);
    axios
      .post(API_URL, friend)
      .then(response => {
        console.log('posted', response);
        this.setState({ friends: response.data});
        window.location.href = '/';
      })
      .catch(error => console.log(error));
  };

  onDeleteFriend = id => {
    axios
      .delete(`${API_URL}/${id}`)
      .then(response => {
        console.log('posted', response);
        this.setState({ friends: response.data});
      })
      .catch(error => console.log(error));
    console.log(id);
  }

  componentDidMount() {
    axios.get(API_URL)
    .then(response => {
      this.setState({friends: response.data});
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div id="app">
        <Route exact path="/" render={(props) => <FriendsListPage {...props} friends={this.state.friends} onDeleteFriend={this.onDeleteFriend} />} />
        <Route path="/add" render={(props) => <FriendFormPage {...props} formType='add' onSubmitFriend={this.onSubmitFriend}  />} />
        <Route path="/update/:friendID" render={(props) => <FriendFormPage {...props} formType='update' onFriendChange={this.onFriendChange} onSubmitFriend={this.onSubmitFriend} friends={this.state.friends} />} />
      </div>
    );
  }
}

export default App;
