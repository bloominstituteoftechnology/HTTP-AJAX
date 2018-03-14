import React, { Component } from  'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Friends extends Component {
    constructor() {
        super();
        this.state = {
            Friends: [],
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
            this.setState({Friends: response.data});
            console.log(response);
        })
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({[name]: value})
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/friends`)
        .then(response => {
            this.setState({Friends: response.data});
        });
    }

    render() {
        return (
            <div className="Friends"> 
                <ul className="Friend__List">

                    {this.state.Friends.map(friend => {
                        return (
                            <li key={friend.id} className="Friend">
                                <div className="Friend__Name">{friend.name}</div>
                                <div className="Friend__Age">{`Age: ${friend.age}`}</div>
                                <div className="Friend__Email">{`Email: ${friend.email}`}</div>
                            </li>
                        );
                    })}
                        <Form>
                            <FormGroup>
                            <Label for="Name">Name: </Label>
                                <Input value={this.state.name} onChange={this.handleChange} name="name"  type="text" placeholder="name"/>
                            </FormGroup>
                            <FormGroup>
                            <Label for="Age">Age: </Label>
                                <Input value={this.state.age} onChange={this.handleChange} name="age"  type="text" placeholder="age"/>
                            </FormGroup>
                            <FormGroup>
                            <Label for="Email">Email: </Label>
                                <Input value={this.state.email} onChange={this.handleChange} name="email"  type="text" placeholder="email"/>
                            </FormGroup>
                            <Button onClick={this.handleSubmit} value="Save" />
                        </Form>
                </ul>
            </div>
        );
    }
}

Friends.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string,
};

export default Friends;