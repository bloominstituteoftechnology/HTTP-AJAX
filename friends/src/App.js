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

  render() {
    return (
      <div className="App">
        <Friends friends={this.state.friends} />
        <FriendForm addNewFriendsToServer={this.addNewFriendsToServer}/>
      </div>
    );
  }
}

export default App;
