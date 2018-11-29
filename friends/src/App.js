import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './Components/FriendsList'
import FriendForm from './Components/FriendForm.js'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      inputName : '',
      inputAge : '',
      inputEmail : '',
    }
  }

  savingState = () => {
    this.setState({
      friends: res.data,
    })
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then( res => {
        console.log(res.data);
        this.savingState()
      })
      .catch(err => {
        console.log('ERR')
      })
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  addFriend = (e) => {
    e.preventDefault();
    const friend = {
      name: this.state.inputName,
      email: this.state.inputEmail,
      age: Number(this.state.inputAge) || 0,
      //id: Math.max(...(this.state.friends.map(friend => friend.id))) + 1,
    }

    axios
      .post(
        'http://localhost:5000/friends'
        , friend)
      .then(res => (
        this.setState({
          friends: res.data,
          inputName: '',
          inputAge: '',
          inputEmail: '',
        })
      ))
      .catch(err => console.log(err))
  }

  deleteFriend = (id) => {
    axios
      .delete(
        `http://localhost:5000/friends/${id}`
        )
      .then(res => {
        this.savingState()
      })
      .catch(err => console.log(err))
  }

  updateFriend = (id) => {
    axios
      .put(`http://localhost:5000/friends/${id}`,
      {
        
      })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  render() {
    return (
      
      <div className="App">
        
        <FriendForm 
          addFriend={this.addFriend}
          inputName={this.state.inputName} 
          inputAge={this.state.inputAge} 
          handleInputChange={this.handleInputChange}
          inputEmail={this.state.inputEmail} />
        <FriendsList 
          friends={this.state.friends}
          deleteFriend={this.deleteFriend} />
          
      </div>
    );
  }
}

export default App;
