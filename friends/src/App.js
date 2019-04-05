import React, { Component } from 'react';
import './App.css';
import FriendsList from './component/FriendsList';
import FriendForm from './component/FriendForm';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        friends: []
     };
    }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
        this.setState({ friends: response.data });
    })
    .catch(error => {
        console.log('OOPS', error);
    })
  }

  updateFriend = (id, updatedFriend) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, updatedFriend)
      .then(response => {
        this.setState({ friends: response.data });
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  addFriend = (friend) => {
    console.log('adding friend');
    axios
      .post('http://localhost:5000/friends', friend)
      .then(response => {
        console.log(response.data)
        this.setState({
          friends: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };


  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        console.log(response.data);
        this.setState({
          friends: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };


  render() {
    return (
      <div>
        <FriendForm addFriend={this.addFriend} />
        <h1>The Team</h1>
        {this.state.friends.map(friend =>(
          <FriendsList updateFriend={this.updateFriend} deleteFriend={this.deleteFriend} friend={friend} key={friend.id} />
        ))}
      </div>
    );
  }
}

export default App;
