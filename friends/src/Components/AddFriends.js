import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label } from 'reactstrap';

class AddFriends extends Component {
    constructor(props) {
        super(props);        
    }
   
    render() {
        return (
            <Form onSubmit = {this.props.addNewFriend} inline>
                <FormGroup className = 'mb-2 mr-sm-2 mb-sm-0'>
                <Label for='name' className = 'mr-sm-2'>Name</Label>
                    <input type = 'text' onChange = {this.props.handleInput} name = 'name' value = {this.props.name} placeholder = 'name' />
                </FormGroup>
                <FormGroup className = 'mb-2 mr-sm-2 mb-sm-0'>
                <Label for='age' className = 'mr-sm-2'>Age</Label>
                    <input type = 'number' onChange = {this.props.handleInput} name = 'age' value = {this.props.age} placeholder = 'age' />
                </FormGroup>
                <FormGroup className = 'mb-2 mr-sm-2 mb-sm-0'>
                <Label for='email' className = 'mr-sm-2'>Email</Label>
                    <input type = 'email' onChange = {this.props.handleInput} name = 'email' value = {this.props.email} placeholder = 'email' />
                </FormGroup>                
                <Button>Submit</Button>
            </Form>
        )
    }
}

export default AddFriends;