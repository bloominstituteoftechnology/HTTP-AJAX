import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './components/FriendsList';

class App extends Component {
  state = {
    friendsData: [],
    name: "",
    age: "",
    email: ""
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friendsData: response.data });
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleFriendSubmit = () => {
    const id = (this.state.friendsData[this.state.friendsData.length - 1].id + 1);
    const newFriend = { id: id, name: this.state.name, age: this.state.age, email: this.state.email };

    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(response => {
        this.setState({ friendsData: response.data, name: "", age: "", email: "" });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="container">
        <div className="form-and-friends-container">
          <form>
            <input
              autoComplete="off"
              type="text"
              placeholder="Name"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <input
              autoComplete="off"
              type="text"
              placeholder="Age"
              name="age"
              onChange={this.handleChange}
              value={this.state.age}
            />
            <input
              autoComplete="off"
              type="text"
              placeholder="Email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <button onClick={this.handleFriendSubmit}>Submit</button>
          </form>
          <FriendsList friends={this.state.friendsData} />
        </div>
      </div>
    );
  }
}

export default App;
