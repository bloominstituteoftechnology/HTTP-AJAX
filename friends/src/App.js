import React, { Component } from 'react';
import axios from 'axios'
import Friends from './friends/friends';
import './App.css';
import FriendForm from './friends/friendsForm';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      newFriends: {
        name: "",
        age: "",
        email: ""
      }
    }
  }

  componentDidMount(){
    axios
        .get('http://localhost:5000/friends')
        .then(response => {
            this.setState(() => ({friends: response.data}));
        })
        .catch(error => {
            console.error('Server Error', error)
        })
  }

  handleChange = e => {
    this.setState({
      newFriends: {
        ...this.state.newFriends,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.newFriends.name)
  };

  addFriend = e => {
    e.preventDefault();
    this.addNewFriendsToServer(this.state.newFriends);
    this.setState({
        newFriends: {
          name: "",
          age: "",
          email: ""
        }
    });
  }

  addNewFriendsToServer = friend => {

    axios
    .post('http://localhost:5000/friends', friend)
    .then(res => {
      console.log(res.data);
      console.log(friend);
      this.setState({friends: res.data});
    })
    .catch(err => {
      console.log("Error", err)
    })
  }

  deleteOldFriends = id => {
    axios
    .delete(`http://localhost:5000/friends/${id}`)
    .then(res => {
      this.setState({friends: res.data})
    })
    .catch(err => {
      console.log("Error", err)
    })
  }


  updateFriends = id => {
    console.log(id)
    axios
    .put(`http://localhost:5000/friends/${id}` )
    .then(res => {
      this.setState({friends: res.data})
    })
    .catch(err => {
      console.log("Error", err)
    })
  }

  render() {
    return (
      <div className="App">
        <Friends friends={this.state.friends} editFriend={this.updateFriends} deleteFriend={this.deleteOldFriends} />
        <FriendForm typed={this.handleChange} {...this.state.newFriends} addFriend={this.addFriend}/>
      </div>
    );
  }
}

export default App;
