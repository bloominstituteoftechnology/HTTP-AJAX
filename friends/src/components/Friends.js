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
      },
      editingId: null
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
      .put(
        `http://localhost:5000/friends/${this.state.editingId}`,
        this.state.newFriend
      )
      .then(response =>
        this.setState({
          friends: response.data,
          editingId: null
        }).catch(error => console.log(error))
      );
  };

  render() {
    return (
      <div className="outer-body">
        <form>
          <h2>Add Friend</h2>
          <input
            type="text"
            onChange={this.changeHandler}
            name="name"
            value={this.state.newFriend.name}
            placeholder="Name"
          />
          <input
            type="number"
            onChange={this.changeHandler}
            name="age"
            value={this.state.newFriend.age}
            placeholder="Age"
          />
          <input
            type="text"
            onChange={this.changeHandler}
            name="email"
            value={this.state.newFriend.email}
            placeholder="Email"
          />
          <button onClick={this.addFriend} className="add">
            Add
          </button>
        </form>
        <div className="friend-body">
          {this.state.friends.map(friend => (
            <div className="friend-card" key={friend.id}>
              <h5 className="name">{friend.name}</h5>
              <div className="a-e-box">
                <span className="age">Age: {friend.age}</span>
                <span className="email">Email: {friend.email}</span>
              </div>
              <button
                id={friend.id}
                onClick={this.deleteFriend}
                className="delete"
              >
                X
              </button>
              <button
                id={friend.id}
                onClick={this.updateFriend}
                className="delete"
              >
                Update
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Friends;
