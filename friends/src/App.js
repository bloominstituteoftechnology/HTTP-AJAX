import React, { Component } from 'react';
import axios from 'axios';
import FriendLists from "./components/friendLists";
import { Container, Column } from "./components/style";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      friends:[]
    }
  }

  componentDidMount(){
    axios
    .get('http://localhost:5000/friends')
    .then( response => this.setState({
      friends: response.data
    }))
    .catch(err =>{console.log (err) })
  }

  render() {
    console.log(this.state.friends)
    return (
      <Container>
        <h4>Users Lists</h4>
        <Column>
        <Form inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">Name</Label>
            <Input type="text" name="name" id="exampleEmail" placeholder="John Doe" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2">Email</Label>
            <Input type="text" name="email" id="examplePassword" placeholder="johnDoe@Examplemail.com" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2">Age</Label>
            <Input type="text" name="age" id="examplePassword" placeholder="Age" />
          </FormGroup>
          <Button>Add User</Button>
        </Form>
        </Column>
        <Column>
        <FriendLists friends={this.state.friends}/>
        </Column>
      </Container>
    );
  }
}

export default App;
