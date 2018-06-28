
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class NewFriend extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: null,
            email: '',
            submitted: false
        }
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    addFriend = (e) => {
        e.preventDefault();
        const newFriend = {
        	name: this.state.name,
        	age: this.state.age,
        	email: this.state.email};
        axios
            .post(`http://localhost:5000/friends`, newFriend)
            .then( response => this.setState({name:'', age:null, email:'', submitted:true}))
    }

    render() {
        return this.state.submitted ? (
            <Link to="/"/>
        ) : (
            <form className="add-friend" onSubmit={this.addFriend}>
                <input type="text" name="name" placeholder="name" onChange={this.handleInput}/>
                <input type="number" name="age" placeholder="age" onChange={this.handleInput}/>
                <input type="text" name="email" placeholder="email" onChange={this.handleInput}/>
                <input type="submit" value="Add Friend"/>
            </form>

        )
    }
}

export default NewFriend;
