import React, { Component } from 'react';
import axios from "axios";
import FriendList from "./FriendList";



class Form  extends React.Component {
constructor() {
    super();
    this.state = { 
      friendsData: [],
      newfriend: "",
      age: "",
      email: "",
    };
  }

 // nameEditHandler = event => {
   //       this.setState({editedName: event.target.value});
  // };


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
<input className="input-field" type="text" placeholder="name" value={this.state.newfriend} onChange={this.nameChangeHandler} /> <br />

                 <input className="input-field" type="number" placeholder="age" value={this.state.age} onChange={this.ageChangeHandler} /><br />

             <input className="input-field" type="text" placeholder="email" value={this.state.email} onChange={this.emailChangeHandler} /><br />

	   <button className="btn-style" onClick={this.addFriend}>Add Friend</button>

	  <FriendList editFriend={this.editFriend} friendsData={this.state.friendsData} deleteFriend={this.deleteFriend} />
	  </div>
  );
}
}

export default Form;	
