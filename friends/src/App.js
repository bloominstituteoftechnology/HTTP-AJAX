import React, { Component } from "react";

import axios from "axios";
import "./App.css";
import { Route } from "react-router-dom";
import FriendContainer from "./components/FriendContainer";
import AddFriendForm from "./components/AddFriendForm";

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
      return (
        <div className="App">
          <h1>Loading friends...</h1>
        </div>
      );
    } else {
      return (
        <div className="App">
          <h1>Friend Face</h1>
          <div className="app-container">
            <Route
              exact
              path="/"
              render={ownProps => (
                <FriendContainer {...ownProps} friends={this.state.friends} />
              )}
            />
            <Route
              exact
              path="/AddFriend"
              render={ownProps => (
                <AddFriendForm
                  {...ownProps}
                  newFriend={this.state.newFriend}
                  changeHandler={this.changeHandler}
                  addFriend={this.addFriend}
                />
              )}
            />
          </div>
        </div>
      );
    }
  }
}

export default App;
