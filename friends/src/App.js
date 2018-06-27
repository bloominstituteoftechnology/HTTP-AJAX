import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import FriendList from "./List/FriendList";
import Form from "./List/Form";



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


 addFriend = event => {
	const friend = {name:this.state.newfriend, age:this.state.age, email:this.state.email}; 
 	axios.post("http://localhost:5000/friends", friend)
	.then(response => {
         console.log("POST RESPONSE", response);
        this.setState({ friendsData: response.data, newfriend: "", age: "", email: "" });
      })
      .catch(error => console.log(error));
  };
	 

/* deleteFriend = (event,friendId) => {
        const friend = {id:friendId};
        axios.delete("http://localhost:5000/friends", friend)
        .then(response => {
         console.log("POST RESPONSE", response);
        this.setState({ friendsData: response.data });
      })
      .catch(error => console.log(error));
  };
*/


	
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

	    <Form  addFriend={this.addFriend} newfriend={this.state.newfriend} age={this.state.age} email={this.state.email} emailChangeHandler={this.emailChangeHandler}  ageChangeHandler={this.ageChangeHandler}  nameChangeHandler={this.nameChangeHandler} />

	    <FriendList  friendsData={this.state.friendsData} deleteFriend={this.deleteFriend} />
      </div>
    );
  }
}

export default App;
