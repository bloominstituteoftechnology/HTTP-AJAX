import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import FriendApp from './components/Form';
import axios from 'axios';
import { Container, Row, Col, Button, Label, Input } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: ""
    }
  }

  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(err);
      })
  }
  getFriends2 = () => {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleFormInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  addNewFriend = () => {
    const addFriend = { name: this.state.name, age: +this.state.age, email: this.state.email };
    axios.post('http://localhost:5000/friends', addFriend)
      .then(response => {
        console.log(response);
        this.getFriends();
      })
      .catch(err => {
        console.log(err);
      })
      this.setState({ name: "", email: "", age: "" });
  }

  friendForm = () => {
    return (
      <Container className="col-6 Form">
        <Row className="Form--top">
          <Col className="col-9">
            <Label for="name" className="mr-sm-2 Form--label">Name</Label>
            <Input type="text" name="name" value={this.state.name} onChange={this.handleFormInput} placeholder="Name" />
          </Col>
          <Col>
            <Label for="age" className="mr-sm-2 Form--label">Age</Label>
            <Input type="number" name="age" value={this.state.age} onChange={this.handleFormInput} placeholder="Age" />
          </Col>
        </Row>
        <Row className="Form--bottom">
          <Col>
            <Label for="email" className="mr-sm-2 Form--label">Email</Label>
            <Input type="email" name="email" value={this.state.email} onChange={this.handleFormInput} placeholder="Email" />
          </Col>
        </Row>
        <Button className="Form--submit" onClick={this.addNewFriend}>Add New Friend!</Button>
      </Container>
    )
  }

  render() {
    const friendsCopy = [...this.state.friends];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Container className="cardContainer">
          {friendsCopy.map((friend, index) => (<Display key={friend.id} friend={friend} getFriends2={this.getFriends2} />))}
        </Container>
        {this.friendForm()}
      </div>
    );
  }
}

export default App;
