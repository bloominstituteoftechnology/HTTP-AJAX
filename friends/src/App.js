import React, { Component } from 'react';
import axios from 'axios'
import Friends from './components/Friends';
import './App.css';
import FriendForm from './components/FriendsForm';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      newFriend: {
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
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.newFriend.name)
  };

  addFriend = e => {
    e.preventDefault();
    this.addNewFriends(this.state.newFriend);
    this.setState({
      newFriend: {
        name: "",
        age: "",
        email: ""
      }
    });
  }

  addNewFriends = friend => {

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

  deleteFriend = id => {
    axios
        .delete(`http://localhost:5000/friends/${id}`)
        .then(res => {
          this.setState({friends: res.data})
        })
        .catch(err => {
          console.log("Error", err)
        })
  }


  editFriend = id => {
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
          <Friends friends={this.state.friends} editFriend={this.editFriend} deleteFriend={this.deleteFriend} />
          <FriendForm typed={this.handleChange} {...this.state.newFriend} addFriend={this.addFriend}/>
        </div>
    );
  }
}

export default App;