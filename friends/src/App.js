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
      },
      isEditing: false
    };
    console.log(this.state.friends);
  }

  updateFriend = (ev, id) => {
    ev.preventDefault();
    axios
      .put(`http://localhost:5000/friends/${id}`, this.state.newFriend)
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
  addFriend = ev => {
    console.log("addDfreind fired");
    ev.preventDefault();
    axios
      .post("http://localhost:5000/friends", this.state.newFriend)
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  };

  toggleEditFriend = (ev, id) => {
    ev.preventDefault();
    this.setState({ isEditing: !this.state.isEditing });
  };

  deleteFriend = (ev, id) => {
    ev.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        <Form addFriend={this.addFriend} changeHandler={this.changeHandler} />
        <Friends
          addFriend={this.addFriend}
          friends={this.state.friends}
          changeHandler={this.changeHandler}
          updateFriend={this.updateFriend}
          deleteFriend={this.deleteFriend}
          toggleEditFriend={this.toggleEditFriend}
          isEditing={this.state.isEditing}
        />
      </div>
    );
  }
}

export default App;
