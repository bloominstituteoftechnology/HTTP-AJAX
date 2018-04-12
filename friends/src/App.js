import React, { Component } from "react";
import "./App.css";
import FriendsList from "./FriendsList";
import FriendsForm from "./FriendsForm";
import FriendsCard from "./FriendsCard";
import axios from "axios";
import { Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      currentFriend: ''
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => {
        this.setState({ friends: response });
      })
      .catch(error => {
        console.error(error);
      });
  }

  getFriendId = id => {
    this.setState({ currentFriend: id });
    console.log(id);
  }

  render() {
	console.log(this.state.friends.data)
    return (
      <div className="App">
        {/* <FriendsList friends={this.state.friends} /> */}
        <Route
          exact path="/"
          render={props => <FriendsList friends={this.state.friends} getFriendId={this.getFriendId} />}
        />
        <Route
		      path="/friends/:id"
          render={props => <FriendsCard friend={this.state.friends.data[props.match.params.id - 1]}/>}
        />
        <FriendsForm updateFriends={() => this.componentDidMount()} />
      </div>
    );
  }
}

export default App;
