import React, { Component } from "react";
import FriendForm from "./FriendForm";
import axios from "axios";
class FriendCard extends Component {
  constructor(props) {
    super(props);
    this.unFriend = props.unFriend;
    this.state = {
      ...props.friend,
      isUpdating: false
    };
  }
  updateToggle = (e = null) => {
      if (e){
    e.preventDefault()};
    this.setState({ isUpdating: !this.state.isUpdating });
  };

  pullFriendsData = () => {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  };

  changeHandler = e => {
    let targetName = e.target.name;
    this.setState({ [targetName]: e.target.value });
  };

  updateFriend = e => {
    e.preventDefault();
    let friendId = e.target.id;
    console.log(friendId);
    let updatedFriend = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age
    };
    axios
      .put(`http://localhost:5000/friends/1`, updatedFriend)
      .then(() => {
        this.pullFriendsData();
        this.updateToggle();
      });
  };

  render() {
    let friend = this.state;

    return (
      <div
        key={friend.id}
        style={{
          border: "red solid 1px",
          width: "250px",
          margin: "10px auto",
          paddingBottom: "10px"
        }}
      >
        <h4> {friend.name}</h4> <p>age: {friend.age}</p>
        <p>email: {friend.email}</p>
        <button id={friend.id} onClick={this.state.isUpdating ? this.updateToggle: this.unFriend}>
          X
        </button>
        <button
          id={friend.id}
          className={this.state.isUpdating ? "none" : ""}
          onClick={this.updateToggle}
        >
          Update
        </button>
        <FriendForm
          submitHandler={this.updateFriend}
          changeHandler={this.changeHandler}
          newFriend={friend}
          display={this.state.isUpdating}
        />
      </div>
    );
  }
}

export default FriendCard;
