import React, { Component } from "react";
import axios from "axios";
import "./FriendCard.css";

class FriendCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: "",
      showUpdateFriend: false
    };
  }

  handleTextInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  showUpdateFriend = () => {
    this.setState({ showUpdateFriend: !this.state.showUpdateFriend });
  };

  // delete friend details
  deleteFriend = friendId => {
    axios
      .delete(`http://localhost:5000/friends/${friendId}`)
      .then(respose => {
        this.props.getFriends();
      })
      .catch(err => {
        console.log(err);
      });
  };

  // update friend details
  updateFriend = friendId => {
    const friend = {};
    // if field is left blank, don't change anything
    if (this.state.title !== "") {
      friend.name = this.state.name;
    }
    if (this.state.age !== "") {
      friend.age = this.state.age;
    }
    if (this.state.email !== "") {
      friend.email = this.state.email;
    }
    axios
      .put(`http://localhost:5000/friends/${friendId}`, friend)
      .then(reponse => {
        this.setState({
          showUpdateFriend: false,
          name: "",
          age: "",
          email: ""
        });
        this.props.getFriends();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { friend } = this.props;
    console.log(friend);
    return (
      <div key={friend.id} className="friend-container">
        <div className="friend-card">
          <div className="friend-name">
            <h3>Name: {friend.name}</h3>
          </div>
          <div className="friend-age">
            <h3>Age: {friend.age}</h3>
          </div>
          <div className="friend-email">
            <h3>email: {friend.email}</h3>
          </div>
          <button onClick={() => this.deleteFriend(friend.id)}>
            Unfriend / Delete
          </button>
          <button onClick={this.showUpdateFriend}>Update friend</button>
        </div>

        {/* if showUpdateFriend: show input field for edit, else don't display */}
        {this.state.showUpdateNote ? (
          <div>
            <input
              type="text"
              onChange={this.handleTextInput}
              placeholder="Name"
              name="name"
              value={this.state.name}
            />
            <input
              type="number"
              min="0"
              step="1"
              max="110"
              onChange={this.handleTextInput}
              placeholder="Age"
              name="age"
              value={this.state.age}
            />
            <input
              type="text"
              onChange={this.handleTextInput}
              placeholder="email"
              name="email"
              value={this.state.email}
            />
            <button onClick={() => this.updateFriend(friend.id)}>
              Save Update
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default FriendCard;
