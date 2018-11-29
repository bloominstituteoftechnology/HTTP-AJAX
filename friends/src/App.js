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

    this.setState({
      friends: [
        ...this.state.friends,
        {
          id: this.state.friends.length + 1,
          age: Number(this.state.age),
          name: this.state.name,
          email: this.state.email
        }
      ],
      age: "",
      name: "",
      email: ""
    });
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
