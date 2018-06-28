import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Route } from "react-router-dom";
import FriendsList from "./FriendsList";
import FriendsForm from "./FriendsForm";
import Friend from "./Friend";

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
  // handleSelectFriend = data => this.setState({})


  componentDidMount() {
    axios.get("http://localhost:5000/Friends").then(response => {
      this.setState({ friendsData: response.data });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Friends AXIOS</h1>
        </header>
        <FriendsForm handleSetData={this.handleSetData} />
        <Route  path='/' render={(props) => <FriendsList {...props}  handleSetData={this.handleSetData} friends={this.state.friendsData} />} />
        <Route path="/friends/:id" render={(props) => <Friend {...props} handleDelete={this.handleDelete} friend={this.state.friendsData} />}  />
      </div>
    );
  }
}

export default App;
