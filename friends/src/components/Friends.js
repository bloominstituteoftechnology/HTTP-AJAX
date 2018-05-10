import React, { Component } from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap';
import FriendsList from './FriendsList'
import UpdateFriend from './UpdateFriend'
import { Route } from 'react-router-dom'
const axios = require("axios")

export default class Friends extends Component {
    constructor() {
        super();
        this.state = {
            friends: [],
            newFriend: [],
                name: '',
                email: '',
                age: '',
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
    handleSubmit = event => {
        let newFriend = this.state
    axios 
        .post(`http://localhost:5000/friends`,  newFriend )
        .then(response => {
            this.setState({ 
                friends: response.data,
                name: '',
                email: '',
                age: '',
            })
        })
        .catch(error => {
            console.log('Oops, I did it again.  I made you believe I could write some code.')
            let inputFriend = this.state.friends;
            inputFriend.push(this.state.newFriend);
            this.setState({
                friends: inputFriend,
                name: '',
                email: '',
                age: '',
            })
        })
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
            <div>
            <Route exact path="/" render={(props) => <FriendsList {...props} friends={this.state.friends}/>} />
            {this.state.friends.map(friend => {
             return <Route path={`/${friend.name.toLowerCase()}`} key={friend.email + friend.age} render={(props) => <UpdateFriend {...props} friends={this.state.friends} handleChange={this.state.handleChange}/>}/>
            })}
                <div className="container">
                   <Form className="row">
                    <FormGroup className="col-4" onSubmit={this.handleSubmit}>
                        <Input 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="Name" 
                            onChange={this.handleChange}
                            value={this.state.name}
                            autoComplete='name'/>
                    </FormGroup>
                    <FormGroup className="col-4" onSubmit={this.handleSubmit}>
                        <Input 
                            type="text" 
                            name="email" 
                            id="email" 
                            placeholder="Email" 
                            onChange={this.handleChange}
                            value={this.state.email}
                            autoComplete='email'/>
                    </FormGroup>
                    <FormGroup className="col-4" onSubmit={this.handleSubmit}>
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
            </div>
        )
        
    }
}



