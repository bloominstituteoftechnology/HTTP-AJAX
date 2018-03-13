import React, { Component } from 'react';
import './AddFriend.css';
import axios from 'axios';

class AddFriend extends Component {
    state = {
        name: '',
        age: '',
        email: ''
    }

    handleSubmit(event) {
        axios.post('', {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        })
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        });
    }

    render() {
        return (
            <div>
                <form className="AddFriend" onSumbit={AddFriend("johnny", 21, "johnny@example.com")}>
                    <input type="text" value="Name"></input>
                    <input type="text" value="Age"></input>
                    <input type="text" value="Email"></input>
                    <button type="submit" value="Submit">Add Friend</button>
                </form>
            </div>
        );
    }
}

export default AddFriend;