import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
const axios = require("axios")

class UpdateFriend extends Component {
    constructor(props) {
        super(props);
            this.state = {
                name: '',
                age: '',
                email: '',
            }
       
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            
        });
        let inputFriend = {
            name: this.state.name, 
            email: this.state.email,
            age: this.state.age,
        }
        this.setState({ 
            newFriend: inputFriend,
        })  
    }
    handleUpdateSubmit = () => {
        let newFriend = this.state
        let id = this.props.match.params.friendname
        axios 
            .put(`http://localhost:5000/friends/${id}`, newFriend)
            .then(response => {
                this.setState({ 
                friends: response.data,
                name: '',
                email: '',
                age: '',
            })
        })
            .catch(error => {
                console.log(`Guess you don't have them update privileges.`)
            })
        } 
 
    render() {
        return (
            <div className="container">
            You sure you want to update {this.props.match.params.friendname} ?
                <Form className="row">
                    <FormGroup className="col-4" onSubmit={this.handleUpdateSubmit}>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            onChange={this.handleChange}
                            value={this.state.name}
                            autoComplete='name' />
                    </FormGroup>
                    <FormGroup className="col-4" onSubmit={this.handleUpdateSubmit}>
                        <Input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email"
                            onChange={this.handleChange}
                            value={this.state.email}
                            autoComplete='email' />
                    </FormGroup>
                    <FormGroup className="col-4" onSubmit={this.handleUpdateSubmit}>
                        <Input
                            type="text"
                            name="age"
                            id="age"
                            placeholder="Age"
                            onChange={this.handleChange}
                            value={this.state.age}
                            autoComplete='age' />
                    </FormGroup>
                </Form>
                <div className="row">
                    <Button className="mx-auto" onClick={this.handleUpdateSubmit}> Submit </Button>
                </div>
            </div>
        )
    }
}

export default UpdateFriend