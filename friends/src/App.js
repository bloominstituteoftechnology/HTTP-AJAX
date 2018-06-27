import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import FriendsList from "./FriendsList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      name: "",
      age: 0,
      email: ""
    };
  }

  handleSetData = data => this.setState({ friendsData: data });

  componentDidMount() {
    axios.get("http://localhost:5000/Friends").then(response => {
      this.setState({ friendsData: response.data });
    });
  }



  handleSubmitFriend = () => {
    const name = { name: this.state.name, age: this.state.age, email: this.state.email };

    axios
      .post("http://localhost:5000/Friends", name)
      .then(response => {
        console.log("POST RESPONSE", response);
        this.setState({ friendsData: response.data, name: '' });
      })
      .catch(error => console.log(error));
  };

  // handleSubmitFriendAge = () => {
  //   const age = { age: this.state.age };
  //   axios
  //     .post("http://localhost:5000/Friends", age)
  //     .then(response => {
  //       console.log("POST RESPONSE", response);
  //       this.setState({ friendsData: response.data, age: 0, });
  //     })
  //     .catch(error => console.log(error));
  // };

  // handleSubmitFriendEmail = () => {

  //   const email = { email: this.state.email };
  //   axios
  //     .post("http://localhost:5000/Friends", email)
  //     .then(response => {
  //       console.log("POST RESPONSE", response);
  //       this.setState({ friendsData: response.data, email:"" });
  //     })
  //     .catch(error => console.log(error));
  // };

  //  handleSubmitFriend = () => {
  //   handleSubmitFriendName();
  //   handleSubmitFriendAge();
  //   handleSubmitFriendEmail();
  // };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleAgeChange = e => {
    this.setState({ age: e.target.value });
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Friends AXIOS</h1>
        </header>
        <form >
          <input
            type="text"
            onChange={this.handleNameChange}
            value={this.state.name}
            placeholder="add friend..."
          />
          <input
            type="number"
            onChange={this.handleAgeChange}
            value={this.state.age}
            placeholder="age..."
          />
          <input
            type="text"
            onChange={this.handleEmailChange}
            value={this.state.email}
            placeholder="email..."
          />
          <button onClick={this.handleSubmitFriend}>Add Friend</button>
        </form>
        <FriendsList friends={this.state.friendsData} />
      </div>
    );
  }
}

export default App;
