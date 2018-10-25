import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import FriendForm from './FriendForm';
import FriendCard from './FriendCard';

export default class FriendList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
        };
    }

    componentDidMount() {
        axios
            .get(`http://localhost:5000/friends`)
            .then(response => {
                this.setState(() => ({ friends: response.data }));
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }

    render() {
        return (
            <div>
                FriendList!
                <FriendForm />
                {this.state.friends.map(friend => (
                    <Link to={`/friends/${friend.id}`}>
                        <FriendCard key={friend.id} friend={friend} />
                    </Link>
                ))}
            </div>
        );
    }
} 