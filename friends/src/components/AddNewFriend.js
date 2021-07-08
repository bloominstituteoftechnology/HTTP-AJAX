// !! signifies a question, thought, etc.

import React, { Component } from 'react';
import axios from 'axios';

class AddNewFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: ''
        };
    }

    handleInput = (event) => {
        console.log(this.state);
        this.setState({ [event.target.name]: event.target.value });
    };

    submitFriend = (event) => {
        event.preventDefault();
        this.setState({ friends: [...friends, this.state]});
    };

    render() {
        return (
            <div>
                <form action='http://localhost:5000' method='post'> {/* !! should action be /friends or http://..5000/friends? */}
                    <fieldset>
                        <legend>New Friend</legend>
                        <label for='name'>Name</label>
                        <input
                            type='text'
                            name='name'
                            value={this.state.name}
                            onChange={this.handleInput}
                        />
                        <label for='age'>Age</label>
                        <input
                            type='number'
                            name='age'
                            value={this.state.age}
                            onChange={this.handleInput}
                        />
                        <label for='email'>Email</label>
                        <input
                            type='email'
                            name='email'
                            value={this.state.email}
                            onChange={this.handleInput}
                        />
                        <div class='button'>
                            <button type='submit' onClick={this.submitFriend}>Add friend</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }

    componentDidMount() {
        axios.post('/friends', {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        })
          .then(response => {
            this.setState({ friends: response.data });
          })
          .catch(error => {
            console.log(`Error getting friends: ${error}`);
          })
    }

}

export default AddNewFriend;