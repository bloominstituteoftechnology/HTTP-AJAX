import React, { Component } from 'react';
import axios from 'axios';

export default class FriendList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState(() => ({ friends: response.data }));
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }

    reder() {
        return (
            <div className="friend-list">
                <h6>Hi! This is the friend List!</h6>
                {/* {this.state.friends.map(friend => (
                    <FriendCard key={friend.id} friend={friend} />
                ))} */}
            </div>
        ); 
    };
};
