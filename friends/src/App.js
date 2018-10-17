import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friendToUpdate: null,
      newFriend: {
        name: "",
        age: "",
        email: "",
        id: null
      },
      isUpdating: false
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/friends", this.state.newFriend)
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  };

  handleUpdate = id => {
    const friendToUpdate = this.state.friends.find(friend => friend.id == id);
    this.setState({
      friendToUpdate,
      newFriend: friendToUpdate,
      isUpdating: true
    });
  };

  handleSubmitUpdate = id => {
    axios
      .put(`http://localhost:5000/friends/${id}`, this.state.newFriend)
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
    this.setState({ isUpdating: false });
  };

  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        <div className="friends-list">
          {this.state.friends.map(friend => (
            <div className="friend-card" key={friend.id}>
              <h2>{friend.name}</h2>
              <p>Age: {friend.age}</p>
              <p>
                Email: <a href={`mailto:${friend.email}`}>{friend.email}</a>
              </p>
              <a href="#update">
                <button onClick={() => this.handleUpdate(friend.id)}>
                  Update
                </button>
              </a>
            </div>
          ))}
        </div>
        <div className="form-container">
          <form action="submit" id="update">
            <h2>{this.state.isUpdating ? "Update a Friend" : "Submit New Friend"}</h2>
            <input
              type="text"
              value={this.state.newFriend.name}
              name="name"
              placeholder="Name"
              onChange={this.handleChange}
            />
            <input
              type="text"
              value={this.state.newFriend.age}
              name="age"
              placeholder="Age"
              onChange={this.handleChange}
            />
            <input
              type="text"
              value={this.state.newFriend.email}
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
            <button
              onClick={this.state.isUpdating ? () => this.handleSubmitUpdate(this.state.newFriend.id) : this.handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
