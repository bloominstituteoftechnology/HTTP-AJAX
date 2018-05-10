import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import DisplayList from './DisplayList'

export default class FormIn extends React.Component {
    constructor(){
        super();
        this.state = {
            name: '',
            age: '',
            email: '',
        };
    }

    handleTaskChange = event => {
      event.preventDefault();
      this.setState({[event.target.name] : event.target.value});
  } 

    handleRequest = () =>{ 
      axios
      .post(`http://localhost:5000/friends`,{
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
    })
      .then(response => {
        this.setState(() => ({
          name: '',
          age: '',
          email: '',
      }));
      })
      .then(()=> <DisplayList />)
      .catch(error => {
        console.error(error);
      });

    }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleRequest}>
          <FormGroup>
            <Input name="name" id="nameID" placeholder="name" onChange={this.handleTaskChange} value= {this.state.name} />
            <Input name="age" placeholder="age" onChange={this.handleTaskChange} value= {this.state.age} />
            <Input type="email" name="email" id="exampleEmail"  onChange={this.handleTaskChange} placeholder="email" value= {this.state.email} />
          </FormGroup>
          <Button type="submit" >Submit</Button>
          {/* <Button onClick= {this.handleRequest} >Submit</Button> */}
        </Form>
      </div>
    );
  }
}