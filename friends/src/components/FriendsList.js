import React from 'react';
import axios from 'axios';

import Friend from './Friend.js';

class FriendsList extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/friends")
            .then(response => {
                console.log(response);
                this.setState({friends: response.data})
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                {this.state.friends.map(friend => (
                    <Friend key={friend.id} friend={friend} />
                ))}
            </div>
        );
      }
}

export default FriendsList;