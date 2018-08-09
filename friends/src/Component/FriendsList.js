import React, { Component } from "react";
import axios from "axios";

class FriendsList extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      age: [],
      email: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }

  render() {
    return (
      <div>
        <h1>FriendsList</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleName}
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              value={this.state.age}
              onChange={this.handleAge}
            />
          </label>
          <label>
            email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleEmail}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <div className="friends">
          {this.state.friends.map((friend, id) => {
            return (
              <div className="card" key={id}>
                <div>{friend.name}</div>
                <div>{`age: ${friend.age}`}</div>
                <div>{`email: ${friend.email}`}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  handleName = event => {
    event.preventDefault();
    this.setState({
      name: event.target.value
    });
  };

  handleAge = event => {
    event.preventDefault();
    this.setState({
      age: event.target.value
    });
  };

  handleEmail = event => {
    event.preventDefault();
    this.setState({
      email: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/friends", {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
}
export default FriendsList;
