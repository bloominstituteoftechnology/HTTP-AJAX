import React, { Component } from 'react';
import './App.css';
import axios from "axios"
import FriendsList from './Components/FriendsList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      friend: "",
    };
  }

  // handleSetData = data => this.setState({avengersData:data})

  componentDidMount() {
    axios
    .get("http://localhost:5000/friends")
    .then(response => {
      console.log("GET RESPONSE: ". response);
      this.setState({friendsData:response.data})
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <h1>List of Friends</h1>
        <FriendsList 
          friends = {this.state.friendsData}
        />
      </div>
    );
  }
}

export default App;
