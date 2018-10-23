import React from 'react';
import axios from 'axios';
import Friend from './Friend';

export default class FriendList extends React.Component {
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
            <div>{this.state.friends.map(friend => <Friend key={friend.id} friend={friend} />)}</div>
            
        )
    }
}