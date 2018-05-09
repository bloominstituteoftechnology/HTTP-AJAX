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


  handleInput = event => {
    this.setState({ [event.target.name]: [event.target.value] });
  }

  saveFriend = () => {
    const friend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    axios
      .post(`http://localhost:5000/friends`, friend)
      .then(listUpdate => {
	console.log(listUpdate);
      })
      .catch(err => {
	console.log(err);
      });
    this.setState({ name: "", age: "", email: ""});
  }
 
render() {
  return(
    <div>
      <h1>Friends</h1>
      <input onChange={this.handleInput} placeholder="name" name="name" value={this.state.name} />
      <input onChange={this.handleInput} placeholder="age" age="age" value={this.state.age} />
      <input onChange={this.handleInput} placeholder="email" email="email" value={this.state.email} />

      <div>
	<Container>
	   {this.state.friends.map(friend => {
	     const { name,age,email } = friend;
	     return(
	<Row>
	  <Col xs="6" sm="4"><h3>Name: {name} </h3></Col>
	  <Col xs="6" sm="4"><h4>Age: {age} </h4></Col>
	  <Col sm="4"><h4>Email: {email} </h4></Col>
	</Row>
	     );
	   })}
        </Container>
      </div>

   </div>
    
  );
}

}
export default FriendsList;




