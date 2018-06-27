import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import FriendList from "./List/FriendList";



class App extends Component {
constructor() {
    super();
    this.state = {
      friendsData: [],
      newfriend: "",
      age: "",
      email: ""
    };
  }


	
   nameChangeHandler = event => {
	   this.setState({newfriend: event.target.value});
   };


   ageChangeHandler = event => {
           this.setState({age: event.target.value});
   };

  emailChangeHandler = event => {
           this.setState({email: event.target.value});
   };


 addFriend = event =>{
	//const newfriend = {this.state.newfriend}; 
 	axios.post("http://localhost:5000/friends")
	 
 
 }

	
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
	    <input className="input-field" type="text" placeholder="name" value={this.state.newfriend} onChange={this.nameChangeHandler} /> <br />

		 <input className="input-field" type="text" placeholder="age" value={this.state.age} onChange={this.ageChangeHandler} /><br />

	     <input className="input-field" type="text" placeholder="email" value={this.state.email} onChange={this.emailChangeHandler} /><br />

	    <button className="btn-style" onClick={this.addFriend}>Add Friend</button>
	    <FriendList  friendsData={this.state.friendsData}/>
      </div>
    );
  }
}

export default App;
