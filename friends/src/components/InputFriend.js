import React, { Component } from 'react';
import axios from 'axios';


export default class InputFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: []
        };
        }

    saveNewFriend = () => {
        const myNewFriend = { name: this.state.name, age: parseInt(this.state.age, 10), email: this.state.email}
        axios.post(`http://localhost:5000/friends`, myNewFriend)
            .then(savedFriend => {
                console.log(savedFriend);
            })
            .catch(err => {
                console.log(err);
            });
        this.setState({name: '', age: '', email: ''});
    };

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };
    

    render() {
        return (
        <div className="save-wrapper">
            <p className="App-intro">
                Add a friend.
            </p>
            <input 
                type='text'
                onChange={this.handleInput}
                placeholder='name'
                name = 'name'
                value={this.state.name}
            />
            <input 
                type='number'
                onChange={this.handleInput}
                placeholder='age'
                name = 'age'
                value={this.state.age}
            />
            <input 
                type='text'
                onChange={this.handleInput}
                placeholder='email'
                name = 'email'
                value={this.state.email}
            />
            <button onClick={this.saveNewFriend}>Save New Friend</button>
        </div>
        );
    }
}