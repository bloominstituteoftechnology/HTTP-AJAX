import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddFriends extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: '' 
        }
    }

    handleInput = ( event ) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    addNewFriend = () => {
        const newFriend = { name: this.state.name, age: this.state.age, email: this.state.email };
        axios.post(`http://localhost:5000/friends`, newFriend)
        .then( response => { this.setState({ name: '', age: '', email: ''})
        })
        .catch (error => console.log(error)); 
    }

    render() {
        return (
            <Form inline>
                <FormGroup className = 'mb-2 mr-sm-2 mb-sm-0'>
                <Label for='Add Friend!' className = 'mr-sm-2'>Name</Label>
                    <input type = 'text' onChange = {this.handleInput} name = 'name' value = {this.state.name} placeholder = 'name' />
                </FormGroup>
                <FormGroup className = 'mb-2 mr-sm-2 mb-sm-0'>
                <Label for='Add Friend!' className = 'mr-sm-2'>Age</Label>
                    <input type = 'number' onChange = {this.handleInput} name = 'age' value = {this.state.age} placeholder = 'age' />
                </FormGroup>
                <FormGroup className = 'mb-2 mr-sm-2 mb-sm-0'>
                <Label for='Add Friend!' className = 'mr-sm-2'>Email</Label>
                    <input type = 'email' onChange = {this.handleInput} name = 'email' value = {this.state.email} placeholder = 'email' />
                </FormGroup>                
                <Button>Submit</Button>
            </Form>
        )
    }
}

export default AddFriends;