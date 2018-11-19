import React, { Component } from "react";
import "./App.css";
import FriendsList from "./components/FriendsList";
// import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      age: 0,
      email: ""
    };
  }

  componentDidMount() {
    // axios
    //   .get("https://localhost:5000/friends/")
    //   .then(res => this.setState({ friends: res }))
    //   .catch(err => console.log(err));
    fetch("http://localhost:5000/friends")
      .then(res => res.json())
      .then(friends => this.setState({ friends: friends }))
      .catch(err => console.log(err));
  }

  handleChange = e => {
    // if (e.target.name === "age") {
    //   let num = parseInt(e.target.value, 10);
    //   console.log(num);
    //   this.setState({ [e.target.name]: parseInt(num, 10) });
    // }
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let newFriend = {
      name: this.state.name,
      age: parseInt(this.state.age, 10),
      email: this.state.email
    };
    fetch("http://localhost:5000/friends", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newFriend)
    })
      .then(response => response.json())
      .then(result => {
        this.setState({ friends: result });
        console.log(this.state.friends);
      });
  };

  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friends} />
        <form>
          <label>
            Friend's Name:
            <input
              name="name"
              type="text"
              placeholder="name here..."
              onChange={this.handleChange}
              required
            />
          </label>

          <label>
            Friend's Age:
            <input
              name="age"
              type="number"
              placeholder="age here..."
              onChange={this.handleChange}
              required
            />
          </label>

          <label>
            Email Address:
            <input
              name="email"
              type="email"
              placeholder="email here..."
              onChange={this.handleChange}
              required
            />
          </label>
          <input name="submit" type="submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default App;
