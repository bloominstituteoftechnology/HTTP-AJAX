
//import App from './App';
import React, { Component } from 'react';
//import axios from 'axios';
//import  { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const NewFriend = () => {
    return <h3>Add NewFriend</h3>
}

/*class NewFriend extends Component {
    constructor(){
      super()
      this.state = {
        friends: [],
        name: '',
        age: '',
        email: ''
     }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/friends')
          .then(response => {
          this.setState({friends: response.data})
    })
    .catch(err => console.log(err))
}
     
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })};

    buttonSubmit = () => {
        const { name, age, email } = this.state_
        axios.post('http://localhost:5000/friends', { name, age, email })
        .then( (response) => {
            this.setState({ friends: response.data, name: '', age: '',
        email: ''})
        })
    }*/

/*render() {
        return (
            <Form>
            <h1>Add New Friend</h1>
            
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" onChange={this.handleChange} value={this.state.name} name="name" placehlder="name" />
                </FormGroup>
                <FormGroup>
                    <Label for="name">Age</Label>
                    <Input type="number" onChange={this.handleChange} value={this.state.age} name="age" placehlder="age" />
                </FormGroup>
                <FormGroup>
                    <Label for="name">Email</Label>
                    <Input type="text" onChange={this.handleChange} value={this.state.email} name="email" placehlder="email" />
                </FormGroup>
                <Button onClick={this.buttonSubmit}>Submit</Button>
            </Form>
        );
    }
}*/
   

export default NewFriend;
