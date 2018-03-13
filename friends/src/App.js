import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friends from './components/Friends/Friends';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      this.setState({friends: response.data})
    })
    .catch(error => console.error(`Your request produced an error: ${error}`))
  }

  render() {
    return (
    <div className="App">
      {this.state.friends.map((friend, index) => {
        return <Friends friend={friend} key={friend.id} />;
      })}
      
      <Form>
        <FormGroup>
          <Label for="Name">Name: </Label>
          <Input type="text" name="name" id="name" placeholder="name" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email: </Label>
          <Input type="email" name="email" id="email" placeholder="email" />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age: </Label>
          <Input type="number" name="age" id="age" placeholder="age" />
        </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
    </div>
    );
  }
}

export default App;
