import React, { Component } from "react";
import "./App.css";
import FriendsList from "./components/FriendsList";
import InputForm from "./components/InputForm";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: "",
      id: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let newFriend = {
      name: this.state.name,
      age: parseInt(this.state.age, 10),
      email: this.state.email
    };

    if (this.state.id.length > 0) {
      let index = this.state.friends.findIndex(
        friend => friend.id === parseInt(this.state.id)
      );
      axios
        .put(`http://localhost:5000/friends/${index + 1}`, newFriend)
        .then(res =>
          this.setState({
            friends: res.data,
            name: "",
            age: "",
            email: "",
            id: ""
          })
        )
        .catch(err => console.log(err));
    } else {
      axios
        .post(`http://localhost:5000/friends`, newFriend)
        .then(res =>
          this.setState({
            friends: res.data,
            name: "",
            age: "",
            email: "",
            id: ""
          })
        )
        .catch(err => console.log(err));
    }
  };

  delete = e => {
    axios
      .delete(`http://localhost:5000/friends/${e.target.id}`)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friends} delete={this.delete} />
        <InputForm
          info={this.state}
          change={this.handleChange}
          submit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
