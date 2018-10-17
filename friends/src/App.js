import React, { Component } from "react";

import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err, "Ya done goofed"));
  }

  addFriend = event => {
    event.preventDefault();
    let friend = this.state.newFriend;
    if (friend.name && friend.age && friend.email) {
      //add friend to list if all fields have had something entered
    } else {
      alert(
        "You clearly don't know enough about them. Fill out all fields if they're really your friend."
      );
      this.setState({
        newFriend: {
          name: "",
          age: "",
          email: ""
        }
      });
    }
  };

  changeHandler = (key, value) => {
    this.setState({
      newFriend: {
        [key]: value
      }
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Happy Lambda Friends</h1>
        <div className="app-container">
          <div className="friend-container-wrapper">
            {this.state.friends.map(friend => (
              <div className="friend-container" key={friend.id}>
                <h3 className="friend-name">{friend.name}</h3>
                <p className="friend-age">{friend.age}</p>
                <p className="friend-email">{friend.email}</p>
              </div>
            ))}
          </div>
          <div className="new-friend-form">
            <h2>Made a new friend?</h2>
            <form onSubmit={this.addFriend}>
              <input
                className="add-friend-name"
                type="text"
                placeholder="Name"
                onChange={event =>
                  this.changeHandler("name", event.target.value)
                }
                value={this.state.newFriend.name}
              />
              <input
                className="add-friend-age"
                type="text"
                placeholder="Age"
                onChange={event =>
                  this.changeHandler("age", event.target.value)
                }
                value={this.state.newFriend.age}
              />
              <input
                className="add-friend-email"
                type="text"
                placeholder="Email"
                onChange={event =>
                  this.changeHandler("email", event.target.value)
                }
                value={this.state.newFriend.email}
              />
              <button>Add</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
