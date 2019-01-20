import React, { Component } from 'react'
import axios from 'axios';

class FriendsList extends Component {
    constructor () {
        super();
        this.state ={
            friends: []
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                console.log(response)
                this.setState(() => ({ friends: response.data })
            )})
            .catch(error => {
                console.log('Server Error',error)})
    }

    render() {
        return(
            <div>
                <p>Hi from FriendsList</p>
                {this.state.friends.map(friend => {
                   return <li key={friend.id}>{friend.name} {friend.age} {friend.email}</li>
                })}        
            </div>
        )
    }
}

export default FriendsList