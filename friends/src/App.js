import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './components/friendsList.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newName: "",
      newAge: "",
      newEmail: ""
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log("GET RESPONSE: ", response);
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addFriend = () => {
    const friend = {
      name: this.state.newName,
      age: this.state.newAge,
      email: this.state.newEmail
    };
    axios
      .post("http://localhost:5000/friends", friend)
      .then(response => {
        console.log("POST RESPONSE", response);
        this.setState({ friends: response.data, newName: "", newAge: "", newEmail: "", });
      })
      .catch(error => console.log(error));
  };

  removeFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        console.log(response);
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(err);
      })
  }

  newname = e => {
    this.setState({ newName: e.target.value });
  };

  newage = e => {
    this.setState({ newAge: e.target.value });
  };

  newemail = e => {
    this.setState({ newEmail: e.target.value });
  };

  render() {

    const handlers = {
      name: this.newname,
      age: this.newage,
      email: this.newemail,
      add: this.addFriend,
      delete: this.removeFriend
    }

    const values = {
      name: this.state.newName,
      age: this.state.newAge,
      email: this.state.newEmail
    }

    return (
      <div className="App">
        <h3>Friends</h3>
        <FriendsList friends={this.state.friends} handlers={handlers} values={values} />
      </div>
    );
  }
}

export default App;
