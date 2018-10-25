import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import FriendsList from './components/FriendsList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      email: "",
      age: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  getFriend = friend => {
    const selectedFriend = {
      name: friend.name,
      email: friend.email,
      age: friend.age
    };
    this.setState(selectedFriend);
  };

  addFriend = () => {
    const newFriend = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age
    };

    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  };

  updateFriend = id => {
    const friendUpdate = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age
    };
  
    axios
      .put(`http://localhost:5000/friends/${id}`, friendUpdate)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
    }


  render() {
    return (
      <div className="app">
        <h1>Friends List</h1>
        <form>
          <input
            type="text"
            placeholder="name"
            onChange={this.handleChange}
            name="name"
            value={this.state.name}
          />
          <input
            type="email"
            placeholder="email"
            onChange={this.handleChange}
            name="email"
            value={this.state.email}
          />
          <input
            type="number"
            placeholder="age"
            onChange={this.handleChange}
            name="age"
            value={this.state.age}
          />
          <button className="button" onClick={this.addFriend}>
            Add Friend
          </button>
        </form>
        <button className='button' onClick={id => this.updateFriend(id)}>Update Friend</button>
        <FriendsList friends={this.state.friends}
        handleClick={this.getFriend} />
      </div>
    )
  }
}

export default App;
