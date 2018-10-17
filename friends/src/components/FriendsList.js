import React from "react";
import axios from "axios";
import "./FriendsList.css";

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

  addNewFriend = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/friends", this.state.newFriend)
      .then(response => this.setState({friends: response.data}));
    this.setState({newFriend: {name: "", age: "", email: ""}});
  };

  render() {
    return (
      <div className="friends-list">
        <div>
          <h2>My Friends</h2>
          <div className="my-friends">
            {this.state.friends.map(friend => {
              return (
                <div key={friend.id} className="friend">
                  <h4>{friend.name}</h4>
                  <p>{`${friend.age} years old`}</p>
                  <p>{friend.email}</p>
                </div>
              );
            })}
          </div>
        </div>

        <form action="">
          <h3>Add A New Friend</h3>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.newFriend.name}
            onChange={this.changeHandler}
          />
          <br />
          <input
            type="text"
            placeholder="Age"
            name="age"
            value={this.state.newFriend.age}
            onChange={this.changeHandler}
          />
          <br />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={this.state.newFriend.email}
            onChange={this.changeHandler}
          />
          <br />
          <button onClick={this.addNewFriend}>Add Friend</button>
        </form>
      </div>
    );
  }
}

export default FriendsList;
