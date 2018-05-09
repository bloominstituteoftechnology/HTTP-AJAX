import axios from "axios";
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

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
  newFriend = () => {
    const friend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    axios
      .post(`http://localhost:5000/friends`, friend)
      .then(response => {
	this.setState({name: "", age: "", email: ""});
      })
      .catch(err => {
	console.log(err);
      });
  };
 

  //in class, Dan said that we should put our axios request in a componentDidMount. I got a lot of the syntax from the training kit. The setState part was pieced together from notes I took during class. I think this gets the friends data and puts it into state.

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

//this or something like this has been in pretty much everything we've ever done in react. It takes user input and puts it into state.
  

  
render() {
  return(
    <div>
      <h1>Friends</h1>
      <input onChange={this.handleInput} placeholder="name" name="name" value={this.state.name} />
      <input onChange={this.handleInput} placeholder="age" name="age" value={this.state.age} />
      <input onChange={this.handleInput} placeholder="email" name="email" value={this.state.email} />
      <button>Add</button>
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
    
  );
}

}
export default FriendsList;




