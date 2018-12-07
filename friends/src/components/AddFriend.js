import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
class AddFriend extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: "",
      id: "",
      city: "",
    };
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleAdd= () => {
    const newHomie= this.state
    this.props.handleSubmits(newHomie)
    this.props.history.push('/');
    this.setState({
      name: "",
      age: "",
      email: "",
      city: "",
    })
  }

  componentDidMount(){
    console.log("on componentDidMount:",this.props.forUpdates)
    let id = this.props.forUpdates;
    if(id !== undefined){
      this.setState({
        name: id.name,
        age: id.age,
        email: id.email,
        id: id.id,
        city: id.city
      })
    } 
    
  }

  render() {
    
    return(
      <div className="col-12 row">
          <Form className="col-5 mt-5">
            <FormGroup>
              <Label for="friendName">Name</Label>
              <Input type="text" name="name" id="friendName" placeholder="New Name" value={this.state.name} onChange={this.handleInput}/>
            </FormGroup>
            <FormGroup>
              <Label for="friendAge">Age</Label>
              <Input type="text" name="age" id="friendAge" placeholder="New Age" value={this.state.age} onChange={this.handleInput}/>
            </FormGroup>
            <FormGroup>
              <Label for="friendEmail">Email</Label>
              <Input type="email" name="email" id="friendEmail" placeholder="New email" value={this.state.email} onChange={this.handleInput}/>
            </FormGroup>
            <FormGroup>
              <Label for="friendCity">City</Label>
              <Input type="text" name="city" id="friendCity" placeholder="New City" value={this.state.city} onChange={this.handleInput}/>
            </FormGroup>
            <Button onClick={this.handleAdd}>Submit</Button>
          </Form>
      
      </div>
    )
  }


}

export default AddFriend;
