import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import axios from 'axios';

import FriendsList from './components/FriendsList';

class App extends Component {
  constructor () {
    super();
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: ''
    }
  }
 
  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(friendsData => this.setState({ friends: friendsData.data }))
    .catch(error => console.log(error));
  }
 
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  addNewFriend = () => {
    const newFriendObj = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
    axios.post('http://localhost:5000/friends', newFriendObj)
    .then(response => {this.setState({ friends: response.data })})
    .catch((err) => console.log(err))
  }

  updateFriends = (data) => {
    this.setState({friends: data});
  }

  editFriend = (id) => {
    const updatedFriendObj = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
    axios.put(`http://localhost:5000/friends/${id}`, updatedFriendObj)
    .then(response => {
      this.setState({
        friends: response.data
      })
    })
    .catch((err) => console.log(err))
  }

  deleteFriend = (id) => {
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then(response => {
      this.setState({
        friends: response.data
      })
    })
    .catch((err) => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        <Route render={(props) => <FriendsList {...props} friendList = {this.state.friends}/>} />
        <form onSumbit={this.addNewFriend}>
          <input onChange={this.handleChange} name="name" placeholder="name" value={this.state.name} type="text" />
          <input onChange={this.handleChange} name="age" placeholder="age" value={this.state.age} type="number" />
          <input onChange={this.handleChange} name="email" placeholder="email" value={this.state.email} type="email" />
        </form>
        <button className="buttons" onClick={this.addNewFriend}>Add</button>
        <button className="buttons" onClick={() => this.editFriend(this.state.editId)}>Edit</button>
        <button className="buttons" onClick={() => this.deleteFriend(this.state.deleteId)}>Delete</button>
      </div>
    );
  }
}

export default App;