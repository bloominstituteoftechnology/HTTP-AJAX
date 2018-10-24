import React, { Component } from 'react';
import axios from 'axios';
import FriendCard from './FriendCard';

export default class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: '',
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchFriend(id);    
    }

    fetchFriend = id => {
        axios
            .get(`http://localhost:5000/friends/${id}`)
            .then(response => {
                this.setState(() => ({ friend: response.data }));
            })
            .catch(error => {
                console.error(error);
            });
    };

    render() {
        if (!this.state.friend) {
            return <div>Loading...</div>;
        }
    
        return (
            <div>
                <FriendCard key={this.state.friend.id} friend={this.state.friend} />
            </div>
        )
    }
}
