import React, { Component } from 'react';
import axios from 'axios';
import IndividualFriend from "./IndividualFriend";

export default class FriendsList extends Component {
constructor(props) {
    super(props);
    this.state = {
        friends: []
        };
    }

    componentDidMount() {
    axios
        .get('http://localhost:5000/friends')
        .then(response => {
        this.setState({ friends: response.data });
        console.log(this.state.friends)})
        .catch(error => {
        console.error('Server Error', error);
        });
    }

    render() { 
        // let friends = this.state.friends;
        // // Force this data into array format!
        // friends = [...friends]
    return (
        <div className="friends-list">
        {this.state.friends.map(friend => <IndividualFriend id={friend.id} name={friend.name} age={friend.age} email={friend.email} /> )}
        </div>
        );
    }
}
