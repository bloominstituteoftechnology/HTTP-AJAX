import React, { Component } from "react";
import "./App.css";
import Friendslist from "./components/Friendslist";
import axios from "axios";
import Form from "./components/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log(response);
        this.setState({
          friends: response.data
        });
      })
      .catch(err => console.log(err));
  }

  addNewFriend = friend => {
    axios
      .post("http://localhost:5000/friends", friend)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <Form addNewFriend={this.addNewFriend} />
        <Friendslist friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
