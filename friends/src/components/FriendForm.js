import React, { Component } from 'react';
import axios from 'axios';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class FriendForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '', 
            email: '',
            age: 18,
        };
    } 

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, email, age } = this.state
        axios.post(`http://localhost:5000/friends`, {name, email, age})
        .then(response => {
            this.setState({friends: response.data});
            console.log(response);
        });
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({[name]: value})
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/friends`)
        .then(response => {
            this.setState({friends: response.data});
        });
    }

    render() {
        return (
            <div className="Friends"> 
                <ul className="Friend__List">
                    <Form>
                        <FormGroup>
                        <Label for="Name">Name: </Label>
                            <Input value={this.state.name} onChange={this.handleChange} 
                            name="name" type="text" placeholder="name" />
                        </FormGroup>
                        <FormGroup>
                        <Label for="Age">Age: </Label>
                            <Input value={this.state.age} onChange={this.handleChange} name="age"  type="number" placeholder="age"/>
                        </FormGroup>
                        <FormGroup>
                        <Label for="Email">Email: </Label>
                            <Input value={this.state.email} onChange={this.handleChange} name="email"  type="text" placeholder="email"/>
                        </FormGroup>
                        <Input onClick={this.handleSubmit} type="Button" value="Save" />
                    </Form>
            	</ul>
        	</div>
           );
    }
}


export default FriendForm;