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

  changeHandler = e => {
    this.setState({
      newFriend: {...this.state.newFriend, [e.target.name]: e.target.value}
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
            onChange={this.changeHandler}
          />
          <input
            type="text"
            placeholder="Age"
            name="age"
            value={this.state.newFriend.age}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={this.state.newFriend.email}
            onChange={this.changeHandler}
          />
        </form>
      </div>
    );
  }
}

export default FriendsList;
