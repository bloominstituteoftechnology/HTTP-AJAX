import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";


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
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }
  inputHandler = event => this.setState({ [event.target.name]: event.target.value });

  submitHandler = event => {
    event.preventDefault();
    const newFriend = {
      name: this.state.name,
      age: parseInt(this.state.age, 10),
      email: this.state.email,
    };
    axios.post('http://localhost:5000/friends', newFriend)
          .then( response =>
            this.setState({name: '', age: '', email: '', friends: response.data})
          );
  }

  render() {
    return (
      <div className="App">
        <AddFriend 
          updateInput={this.inputHandler}
          value={this.state.friends.data}
          submit={this.submitHandler}
        />
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
