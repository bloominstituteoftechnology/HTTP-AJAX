import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import Friends from "./components/Friends";
import PostFriendForm from './components/PostFriendForm'


class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      postSuccessMessage: "",
      postError: "",
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  postFriendToServer = friend => {
    axios.post("http://localhost:5000/friends", friend)
    .then( response => {
      this.setState({
        postSuccessMessage: response.data.successMessage,
        postError: ""
      })
    })
    .then( res => {
      const newFriends = this.state.friends;
      newFriends.push(friend)
      this.setState( { friends: newFriends } )
    })
    .catch( err => {
      this.setState({
        postSuccessMessage: "",
        postError: "error posting"
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        <PostFriendForm postFriendToServer={this.postFriendToServer} />
        <Friends 
          friends={this.state.friends}
        />
      </div>
    );
  }
}

export default App;
