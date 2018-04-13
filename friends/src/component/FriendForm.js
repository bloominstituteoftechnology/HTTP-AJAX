import React, { Component } from 'react';
import axios from 'axios'

class FriendForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: '',
        }
    }

    addFriend = event => {
        event.preventDefault();
            const friend = { name: this.state.name, age: this.state.age, email: this.state.email };
            axios
            .post(`http://localhost:5000/friends`, friend)
            .then(savedNote => {
                console.log(savedNote);
            })
            .catch(err => {
                console.log(err);
            });
            this.setState({ name: '', age: '', email: ''});
            };
    
    handleTextInput = e => {
        this.setState({ [e.target.name]: e.target.value});
        };  

    render() {
        return (
            <div>
                <form>
                    <input
                    type= 'text'
                    onChange={this.handleTextInput}
                    placeholder= 'Name'
                    name= 'name'
                    value= {this.state.name}
                    />
                    <input
                    type= 'text'
                    onChange={this.handleTextInput}
                    placeholder= 'Age'
                    name= 'age'
                    value= {this.state.age}
                    />
                    <input
                    type= 'text'
                    onChange= {this.handleTextInput}
                    placeholder= 'Email'
                    name= 'email'
                    value= {this.state.email}
                    />
                <button onClick={this.addFriend}>Make A Friend </button>
            </form>
        </div>
        )
    }
}

export default FriendForm;