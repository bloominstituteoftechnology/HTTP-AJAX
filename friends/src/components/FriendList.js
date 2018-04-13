import React, { Component } from "react";
import axios from "axios";
import Friend from "./Friend";
import FriendForm from "./FriendForm";

export default class FriendList extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }
  // fetch data from server
  // note: pass this to FriendForm (addFriend) to update FriendList

  componentDidMount() {
    this.getFriendList();
  }

  getFriendList = () => {
    axios
      .get(`http://localhost:5000/friends`)
      //   fetch data and store it in state
      .then(response => {
        //   console.log('response:', response);
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  };

  render() {
    return (
      <div>
        <FriendForm getFriendList={() => this.componentDidMount()} />
        {this.state.friends.map((friend, index) => (
          <Friend
            key={index}
            friend={friend}
            getFriendList={() => this.componentDidMount()}
          />
        ))}
      </div>
    );
  }
}
