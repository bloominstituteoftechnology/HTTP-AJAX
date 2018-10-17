import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
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
            </div>
          ))}
        </div>
        <form action="submit" method="post">
          <h2>Add a new friend</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;
