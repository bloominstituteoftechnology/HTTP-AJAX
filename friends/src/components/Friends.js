import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const axios = require("axios")

export default class Friends extends Component {
    constructor() {
        super();
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        axios
            .get(`http://localhost:5000/friends`)
            .then(response => {
                this.setState({ friends: response.data })
            })
        }
    
    render() {
        return (
            <div className="container-fluid">
                {this.state.friends.map(friend => {
                    return  (
                        <div className="row">
                            <div className="col-3"> {friend.id} </div>
                            <div className="col-3"> {friend.name} </div>
                            <div className="col-3"> {friend.email} </div>
                            <div className="col-3"> {friend.age} </div>
                        </div>
            )})}
            <Form className="row">
                    <FormGroup className="col-3">
                        <Input type="id" name="id" id="id" placeholder="ID" />
                    </FormGroup>
                    <FormGroup className="col-3">
                        <Input type="name" name="name" id="name" placeholder="Name" />
                    </FormGroup>
                    <FormGroup className="col-3">
                        <Input type="email" name="email" id="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup className="col-3">
                        <Input type="age" name="age" id="age" placeholder="Age" />
                    </FormGroup>
                </Form>
                    <div className="row">
                    <Button className="mx-auto"> Submit </Button>
                    </div>
            </div>
        )
        
    }
}



