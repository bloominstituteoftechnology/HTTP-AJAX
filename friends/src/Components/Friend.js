import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import FriendCard from './FriendCard';
import './Friend.css';

export default class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: null
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
                console.log('fetched friend', response);
                this.setState(() => ({ friend: response.data}));
            })
            .catch(err => {
                console.log(`Error fetching friend: ${err}`);
            });
    }

    render() {
        if (!this.state.friend) {
            return (
                <div>
                    Loading...
                </div>
            )
        }

        return(
            <div>
                <Link to={`/`}>
                    <button className='home'>Home</button>
                </Link>
                <FriendCard friend={this.state.friend}/>
            </div>
        );
    }
}