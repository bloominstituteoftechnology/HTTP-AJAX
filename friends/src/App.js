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
      newName: '',
      newAge: '',
      newEmail: '',
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error =>
        console.error(`Your friends request produced an error: ${error}`)
      );
  }

  handleChangeName = event => {
    this.setState({ newName: event.target.value });
    console.log(event.target.value);
  };

  handleChangeAge = event => {
    this.setState({ newAge: event.target.value });
    console.log(event.target.value);
  };

  handleChangeEmail = event => {
    this.setState({ newEmail: event.target.value });
    console.log(event.target.value);
  };

  handleSubmit = event => {
    event.preventDefault();

    const newFriend = {
      name: this.state.newName,
      age: this.state.newAge,
      email: this.state.newEmail
    };

    axios
      .post(`http://localhost:5000/friends`, newFriend)
      .then(res => {
        console.log(res.data);
        this.setState({
          friends: [...res.data],
          newName: '',
          newAge: '',
          newEmail: '',
        })
      })
      .catch(error => console.error(error));
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Friend List:</h1>
        </header>

        {this.state.friends.map((friend, index) => {
          return <Friends friend={friend} key={friend.id} />;
        })}

        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="Name">Name: </Label>
            <Input type="text" name="name" id="name" placeholder="Add name" onChange={this.handleChangeName} value={this.state.newName} />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age: </Label>
            <Input type="number" name="age" id="age" placeholder="Add age" onChange={this.handleChangeAge} value={this.state.newAge} />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email: </Label>
            <Input type="email" name="email" id="email" placeholder="Add email" onChange={this.handleChangeEmail} value={this.state.newEmail} />
          </FormGroup>
          <Button color="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default App;
