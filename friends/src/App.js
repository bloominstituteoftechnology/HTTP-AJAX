import React, { Component } from "react";
import axios from "axios";
import FriendsList from "./components/FriendsList";
import "./App.css";

class App extends Component {
  state = {
    friendsData: [],
    name: "",
    age: "",
    email: ""
  };

  componentDidMount() {
    // use axios to send a get request to the api and pull in the friends data
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friendsData: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  // handle changes to input fields : trying to do it fairly dry
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  // handle the submit of a new friend
  handleFriendSubmit = () => {
    // get the id of the data item
    const id = (this.state.friendsData[this.state.friendsData.length - 1].id + 1);

    // setup the data for the next friend
    const nextFriend = { id: id, name: this.state.name, age: this.state.age, email: this.state.email };

    // use the axios library to send a post request to the api and update the state
    axios
      .post("http://localhost:5000/friends", nextFriend)
      .then(response => {
        this.setState({ friendsData: response.data, name: "", age: "", email: "" });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <form>
          <input
            type="text"
            placeholder="name..."
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="age..."
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="email..."
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </form>
        <button onClick={this.handleFriendSubmit}>Submit</button>
        <FriendsList friends={this.state.friendsData} />
      </div>
    );
  }
}

export default App;
