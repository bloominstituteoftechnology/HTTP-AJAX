import React from "react";
import axios from "axios";

class Friends extends React.Component {
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

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  }

  changeHandler = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
  };

  addFriend = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/friends", this.state.newFriend)
      .then(response => this.setState({ friends: response.data }));
  };

  deleteFriend = e => {
    let friendId = e.target.id;
    axios
      .delete(`http://localhost:5000/friends/${friendId}`)
      .then(response => this.setState({ friends: response.data }));
  };

  updateFriend = e => {
    let friendId = e.target.id;
    axios
      .put(`http://localhost:5000/friends/`, {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
      .then(response => this.setState({ friends: response.data }));
  };

  render() {
    return (
      <div className="App">
        <form>
          <input
            type="text"
            onChange={this.changeHandler}
            name="name"
            value={this.state.newFriend.name}
          />
          <input
            type="number"
            onChange={this.changeHandler}
            name="age"
            value={this.state.newFriend.age}
          />
          <input
            type="text"
            onChange={this.changeHandler}
            name="email"
            value={this.state.newFriend.email}
          />
          <button onClick={this.addFriend}>Add</button>
        </form>
        {this.state.friends.map(friend => (
          <div className="friend-card" key={friend.id}>
            <h5 className="name">{friend.name}</h5>
            <span className="age">{friend.age}</span>
            <span className="email">{friend.email}</span>
            <button id={friend.id} onClick={this.deleteFriend}>
              Delete
            </button>
            <button id={friend.id} onClick={this.updateFriend}>
              Update
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default Friends;
