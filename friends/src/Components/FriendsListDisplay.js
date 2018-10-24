import React from 'react';
import axios from 'axios';
import Friendslist from './FriendsList';

export default class FriendsList extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/friends')
            .then( response => {
                this.setState({
                    friends: response.data
                });
            })
            .catch( error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>{this.state.friends.map(friend => <FriendsList key={friend.id} friend={friend} />)}</div>
            
        )
    }
} 