import React, { Component } from "react";
import FriendsList from "./components/FriendsList";
import FriendForm from "./components/FriendForm";
import "./App.css";
import axios from "axios";


const URL = "http://localhost:5000/friends";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: ""
    };
  }

  componentDidMount() {
    axios.get(URL).then(response => {
      this.setState({ friends: response.data });
    })
    .catch(err => {
      console.log(err);
    })
  }

  handleNameChange = e => {
    this.setState({newFriend: e.target.value});
  }
  
  render() {
    return (
      <div className="App">
        <h1>Friends HTTP-AJAX</h1>
        <FriendsList friends={this.state.friends}/>
        <FriendForm handleTextChange={this.handleNameChange}/>
      </div>
    );
  }
}

export default App;
