import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Friends from "./components/Friends";
import Form from "./components/Form";

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
    console.log(this.state.friends.id);
  }
  addFriend = ev => {
    ev.preventDefault();
    axios
      .post("http://localhost:5000/friends", this.state.newFriend)
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  };

  updateFriend = ev => {
    ev.preventDefault();
    console.log("updateDfreind fired");
    axios
      .put(`http://localhost:5000/friends/${this.state.friends.id}`)
      .then(response => this.setState({ friends: response.data }));
  };

  changeHandler = ev => {
    console.log(ev.target.value);
    this.setState({ newFriend: { ...this.state.newFriend, [ev.target.name]: ev.target.value } });
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="App">
        <Friends friends={this.state.friends} updateFriend={this.updateFriend} changeHandler={this.changeHandler} />
        <Form addFriend={this.addFriend} changeHandler={this.changeHandler} />
      </div>
    );
  }
}

export default App;
