import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import "./FriendCard.css";
import AddFriend from "./AddFriend";

class FriendCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onDelete: props.refresh,
      friend: props,
      name: "",
      age: "",
      email: ""
    };
  }

  handleEditChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const newFriend = {};
    newFriend.name = this.state.name;
    newFriend.age = this.state.age;
    newFriend.email = this.state.email;
    newFriend.id = this.state.friend.id;
    this.updateFriend(newFriend);
    this.setState({ friend: newFriend });
  };

  updateFriend = friend => {
    axios
      .put(`http://localhost:5000/friends/${this.state.friend.id}`, friend)
      .then(response => {
        console.log("Server Updated");
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteFriend = () => {
    axios
      .delete(`http://localhost:5000/friends/${this.state.friend.id}`)
      .then(response => {
        console.log("Entry Deleted");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const friend = this.state.friend;
    return (
      <div>
        <Route
          path={`/${friend.name.replace(/ /g, "")}/edit`}
          render={() => {
            return (
              <AddFriend
                onChange={this.handleEditChange}
                onClick={this.handleSubmit}
              />
            );
          }}
        />
        <div className="card-container">
          <Link to={`/${friend.name.replace(/ /g, "")}`} className="card-link">
            <h4>{friend.name}</h4>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </Link>
          <div className="card-button-container">
            <Link to={`/${friend.name.replace(/ /g, "")}/edit`}>
              <button>Edit</button>
            </Link>
            <Link to="/">
              <button onClick={this.deleteFriend}>Delete</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default FriendCard;
