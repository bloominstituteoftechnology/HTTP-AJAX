import React, { Component } from "react";
import axios from "axios";

class ListOfFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log(response);
        const friends = response.data;
        this.setState({ friends });
        console.log(this.state);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <ul>
        {this.state.friends.map(friend => (
          <li>
            Name: {friend.name} Age: {friend.age} Email: {friend.email}
          </li>
        ))}{" "}
      </ul>
    );
  }
}

export default ListOfFriends;
