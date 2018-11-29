import React from 'react';
import axios from 'axios';

import '../App.css';

class FriendForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: '',
            friends: []
        }
    }

    inputChangehandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, console.log(this.state))
    }

    onSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:5000/friends`, {
                name: this.state.name,
                age: this.state.age,
                email: this.state.email
            })
            .then(response => {
                this.props.addFriends(response.data);
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className='friend-form'>
                <h1>Add a friend!</h1>
                <form onSubmit={this.onSubmit}>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        onChange={this.inputChangehandler}
                    />
                    <input
                        type='text'
                        name='age'
                        placeholder='Age'
                        onChange={this.inputChangehandler}
                    />
                    <input
                        type='text'
                        name='email'
                        placeholder='Email'
                        onChange={this.inputChangehandler}
                    />
                    <button type='submit'>Add a Buddy</button>
                </form>
            </div>
        );
    };
}



export default FriendForm;