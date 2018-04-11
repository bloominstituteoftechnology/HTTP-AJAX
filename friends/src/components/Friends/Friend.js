import React from 'react';
import axios from 'axios';
import './Friends.css'
class Friend extends React.Component {
    constructor(props) {
        super(props);
    }

    removeFriend = (event) => {
        console.log(event.target.id);
        axios.delete(`http://localhost:5000/friends/${event.target.id}`)
            .then((response) => {
                console.log(`Successfully deleted. Response: ${response}`)
                this.props.getFriends();
            })
            .catch((error) => {
                console.log(`Error deleting friend: ${error}`)
            })
    };

    render() {
        return (
            <div className='Friend'>
                <li key={this.props.friend.id}>
                    <div>{this.props.friend.name}</div>
                    <div>{this.props.friend.age}</div>
                    <div>{this.props.friend.email}</div>
                    <button id={this.props.friend.id} onClick={this.removeFriend}>Remove</button>
                </li>
            </div>
        );
    }
}

export default Friend;