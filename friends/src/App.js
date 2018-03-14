import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class App extends Component {
  constructor() {
    super()
    this.state = { 
      friends: [],
      name: '',
      age: undefined,
      email: '',
      id: 0
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target; // object destructuring
    // const name = event.target.name; // event.target = <input> | .name = <input name="">
    // const value = event.target.value;
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, age, email, id, friends } = this.state; // object destructuring

    let flag = false
    friends.forEach(friend => {
      if (friend.id == id) flag = true
    })

    if (flag) {
      axios 
      .put(`http://localhost:5000/friends/${id}`, { name, email, age })
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.error('Error', error);
      });
    } else {
      axios.post('http://localhost:5000/friends', {
        name,
        age, 
        email,
      })
      .then(response => {
        this.setState({ friends: response.data })
      })
      .catch(error => {
        console.error('Server Error', error);
      });
    }
  }

  componentDidMount(){
    axios 
      .get('http://localhost:5000/friends')
      .then(response => { 
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.error('Error', error);
      });
  }

  deleteFriend(id) {
    console.log(id);
    axios.delete(`http://localhost:5000/friends/${id}`) 
    .then(response => {
      this.setState({ friends: response.data });
    })
    .catch(error => {
      console.error('Error', error);
    });
  }
  
  render() {
    const { name, email, age, id, friends } = this.state;
    return (
      <div className="App">
        {friends.map(friend => (
          <div key={friend.id}>
            <div>{friend.id}</div>
            <div>{friend.name}<span onClick={() => this.deleteFriend(friend.id)}>  ❌</span></div>
            <div>{friend.age}</div>
            <div>{friend.email}</div>
          </div>
        ))}
        <div> 
        <Form>
            <FormGroup>
              <Label for="id">ID</Label>
              <Input type="number" name="id" value={id} onChange={this.handleChange} placeholder="Enter ID"/>
            </FormGroup>
            <FormGroup>
              <Label for="name">name</Label>
              <Input type="text" name="name" value={name} onChange={this.handleChange} placeholder="Enter Name" />
            </FormGroup>
              <FormGroup>
              <Label for="email">email</Label>
              <Input type="text" name="email" value={email} onChange={this.handleChange} placeholder="Enter Email" />
            </FormGroup>
            <FormGroup>
              <Label for="age">age</Label>
              <Input type="number" name="age" value={age} onChange={this.handleChange} placeholder="Enter Age" />
            </FormGroup>
            <Button onClick={this.handleSubmit}>Submit</Button>
        </Form>
        </div>
      </div>
    );
  }
}


export default App;
