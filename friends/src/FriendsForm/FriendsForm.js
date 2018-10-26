import React from 'react';
import axios from 'axios';

class FriendsForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: '',
            friends: []
        }
    }

    //handle change to input in form

    inputChangehandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //add new friend through past and pass up friend data to app 

    addNew = (e) => {
        e.preventDefault();
        axios
        .post(`http://localhost:5000/friends`, {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        })
        .then(response => {
            this.props.addFriendToList(response.data);
        })
        .catch(err => console.log(err));
        this.setState({
            name: '',
            age: '',
            email: ''
        });  
    }

    render() {
        return (
            <div>
                <h2>Add a friend!</h2>
                <form onSubmit={this.addNew}>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        onChange={this.inputChangehandler}
                        value={this.state.name}
                    />
                    <input
                        type='text'
                        name='age'
                        placeholder='Age'
                        onChange={this.inputChangehandler}
                        value={this.state.age}
                    />
                    <input
                        type='text'
                        name='email'
                        placeholder='Email'
                        onChange={this.inputChangehandler}
                        value={this.state.email}
                    />
                    <button type='submit'>Yay! New friend!</button>
                </form>
            </div>
        );
    };
}

export default FriendsForm;