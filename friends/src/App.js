import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormFeedback, FormText, Col } from 'reactstrap';
import axios from 'axios';

import FriendsList from './components/FriendsList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: '',
        age: 0,
        email: ''
      }
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({friends: response.data}); 
      })
      .catch(error => {
        console.log(error);
      })
  }

  handleAddFriendInput = e => {
    let newFriendData = { [e.target.name]: e.target.value };
    this.setState({ newFriend: {...this.state.newFriend, ...newFriendData} })
  }

  handleSubmitAddFriend = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/friends', this.state.newFriend)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={ () => <FriendsList {...this.state}/>}/>
          <br />
          <h3>Add a friend!</h3>
          <Form>
            <FormGroup row>
              <Label sm={2}>Name</Label>
              <Col>
                <Input
                  type="text"
                  name="name"
                  onChange={this.handleAddFriendInput}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Age</Label>
                <Col>
                  <Input
                    type="number"
                    name="age"
                    onChange={this.handleAddFriendInput}
                  />
                </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Email</Label>
                <Col>
                  <Input
                    type="email"
                    name="email"
                    onChange={this.handleAddFriendInput}
                  />
                </Col>
            </FormGroup>
        </Form>
        <Button color="primary" onClick={this.handleSubmitAddFriend}>Add New Friend</Button>
        </div>
      </Router>
    );
  }
}

export default App;
