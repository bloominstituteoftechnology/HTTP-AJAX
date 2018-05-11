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
        // e.preventDefault();
        console.log('ClickEvent',e.target.nodeName);
        if (e.target.nodeName !== 'BUTTON') {return}
        const {name, email, age} = this.state;
        // console.log(name, email, age)
        const newFriend = { "name": name, "email": email, "age": age};
        axios.post(
            'http://localhost:5000/friends',
            newFriend
        )
        .then( response => {
            console.log('Axios POST response',response);
            this.props.upDate();
            this.setState( { "name": '', "email": '', "age": ''} )
        });
        
        console.log(this.props);
        // this.props.upDate();
    }

    

    render() {
        return (
            <Row>
                <Col sm="12" md={{size: 8, offset:2}}  >
                    {/* <p>Hello from Form.</p> */}
                    <Form onClick={this.onSubmit} onChange={this.handleInput} >
                        <FormGroup>
                        <Label for="exampleSearch">Name</Label>

                        {/* Different manners to accomplish the same */}
                        <Input value={this.state.name} type="text" name="name" id="exampleSearch" placeholder="Add a new friend..." />
                        {/* <Input value={this.state.name} onChange={this.handleInput} type="text" name="name" id="exampleSearch" placeholder="Add a new friend..." /> */}
                        {/* <Input  onChange={this.handleInput} type="text" name="name" id="exampleSearch" placeholder="Add a new friend..." /> */}
                        
                        </FormGroup>
                        <FormGroup>
                        <Label for="exampleEmail">Email</Label>

                        {/* Different manners to accomplish the same */}
                        <Input value={this.state.email} type="email" name="email" id="exampleEmail" placeholder="friend's email" />
                        {/* <Input value={this.state.email} onChange={this.handleInput} type="email" name="email" id="exampleEmail" placeholder="friend's email" /> */}
                        {/* <Input  onChange={this.handleInput} type="email" name="email" id="exampleEmail" placeholder="friend's email" /> */}
                        
                        </FormGroup>
                        <FormGroup>
                        <Label for="exampleNumber">Age</Label>

                        {/* Different manners to accomplish the same */}
                        <Input value={this.state.age} type="number" name="age" id="exampleNumber" placeholder="friend's age" />
                        {/* <Input value={this.state.age} onChange={this.handleInput} type="number" name="age" id="exampleNumber" placeholder="friend's age" /> */}
                        {/* <Input  onChange={this.handleInput} type="number" name="age" id="exampleNumber" placeholder="friend's age" /> */}
                        
                        </FormGroup>
                        <Button >Submit</Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default CustomForm;