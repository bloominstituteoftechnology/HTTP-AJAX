import React, { Component } from 'react';
import axios from 'axios';

import Friend from './Friend';

class FriendList extends Component {
    constructor() {
        super();
        this.state = {
            friends: []
        };
    }

    componentDidMount() {
        const self = this;
        axios.get('http://localhost:5000/friends')
            .then(function (response) {

                const friendArr = [];
                response.data.map(friend => {
                    friendArr.push([friend.id, friend.name, friend.age, friend.email])
                });

                self.setState({
                    friends: friendArr
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                {this.state.friends.map(friend => {
                    return <Friend key={friend[0]} friend={friend} />
                })}
            </div>
        );
    }
}

export default FriendList;