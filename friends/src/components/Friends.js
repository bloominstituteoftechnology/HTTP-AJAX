import React from "react";
import axios from "axios";

class Friends extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="App">
        {this.state.friends.map(friend => (
          <div className="friend-card" key={friend.id}>
            <h5 className="name">{friend.name}</h5>
            <span className="age">{friend.age}</span>
            <span className="email">{friend.email}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default Friends;
