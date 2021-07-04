import React, { Component } from 'react';
import axios from 'axios';
import './FriendsList.css';
import AddFriend from './AddFriend';

export default class FriendsList extends Component {
    constructor() {
        super();
        this.state = {
            friends: [],
        }
    }

componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => {
        this.setState({ friends: response.data });
        console.log(response);
    })
    .catch(error => {
        console.log(`Error fetching friends: ${error}`);
       console.log(error)
    });
}

render() {
   
    return (
        <div className="mainDiv">
            <AddFriend />
            {this.state.friends.map(friend => (
                <div className="nameCard">
                <div className="nameBox"><h3 className="name">{friend.name}</h3></div>
                <h3 className="age">Age: {friend.age}</h3>
                <h3 className="email">Email: {friend.email}</h3>
                </div>
            ))}
        </div>
    )

}
};