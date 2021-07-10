import React, { Component } from 'react';
import axios from 'axios';

import EditFriend from './EditFriend';

class Friend extends Component {
    constructor(props) {
        super(props);
        this.state ={
            editForm: false,
            editFriend: {
                name: '',
                age: '',
                email: ''
            }
        }
    }

    toggleForm = e => {
        e.preventDefault();
        this.setState({editForm: !this.state.editForm});
    }

    editFriendHandler = e => {
        this.setState({
            editFriend: {
                ...this.state.editFriend,
                [e.target.name]: e.target.value
            }
        })
    }

    saveEditFriend = e => {
        e.preventDefault();

        axios.put(`http://localhost:5000/friends/${this.props.friend.id}`, this.state.editFriend)
        .then(response => {
            console.log(response);
            this.props.handleSetData(response.data);
            this.setState({
                editFriend: {
                    name: '',
                    age: '',
                    email: ''
                }
            })
        })
        .catch(error => console.log(error));
    }

    render() {
        const {friend, handleDeleteFriend} = this.props;
        const {editForm, editFriend} = this.state;

        return (
            <div>
                <p>Name: {friend.name}</p>
                <p>Age: {friend.age}</p>
                <p>Email: {friend.email}</p>

                {editForm ? <EditFriend 
                    friend={editFriend}
                    editFriendHandler={this.editFriendHandler}
                    saveEditFriend={this.saveEditFriend}     
                /> : null}

                <button onClick={this.toggleForm}>Edit</button>
                <button onClick={e => (handleDeleteFriend(e, friend.id))}>Delete</button>
                <hr />
            </div>
        )
    }

    
}

export default Friend;