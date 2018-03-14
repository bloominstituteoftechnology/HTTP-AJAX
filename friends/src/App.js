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
      age: 18,
      email: ''
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, age, email } = this.state;
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

  handleChange = (event) => {
    event.preventDefault();
    const{ name, value} = event.target;
    this.setState({ [name]: value })
  }

  componentDidMount(){
    axios 
      .get('http://localhost:5000/friends')
      .then(response => { 
        this.setState({ friends : response.data });
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.friends.map(friend => (
         <div key={friend.id}>
         <div>{friend.name}</div>
         <div>{friend.age}</div>
         <div>{friend.email}</div>
         </div>
        ))}
        {console.log(this.state.friends)}
        <div> 
            <Form>
                <FormGroup>
                <Label for="name">name</Label>
                <Input type="name" name="name" value={this.state.name} onChange={this.handleChange} id="name" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                <Label for="email">email</Label>
                <Input type="email" name="email" value={this.state.email} onChange={this.handleChange} id="email" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                <Label for="age">age</Label>
                <Input type="age" name="age" value={this.state.age} onChange={this.handleChange} id="age" placeholder="with a placeholder" />
                </FormGroup>
                <Button onClick={this.handleSubmit}>Submit</Button>
            </Form>
        </div>
      </div>
    );

  }
}

export default App;
