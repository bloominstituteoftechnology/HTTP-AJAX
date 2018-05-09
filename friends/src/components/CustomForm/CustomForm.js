import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CustomForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // "newFriend": {
                name: '',
                email: '',
                age: ''
            // }
        }
    }
    componentDidMount() {
        
    }

    handleInput = (e) => {
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.name);
        const {name, value} = e.target
        // console.log(name, value);
        this.setState({ [name]: value });
        // console.log(this.state);
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {name, email, age} = this.state;
        // console.log(name, email, age)
        const newFriend = { "name": name, "email": email, "age": age};
        axios.post(
            'http://localhost:5000/friends',
            newFriend
        ).then( response => console.log(response) );
    }

    

    render() {
        return (
            <Row>
                <Col sm="12" md={{size: 8, offset:2}}  >
                    <p>Hello from Form.</p>
                    <Form>
                        <FormGroup>
                        <Label for="exampleSearch">Name</Label>

                        {/* Two different manners to accomplish the same */}
                        {/* <Input value={this.state.name} onChange={this.handleInput} type="text" name="name" id="exampleSearch" placeholder="Add a new friend..." /> */}
                        <Input  onChange={this.handleInput} type="text" name="name" id="exampleSearch" placeholder="Add a new friend..." />
                        
                        </FormGroup>
                        <FormGroup>
                        <Label for="exampleEmail">Email</Label>

                        {/* Two different manners to accomplish the same */}
                        {/* <Input value={this.state.email} onChange={this.handleInput} type="email" name="email" id="exampleEmail" placeholder="friend's email" /> */}
                        <Input  onChange={this.handleInput} type="email" name="email" id="exampleEmail" placeholder="friend's email" />
                        
                        </FormGroup>
                        <FormGroup>
                        <Label for="exampleNumber">Age</Label>

                        {/* Two different manners to accomplish the same */}
                        {/* <Input value={this.state.age} onChange={this.handleInput} type="number" name="age" id="exampleNumber" placeholder="friend's age" /> */}
                        <Input  onChange={this.handleInput} type="number" name="age" id="exampleNumber" placeholder="friend's age" />
                        
                        </FormGroup>
                        <Button onClick={this.onSubmit} >Submit</Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default CustomForm;