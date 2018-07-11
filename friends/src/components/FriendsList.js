import React, { Component } from "react";
import axios from "axios";

class FriendsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/friends`).then(response => {
      console.log(response);
      this.setState({ friends: response.data });
    });
  }

  render() {
    return (
      <div>
        <h1>Friends List</h1>
        {this.state.friends.map(friend => (
          <p key={friend.id}>
            Name: {friend.name} Age: {friend.age} Email: {friend.email}
          </p>
        ))}
      </div>
    );
  }
}

export default FriendsList;
