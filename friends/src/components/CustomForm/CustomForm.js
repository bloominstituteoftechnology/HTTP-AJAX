import React, { Component } from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CustomForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            age: ''
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

    render() {
        return (
            <Row>
                <Col sm="12" md={{size: 8, offset:2}}  >
                    <p>Hello from Form.</p>
                    <Form>
                        <FormGroup>
                        <Label for="exampleSearch">Name</Label>
                        <Input value={this.state.name} onChange={this.handleInput} type="text" name="name" id="exampleSearch" placeholder="Add a new friend..." />
                        </FormGroup>
                        <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input value={this.state.email} onChange={this.handleInput} type="email" name="email" id="exampleEmail" placeholder="friend's email" />
                        </FormGroup>
                        <FormGroup>
                        <Label for="exampleNumber">Age</Label>
                        <Input value={this.state.age} onChange={this.handleInput} type="number" name="age" id="exampleNumber" placeholder="friend's age" />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default CustomForm;