import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const blankFriend = {
  name: '',
  age: '',
  email: ''
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: '',
        age: '',
        email: '',
      }
    }
  }

  

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error))
  }

  changeHandler = (event) => {
    this.setState({ newFriend: {
      ...this.state.newFriend,
      [event.target.name]: event.target.value
    } })
  }

  addFriend = event => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/friends', this.state.newFriend)
      .then(response => {
        this.setState({ 
          friends: response.data,
          newFriend: blankFriend, 
        })
      });
    
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.addFriend}>
          <input name="name" onChange={this.changeHandler} value={this.state.newFriend.name} type="text" placeholder="name" />
          <input name="age" onChange={this.changeHandler} value={this.state.newFriend.age} type="number" placeholder="age" />
          <input name="email" onChange={this.changeHandler} value={this.state.newFriend.email} type="text" placeholder="email" />
          <input onClick={this.addFriend} value="Submit" type="submit" />
        </form>

        {this.state.friends.map(friend => (
        <div
          className="friend-card"
          key={friend.email}
        >
          <p>{friend.name}</p>
          <p>{friend.age}</p>
          <p>{friend.email}</p>
        </div>
      ))}
      </div>
    );
  }
}

export default App;
