import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Friends from "./components/Friends";
import FriendForm from "./components/FriendForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.error("Server Get", err);
      });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addFriend = e => {
    e.preventDefault();
    axios.post("http://localhost:5000/friends", {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }).catch(err => {
      console.error("Server Post", err);
    });
    this.componentDidMount();
  };

  deleteFriend = e => {
    axios
      .delete(`http://localhost:5000/friends/${e.target.id}`)
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.error("Server Delete", err);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Friends List</h1>
        </header>
        <FriendForm
          onChange={this.handleInputChange}
          onSubmit={this.addFriend}
        />
        <Friends friends={this.state.friends} delete={this.deleteFriend} />
        <footer>
          This friends list is a compilation of my and/or your friends,
          and no one else's.
          <br /> Fake Copyright Company &copy;
        </footer>
      </div>
    );
  }
}

export default App;
