import axios from "axios";
import React, { Component } from "react";

class FriendsList extends Component {
  constructor(props) {
    super (props);
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: ""
    };
  }

  //set everything to blank
  
componentDidMount() {  
  axios
    .get(`http://localhost:5000/friends/`)
    .then(response => {
      this.setState({ friends: response.data });
    })

    .catch(err => {
      console.log(err);
     });

}

// this part gets the friends data that's already in the api
  
addNewFriend = () => {
  const newFriend = {
      name: this.state.newName, //changed this to new
      age: this.state.newAge,
      email: this.state.newEmail
  };

  const queue = this.state.friends; //made a queue to hold new info in
  queue.push(newFriend);
  
    axios
      .post(`http://localhost:5000/friends`, newFriend)
      .catch(err => {
	console.log(err);
      });

    this.setState({ friends: queue, newName:"", newAge:"", newEmail:""});

}

// I redid this whole part. I changed the names of variables so I could finally stop confusing myself and separated the new inputs from the existing information entirely, again so I could stop confusing myself. There might be a more efficient way to do this but I was confusing myself trying to do it, and this works fine.
	 
  handleName = (event) => {
    this.setState({ newName: event.target.value });
  }

  handleAge = (event) => {
    this.setState({ newAge: event.target.value });
  }

  handleEmail = (event) => {
    this.setState({ newEmail: event.target.value });
  }
  
// I redid the whole handleInput thing and separated it out into the three different types of inputs we are receiving. I couldn't get it to work the other way.
  
render() {
  return(
    <div>
      <h1>Friends</h1>
      <input onChange={this.handleName} placeholder="name" name="name" value={this.state.newName} />
      <input onChange={this.handleAge} placeholder="age" name="age" value={this.state.newAge} />
      <input onChange={this.handleEmail} placeholder="email" name="email" value={this.state.newEmail} />
      <button onClick={this.addNewFriend}>Add</button>
{/* The part above gets all the inputs and when you click the button, it adds it all to the bottom of your existing friends list.*/}
      <div>
	 {this.state.friends.map(friend => {
	      return(
		<ul>
		  <h3>Name: {friend.name} </h3>
		  <h4>Age: {friend.age} </h4>
		  <h4>Email: {friend.email} </h4>
		</ul>
	     );
	 })}
       </div>
   </div>
// The part above displays the data pulled from the api. I figured this part out early on - it was the inputs that were killing me.    
  );
}

}
export default FriendsList;
