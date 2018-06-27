import React, { Component } from "react";
import axios from "axios";

class ListOfFriends extends Component {
  state = {
    friends: []
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(function(response) {
        console.log(response);
        const friends = response.data;
        this.setState({ friends: friends });
        console.log(this.state);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return <ul>{this.state.friends.map(friend => <li>{friend.name}</li>)} </ul>;
  }
}

export default ListOfFriends;
