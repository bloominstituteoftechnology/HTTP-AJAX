import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import FriendList from "./List/FriendList";



class App extends Component {
constructor() {
    super();
    this.state = {
      friendsData: [],
      newfriend: ""
    };
  }


	
   nameChangeHandler = event => {
	   this.setState({newfriend: event.target.value});
   };


	
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
      <div className="App main-container">
	    <input className="input-field" type="text" placeholder="add a name" value={this.state.newfriend} onChange={this.nameChangeHandler} />

	    <FriendList  friendsData={this.state.friendsData}/>
      </div>
    );
  }
}

export default App;
