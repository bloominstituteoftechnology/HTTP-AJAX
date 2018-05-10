import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

export default class FormIn extends React.Component {
    constructor(){
        super();
        this.state = {
            name: 'boo',
            age: 'boo',
            email: 'boo@gmail.com',
        };
    }

    handleTaskChange = event => {
      this.setState({[event.target.name] : event.target.value});
  } 

    handleRequest = () =>{ 
        axios({
            method: 'post',
            url: 'http://localhost:5000/friends',
            data: {
                name: this.state.name,
                age: this.state.age,
                email: this.state.email
            }
            });
    }

  render() {
    return (
      <Form>
        <FormGroup>
          <Input name="name" id="nameID" placeholder="name" onvhange value= {this.state.name} />
           <Input name="age" placeholder="age" value= {this.state.age} />
          <Input type="email" name="email" id="exampleEmail" placeholder="email" value= {this.state.email} />
        </FormGroup>
        <Button onClick= {this.state.handleRequest} >Submit</Button>
      </Form>
    );
  }
}