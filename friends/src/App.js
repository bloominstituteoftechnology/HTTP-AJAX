import React, { Component } from 'react';
import './App.css';
import FriendList from './Component/FriendList';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()

    this.state = {
      friends: [],
      name: '',
      age: '',
      email: '',
    }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => {
        this.setState({ friends: response.data })
      })
      .catch(error => console.log('error!'))
  }

  inputHandler = (event) => {
    this.setState({
      [event.target.id]: (event.target.value)
    })

  }

  addFriend = (event) => {
    event.preventDefault();

    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    }

    axios
      .post(`http://localhost:5000/friends`, newFriend)
      .then(response => {
        this.setState({
          friends: response.data,
        })
      })
      .catch(error => { console.log('error!') })

  }

  deleteFriend = id => {
    return () => {
      axios
        .delete(`http://localhost:5000/friends/${id}`)
        .then(response => {
          this.setState({
            friends: response.data
          })
        })
        .catch(error => { console.log('error!') })
    }
  }

  updateFriend = (id, name, age, email) => {
    console.log(id, name, age, email)
    axios
      .put(`http://localhost:5000/friends/${id}`, {
        name: name,
        age: age,
        email: email
      })
      .then(response => {
        this.setState({
          friends: response.data
        })
      })
      .catch(error => console.log('error!'))
  }

  render() {
    return (
      <div className="App">
        <form>
          <input placeholder='Name' onChange={this.inputHandler} id='name'></input>
          <input placeholder='Age' onChange={this.inputHandler} id='age'></input>
          <input placeholder='Email' onChange={this.inputHandler} id='email'></input>
          <button onClick={this.addFriend}>Save</button>
        </form>
        {this.state.friends.map(friend => (
          <FriendList
            key={friend.id}
            friend={friend}
            deleteFriend={this.deleteFriend}
            updateFriend={this.updateFriend}
          />
        ))}
      </div>
    );
  }
}

export default App;
