import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import AddFriend from './AddFriend';
import FriendCard from './FriendCard';
import './FriendsList.css';

export default class FriendsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: []
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                console.log(response.data);
                this.setState({ friends: response.data });
            })
            .catch(err => {
                console.log(`Error fetching friends: ${err}`);
            });
    }

    render() {
        console.log('state', this.state.friends);
        return(
            <div>
                <AddFriend />
                {this.state.friends.map((f) => (
                    <div key={f.id}>
                        <Link to={`/friends/${f.id}`} className='Link'>
                            <FriendCard friend={f} />
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
}