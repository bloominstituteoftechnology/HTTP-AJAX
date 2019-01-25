import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

const baseUrl = 'http://localhost:5000';

const clearedFriend = {
  name: '',
  age: '',
  email: ''
}

class App extends Component {
  state = {
    friends: [],
    error: '',
    friend: clearedFriend,
    isUpdating: false
  }

  componentDidMount() {
    axios.get(`${baseUrl}/friends`)
      .then(res => {
        this.setState({
          friends: res.data,
          error: ''
        })
      })
      .catch(err => {
          this.setState({
            error: err.message
          })
      })
  }

  handleChanges = (e) => {
    e.persist();
    this.setState(prevState => {
      return {
        friend: {
          ...prevState.friend,
          [e.target.name]: e.target.value
        }
      }
    })
  }
  
  addFriend = () => {
      axios
        .post(`${baseUrl}/friends`, this.state.friend)
        .then(res => this.setState({
          friends: res.data
        }))
        .catch(err => console.log(err))
  }

  deleteFriend = (e, itemId) => {
      e.preventDefault()
      axios
        .delete(`${baseUrl}/friends/${itemId}`)
        .then(res => this.setState({
          friends: res.data
        }))
        .catch(err => console.log(err))
  }

  populateFriend = (e, itemId) => { 
    e.preventDefault();
    this.setState({ 
      friend: this.state.friends.find( friend => friend.id === itemId),
      isUpdating: true
    })
  }

  updateFriend = () => {
    axios
      .put(`${baseUrl}/friends/${this.state.friend.id}`, this.state.friend)
      .then(res => {
        this.setState({ 
          friends: res.data, 
          isUpdating: false, 
          friend: clearedFriend
        })})
      .catch(err => {console.log(err)})
  }

  render() {
    return (
      <div className="App">
        <FriendsList deleteFriend={this.deleteFriend} friends={this.state.friends} populateFriend={this.populateFriend}/>
        <FriendForm isUpdating={this.state.isUpdating} friend={this.state.friend} handleChanges={this.handleChanges} addFriend={this.addFriend} updateFriend={this.updateFriend}/>
      </div>
    );
  }
}

export default App;
