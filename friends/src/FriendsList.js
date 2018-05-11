import axios from "axios";
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./FriendsList.css";
import FriendForm from "./Form";

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
  this.gatherFriends();
}

  gatherFriends = () => {
    axios
    .get(`http://localhost:5000/friends/`)
    .then(response => {
      this.setState({ friends: response.data });
    })

    .catch(err => {
      console.log(err);
     });

  }
  
render() {
  return(
    <div>
      <FriendForm prop={this.state} updateFriendsList={this.gatherFriends} />
     	<Container>
	  <Row>
	    <Col className="header">Name</Col>
	    <Col className="header">Age</Col>
	    <Col className="header">Email</Col>
	  </Row>
	</Container>
	<div>
	 {this.state.friends.map(friend => {
	   return(
	     <Container>
	       <Row>
                   <Col>{friend.name}</Col>
		   <Col>{friend.age}</Col>
		   <Col>{friend.email}</Col>
	       </Row>
	     </Container>
	     );
	 })}
         </div>
       </div>
 
  );
}

}
export default FriendsList;
