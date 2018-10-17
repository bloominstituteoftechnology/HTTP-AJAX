import React, { Component } from 'react';
import axios from 'axios';
import styles from './App.css';

export default class Friends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            name: '',
            age: '',
            email: ''
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState(() => ({ friends: [...response.data] }));
            })
            .catch(error => {
                console.error('Server Error', error);
            })
    }

    changeHandler = event => {
        event.target.name === 'age' ? 
        this.setState({ [event.target.name]: Number(event.target.value) }) :
        this.setState({ [event.target.name]: event.target.value })
    };

    addFriend = event => {
        event.preventDefault();
        const { name, age, email } = this.state;
        let newFriend = null;
        name && age && email ? newFriend = {name: name, age: age, email: email} : alert('Please enter friend details')
        if (newFriend) {
            this.setState(() => ({
                friends: [...this.state.friends, newFriend],
                name: '',
                age: '',
                email: ''
            }))
        }   
    }
    
    render() {
        return (
            <div className='friends'>
                <div className='friend-form'>Add Friend
                    <form className='form' onSubmit={this.addFriend}>
                        <input name='name' value={this.state.name} onChange={this.changeHandler} type='text' placeholder='Name'></input>
                        <input name='age' value={this.state.age} onChange={this.changeHandler} type='text' placeholder='Age'></input>
                        <input name='email' value={this.state.email} onChange={this.changeHandler} type='text' placeholder='Email'></input>
                        <input className='submit' type='submit' value='Submit'/>
                    </form>
                </div>
                <div className="friend-list">Friend List
                    {this.state.friends.map(friend => {
                        return (
                            <div className="friend-card">
                                <div>Name: {friend.name}</div>
                                <div>Age: {friend.age}</div>
                                <div>Email: {friend.email}</div>
                            </div>)
                    })}
                </div>
            </div>
        );
    }
}