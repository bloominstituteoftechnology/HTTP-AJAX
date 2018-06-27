import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from "./components/FriendsList";
import NewFriendForm from "./components/NewFriendForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: "",
    }
  }

  componentDidMount () {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data })
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleNameChange = event => {
    this.setState({ [event.target.name]: event.target.value })
    console.log(this.state.name);
  }

  handleSubmitFriend = () => {
    const friend = { name: this.state.name, age: this.state.age, email: this.state.email };
    axios
      .post("http://localhost:5000/friends", friend)
      .then(response => {
        console.log("POST RESPONSE", response);
        this.setState({ friends: response.data });
      })
      .catch(error => console.log(error));
  };

  handleFriendData = data => this.setState({ friends: data });

  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        <NewFriendForm 
          handleNameChange={this.handleNameChange}
          handleSubmitFriend={this.handleSubmitFriend}
          valueone={this.state.name}
          valuetwo={this.state.age}
          valuethree={this.state.email} 
        />
        <FriendsList 
          handleFriendData={this.handleFriendData}
          friends={this.state.friends}
        />
      </div>
    );
  }
}

export default App;
