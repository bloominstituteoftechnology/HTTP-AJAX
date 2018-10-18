import React, { Component } from "react";

import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        id: 0,
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
    //we'll only add the new friend to the list if all fields are filled
    if (friend.name !== "" && friend.age !== "" && friend.email !== "") {
      this.setState({
        newFriend: {
          ...this.state.newFriend,
          id: this.state.friends.length + 1
        }
      });
      //POST request that sends newFriend on state and adds it to the URL
      axios
        .post("http://localhost:5000/friends", this.state.newFriend)
        .then(res => {
          //if successful, will set state to new data returned from the response
          //which now includes the new friend
          this.setState({ friends: res.data });
        })
        .catch(err => {
          //otherwise logs an error
          console.log(err, "You borked it");
        });
      //after POST and state reset, next reset input fields by setting newFriend on state back to default
      //ONLY do this if input was successful. nobody wants to have to re-enter
      //all the fields in a form just because they missed one, right?
      this.setState({
        newFriend: {
          id: 0,
          name: "",
          age: "",
          email: ""
        }
      });
    } else {
      //if not all fields have been filled, throws alert to this effect
      alert(
        "Are you sure you know this person? Fill out all fields if they're really your friend."
      );
    }
  };

  deleteFriend = (event, id) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err, "You totally beefed it"));
    console.log(id);
  };

  changeHandler = (key, value) => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [key]: value
      }
    });
  };

  render() {
    if (!this.state.friends.length || !this.state.friends) {
      return <h2>Wait</h2>;
    } else {
      return (
        <div className="App">
          <h1>Happy Lambda Friends</h1>
          <div className="app-container">
            <div className="friend-container-wrapper">
              {this.state.friends.map(friend => (
                <div className="friend-container" key={friend.id}>
                  <div
                    className="delete-button"
                    onClick={event => this.deleteFriend(event, friend.id)}
                  >
                    X
                  </div>
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
}

export default App;
