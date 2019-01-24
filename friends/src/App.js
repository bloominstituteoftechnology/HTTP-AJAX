import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

const baseUrl = 'http://localhost:5000';

class App extends Component {
  state = {
    friends: [],
    error: '',
    friend: {
      name: '',
      age: '',
      email: ''
    }
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
    console.log(e.target.value)
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

  addFriend = (e) => {
    console.log(e)
    axios.post(`${baseUrl}/friends`, this.state.friend)
      .then(res => {
        this.setState({ friends: res.data})
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friends}/>
        <FriendForm handleChanges={this.handleChanges} addFriend={this.addFriend} friend={this.state.friend} />
      </div>
    );
  }
}

export default App;
