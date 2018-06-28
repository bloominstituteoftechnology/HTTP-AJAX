import React, { Component } from 'react';
import axios from "axios";
import FriendList from "./FriendList";
import Form from "./Form";
import IndividualFriend from "./IndividualFriend";
import {Route} from 'react-router-dom';

class Container  extends React.Component {
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
           this.setState({age: Number(event.target.value)});
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

 deleteFriend = friendId => {
        const friend = {id:friendId};
        axios.delete(`http://localhost:5000/friends/${friendId}`,
        friend)
        .then(response => {
         console.log("POST RESPONSE", response);
        this.setState({ friendsData: response.data });
      })
      .catch(error => console.log(error));
  };

editFriend = (friendId, nameEdit) => {
        const friend = {name: nameEdit};
        axios.put(`http://localhost:5000/friends/${friendId}`,
        friend)
        .then(response => {
         console.log("POST RESPONSE", response);
        this.setState({ friendsData: response.data, editedName: "" });
	})
      .catch(error => console.log(error));
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



render(){
  return (

        <div>
	  
<Form newfriend={this.state.newfriend} nameChangeHandler={this.nameChangeHandler} age={this.state.age}  ageChangeHandler={this.ageChangeHandler} email={this.state.email} emailChangeHandler={this.emailChangeHandler} addFriend={this.addFriend}  editFriend={this.editFriend}  friendsData={this.state.friendsData} />

	  <Route exact path="/"  render={(props) => <FriendList {...props} editFriend={this.editFriend} friendsData={this.state.friendsData} deleteFriend={this.deleteFriend} />} />

	  <Route path="/friends/:id"  render={(props) => <IndividualFriend {...props}  deleteFriend={this.deleteFriend} />} />
	</div>
  );}
}


export default Container;
