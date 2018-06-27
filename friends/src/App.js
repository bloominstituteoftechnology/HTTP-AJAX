import React, { Component } from 'react';
import axios from 'axios';
import FriendForm from './components/Friends/FriendForm';
import FriendsList from './components/Friends/FriendsList';

class App extends Component {

  constructor() {
    super();
    this.state = {
      friends: [],
      friend: {
        id: '',
        name: '',
        age: 0,
        email: ''
      }
    };
  }

  onFriendChange = e => {
    const friendVals = this.state.friend;
    friendVals[e.target.name] = e.target.value;
    this.setState({ friend: friendVals });
  };

  onSubmitFriend = e => {
    e.preventDefault();
    const formElement = e.target.parentElement;
    const friendID = this.state.friends.length + 1;
    const friend = {
      id: friendID,
      name: this.state.friend.name,
      age: Number(this.state.friend.age),
      email: this.state.friend.email
    };
    axios
      .post("http://localhost:5000/friends", friend)
      .then(response => {
        console.log('posted', response);
        this.setState({ friends: response.data, friend: {
          name: '', age: undefined, email: ''
        }});
        formElement.reset();
      })
      .catch(error => console.log(error));
  };

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
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
        <FriendForm onFriendChange={this.onFriendChange} onSubmitFriend={this.onSubmitFriend} />
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
