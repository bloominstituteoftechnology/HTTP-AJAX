import React from "react";
import axios from "axios";

class FriendsList extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  componentDidMount = () => {
    axios.get("http://localhost:5000/friends").then(response => {
      console.log(response);
      this.setState({friends: response.data});
      // .catch(err => console.log(err));
    });
  };

  render() {
    return (
      <div>
        {this.state.friends.map(friend => {
          return <div key={friend.id}>{friend.name}</div>;
        })}
        <form action="">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.newFriend.name}
          />
          <input
            type="text"
            placeholder="Age"
            name="age"
            value={this.state.newFriend.age}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={this.state.newFriend.email}
          />
        </form>
      </div>
    );
  }
}

export default FriendsList;
