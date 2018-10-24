import React, { Component } from 'react';
import './App.css';
import FriendList from './Component/FriendList';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()

    this.state = {
      friends: [],
      id: '',
      name: '',
      age: '',
      email: '',
    }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => {
        console.log('This is the axios');
        console.log(response.data);
        this.setState({ friends: response.data })
      })
      .catch(console.log('error!'))
  }

  name = (event) => {
    const newName = event.target.value;
    this.setState({
      name: newName
    })
  }

  age = (event) => {
    const newAge = event.target.value;
    this.setState({
      age: newAge
    })
  }

  email = (event) => {
    const newEmail = event.target.value;
    this.setState({
      email: newEmail
    })
  }

  addFriend = (event) => {
    event.preventDefault();
    let newId = this.state.friends.length + 1;
    this.setState({
      id: newId
    })

    const newFriend = {
      id: this.state.id,
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

  render() {
    return (
      <div className="App">
        {this.state.friends.map(friend => (
          <FriendList key={friend.id} friend={friend} />
        ))}
        <form>
          <input placeholder='Name' onChange={this.name}></input>
          <input placeholder='Age' onChange={this.age}></input>
          <input placeholder='Email' onChange={this.email}></input>
          <button onClick={this.addFriend}>Save</button>
        </form>
      </div>
    );
  }
}

export default App;
