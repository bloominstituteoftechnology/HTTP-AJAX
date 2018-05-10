import React, { Component } from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap';
const axios = require("axios")

export default class Friends extends Component {
    constructor() {
        super();
        this.state = {
            friends: [],
            newFriend: [],
                id: '',
                name: '',
                email: '',
                age: '',
        }
    }
    handleChange = event => {
        
        this.setState({
            [event.target.name]: event.target.value,
            
        })
        let inputFriend = {
            id: this.state.id,
            name: this.state.name, 
            email: this.state.email,
            age: this.state.age,
        }
        this.setState({ 
            newFriend: inputFriend 
        })  
    }
    handleSubmit = event => {
        event.preventDefault();       
        console.log('state new friend', this.state.newFriend)
        let inputFriend = this.state.friends;
        inputFriend.push(this.state.newFriend);
        this.setState({
            friends: inputFriend,
            id: '',
            name: '',
            email: '',
            age: '',
        })
        console.log('newFriend after concat', this.state.newFriend, 'friends after concat', this.state.friends)
    }

    componentDidMount() {
        axios
            .get(`http://localhost:5000/friends`)
            .then(response => {
                this.setState({ friends: response.data })
            })    
            
        }
    
    render() {
        console.log(this.state)
        return (
            <div className="container-fluid">
                {this.state.friends.map(friend => {
                    return  (
                        <div className="row" key={friend.name + friend.age}>
                            <div className="col-3"> {friend.id} </div>
                            <div className="col-3"> {friend.name} </div>
                            <div className="col-3"> {friend.email} </div>
                            <div className="col-3"> {friend.age} </div>
                        </div>
                        
            )})}
            <Form className="row">
                    <FormGroup className="col-3" onSubmit={this.handleSubmit}>
                        <Input 
                            type="text" 
                            name="id" 
                            id="id" 
                            placeholder="ID" 
                            onChange={this.handleChange}
                            value={this.state.id}
                            autoComplete='id'/>
                    </FormGroup>
                    <FormGroup className="col-3" onSubmit={this.handleSubmit}>
                        <Input 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="Name" 
                            onChange={this.handleChange}
                            value={this.state.name}
                            autoComplete='name'/>
                    </FormGroup>
                    <FormGroup className="col-3" onSubmit={this.handleSubmit}>
                        <Input 
                            type="text" 
                            name="email" 
                            id="email" 
                            placeholder="Email" 
                            onChange={this.handleChange}
                            value={this.state.email}
                            autoComplete='email'/>
                    </FormGroup>
                    <FormGroup className="col-3" onSubmit={this.handleSubmit}>
                        <Input 
                            type="text" 
                            name="age" 
                            id="age" 
                            placeholder="Age"
                            onChange={this.handleChange}
                            value={this.state.age}
                            autoComplete='age'/>
                    </FormGroup>
                </Form>
                    <div className="row">
                    <Button className="mx-auto" onClick={this.handleSubmit}> Submit </Button>
                    </div>
            </div>
        )
        
    }
}



