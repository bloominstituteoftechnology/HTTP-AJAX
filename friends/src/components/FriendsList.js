import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import axios from 'axios';
import FriendsForm from './FriendsForm';

class FriendsList extends Component {
    constructor () {
        super();
        this.state ={
            friends: [],
            newFriend: {
                name: '',
                age: '',
                email: '',
            }
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
                <div>
                    <p>Hi from FriendsList</p>
                    {this.state.friends.map(friend => {
                    return <li key={friend.id}>{friend.name} {friend.age} {friend.email}</li>
                    })}
                </div> 
                <div>
                    <NavLink exact to="/friendsform" >Add Friend</NavLink>
                </div>
                <div>
                    <Route 
                        path="/friendsfrom" 
                        render={props => <FriendsForm {...props} newFriend={this.state.newFriend} />} 
                    />
                </div>       
            </div>
        )
    }
}

export default FriendsList