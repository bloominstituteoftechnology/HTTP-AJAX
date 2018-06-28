import React, { Component } from 'react';
import './index.css';
import axios from 'axios';
import FriendsList from "./components/FriendsList";
import FriendsForm from "./components/FriendsForm";

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

  render() {
    return (
      <div className="App">
      <div className="friends">
        <h1>My Friends</h1>
      <FriendsList friends={this.state.friendsData} />
    </div>
    <div className="add-friends">
      <h2>Add Friend</h2>
      <FriendsForm className ='form' handleSetData={this.handleSetData}/>
      </div>
    </div>
    );
  }
}

export default App;
