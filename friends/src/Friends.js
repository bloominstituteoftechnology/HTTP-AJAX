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
        event.preventdefault();
    }
    
    render() {
        return (
            <div className='friends'>
                <div className='friend-form'>Add Friend
                    <form className='form'>
                        <input name='name' onChange={this.changeHandler} type='text' placeholder='Name'></input>
                        <input name='age' onChange={this.changeHandler} type='text' placeholder='Age'></input>
                        <input name='email' onChange={this.changeHandler} type='text' placeholder='Email'></input>
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