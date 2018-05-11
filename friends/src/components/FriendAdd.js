import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import { Redirect } from 'react-router-dom';
// import axios from 'axios';

class FriendAdd extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: "",
      id: "",
    };
  }

  handleFriendInput = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleAddFriend = () => {
    const newFriend = this.state
    // console.log("onsubmit",newFriend)
    this.props.handleSubmits(newFriend)
    

    this.props.history.push('/');
    // console.log("looking for history",this.props.history)

    this.setState({
      name: "",
      age: "",
      email: "",
    })
  }

  componentDidMount(){
    console.log("on componentDidMount:",this.props.toUpdate)
    let id = this.props.toUpdate;
    if(id !== undefined){
      this.setState({
        name: id.name,
        age: id.age,
        email: id.email,
        id: id.id,
      })
    } 
    
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