import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class FriendAdd extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: "",
    };
  }

  handleFriendInput = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleAddFriend = () => {
    const newFriend = this.state
    console.log("onsubmit",newFriend)
    
    axios
      .post(`http://localhost:5000/friends`,{
        name: newFriend.name,
        age: newFriend.age,
        email: newFriend.email
      })
        .then(response => {
          console.log("post response:",response)
          this.setState({
            name: "",
            age: "",
            email: "",
          })
        })
        .catch(err => {
          console.log("post err:",err)
        }) 

    // this.setState({
    //   name: "",
    //   age: "",
    //   email: "",
    // })
  }

  render() {
    return(
      <div className="col-12 row">
        {/* <div></div> */}
          <Form className="col-5 mt-5">
            <FormGroup>
              <Label for="friendName">Name</Label>
              <Input type="text" name="name" id="friendName" placeholder="New Name" value={this.state.name} onChange={this.handleFriendInput}/>
            </FormGroup>
            <FormGroup>
              <Label for="friendAge">Age</Label>
              <Input type="text" name="age" id="friendAge" placeholder="New Age" value={this.state.age} onChange={this.handleFriendInput}/>
            </FormGroup>
            <FormGroup>
              <Label for="friendEmail">Email</Label>
              <Input type="email" name="email" id="friendEmail" placeholder="New email" value={this.state.email} onChange={this.handleFriendInput}/>
            </FormGroup>
            <Button onClick={this.handleAddFriend}>Submit</Button>
          </Form>
      </div>
    )
  }


}

export default FriendAdd;