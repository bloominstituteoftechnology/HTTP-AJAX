import React, { Component } from "react";
import "./App.scss";
import axios from "axios";
import Friends from "./components/Friends";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: "",
        age: null,
        email: "",
      }
    };
  }
  componentDidMount() {
    const url = "http://localhost:5000/friends";
    axios
      .get(url)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => alert(err));
  }
  handleChange = (event) =>{
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [event.target.name]: event.target.value
      }
    })
  }
  addFriend = () => {
    let theNewFriend = {
      id:this.state.friends.length,
      name:this.state.newFriend.name,
      age:this.state.newFriend.age,
      email:this.state.newFriend.email,
    }
    axios
    .post("http://localhost:5000/friends",theNewFriend)
    .then(response => {
      this.setState({
        friends: response
      })
    })
    .catch(err => {alert(err)});
  }

  render() {
    console.log(this.state.friends);
    return (
      <div className="App">
        <Friends friends={this.state.friends} />
        <form onSubmit={this.addFriend}>
          <input
            type="text"
            value={this.state.newFriend.name}
            name="name"
            onChange={this.handleChange}
          />
          <input
            type="age"
            value={this.state.newFriend.age}
            name="age"
            onChange={this.handleChange}
          />
          <input
            type="email"
            value={this.state.newFriend.email}
            name="email"
            onChange={this.handleChange}
          />
          <input type="submit" onSubmit={this.addFriend} />
        </form>
      </div>
    );
  }
}

export default App;
