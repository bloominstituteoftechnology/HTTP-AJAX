import React from 'react';
import axios from 'axios';

import '../App.css';

class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: '',
            email: ''
        }
    }

    inputChangehandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    deleteFriend = (e) => {
        e.preventDefault();
        axios
            .delete(`http://localhost:5000/friends/${this.props.friend.id}`)
            .then(response => {
                this.props.deleteFriendFromList(response.data)
            })
            .catch(err => console.log(err));

    }

    updateFriend = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:5000/friends/${this.props.friend.id}`, {
                name: this.props.friend.name,
                age: this.state.age,
                email: this.state.email
            })
            .then(response => {
                this.props.updateFriendList(response.data);
            })
            .catch(err => console.log(err));
        this.setState({
            age: '',
            email: ''
        });
    }


    render() {
        return (
            <div className='card'>
                <button className='remove-button' onClick={this.deleteFriend}>X</button>
                <h1>Name: {this.props.friend.name}</h1>
                <h2>Age: {this.props.friend.age}</h2>
                <h2> E-mail: {this.props.friend.email}</h2>

                <h4>Update your friend's info!</h4>
                <form onSubmit={this.updateFriend}>
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
                    <button className='update-button' type='submit'>Update!</button>
                </form>

            </div>
        )
    }

}

export default Friend;