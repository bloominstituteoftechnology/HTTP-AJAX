import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from "./FriendsList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      name: "",
      age: "",
      email: ""
    };
  }

  handleSetData = data => this.setState({ friendsData: data });


  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({friendsData: response.data});
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleSubmitFriend = () => {
    const name = { name:this.state.name };
    axios
     .post("http://localhost:5000/friends", name)
     .then(response => {
       console.log("POST RESPONSE", response);
       this.setState({ friendsData: response.data, name: '' });
     })
     .catch(error => console.log(error));
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div className="App">
      <h1>List of Friends</h1>
      <form>
        <input type='text' value={this.state.name} onChange={this.handleChange} placeholder="Friends name" />
        <button onClick={this.handleSubmitFriend}>Add Friend</button>
      </form>
      <FriendsList friends={this.state.friendsData} />
      </div>
    );
  }
}

export default App;
