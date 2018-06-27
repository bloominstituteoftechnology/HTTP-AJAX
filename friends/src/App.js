import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import FriendList from "./List/FriendList";



class App extends Component {
constructor() {
    super();
    this.state = {
      friendsData: [],
      friend: ""
    };
  }


//  handleSetData = data => this.setState({ avengersData: data });
	
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log("GET RESPONSE: ", response);
        this.setState({ friendsData: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }



  render() {
    return (
      <div>
	    <FriendList  friendsData={this.state.friendsData}/>
      </div>
    );
  }
}

export default App;
