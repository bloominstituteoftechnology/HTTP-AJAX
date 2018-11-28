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
      friends: []
    };
  }
  addFriendHandle = event => {
    event.preventDefault();
    console.log(`it's working!`);
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log(response);
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(`${err} YOLO`));
  }
  render() {
    return (
      <div className="App">
        <Form
          friends={this.state.friends}
          addFriendHandle={this.addFriendHandle}
        />
        {this.state.friends.map(friend => (
          <Friends friend={friend} />
        ))}
      </div>
    );
  }
}

export default App;
