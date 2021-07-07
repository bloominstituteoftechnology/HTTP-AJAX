import React, { Component } from 'react';
import FriendForm from './friendform';
import axios from 'axios';

class FriendsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: null,
            email: ''
        }
    }
    
    render() {
    return (  
        <div>
            {this.props.friendslist.map(friend => 
            <div key={friend.id}>
                <h3>{friend.name}</h3>
                <p>{friend.age}</p>
                <p>{friend.email}</p>
                <EditForm friendID={friend.id} editFriend={this.props.editFriend}/>
                <div>
                    <button onClick={() => this.props.deleteFriend(friend.id)}>Delete</button>
                </div>
            </div>)}
        </div>
    );
    }
}
 
export default FriendsList;

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: null,
            email: ''
        }
    }

    handleFriendChange = event => {
        this.setState({ 
            [event.target.name]: event.target.value, 
            [event.target.age]: event.target.value, 
            [event.target.email]: event.target.value})
    };

    editFriend = () => {
        const updatedFriendObj = {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
        }
        axios.put(`http://localhost:5000/friends/${this.props.friendID}`, updatedFriendObj)
        .then(response => {
        this.setState({
            friends: response.data
        })
        })
        .catch((err) => console.log(err))
    }

    render() {
        return (
            <form onSubmit={this.editFriend}>
                <input type="text" placeholder="Name" name="name" onChange={this.handleFriendChange} value={this.state.name} autoComplete="off" />
                <input type="number" placeholder="Age" name="age" onChange={this.handleFriendChange} value={this.state.age} autoComplete="off" />
                <input type="email" placeholder="Email" name="email" onChange={this.handleFriendChange} value={this.state.email} autoComplete="off" /> 
                <button>Edit</button>
            </form>     
        );
    }
}