import React, { Component } from "react";
import Friends from "./Friends";
import Form from "./Form";
import "./App.css";
import axios from "axios";

//get the data from the server

// display the data in a component
class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      age: "",
      name: "",
      email: ""
    };
  }
  addFriendHandle = event => {
    event.preventDefault();
    const friendList = this.state.friends;
    const filtered = friendList.filter(
      friend => friend.email === this.state.email || this.state.email === ""
    );
    console.log(filtered.length);
    // let testValue = JSON.stringify(this.state.friends).includes(this.state.email)
    if (
      filtered.length ===
      0 /* this.state.age === "" || this.state.name === "" || this.state.email === "" || */
    ) {
      this.setState({
        friends: [
          ...this.state.friends,
          {
            id: this.state.friends.length + 1,
            age: this.state.age,
            name: this.state.name,
            email: this.state.email
          }
        ],
        age: "",
        name: "",
        email: ""
      });
    }
  };
  inputChangeHandle = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  componentDidMount() {
    axios
      .get("http://localhost:3100/friends/")
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(`${err} YOLO`));
  }
  render() {
    return (
      <div className="App">
        <Form
          friends={this.state.friends}
          age={this.state.age}
          name={this.state.name}
          email={this.state.email}
          inputChangeHandle={this.inputChangeHandle}
          addFriendHandle={this.addFriendHandle}
        />
        {this.state.friends.map(friend => (
          <Friends key={friend.id} friend={friend} />
        ))}
      </div>
    );
  }
}

export default App;
