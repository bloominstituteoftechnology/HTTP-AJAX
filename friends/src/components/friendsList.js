import React, { Component } from 'react';
import axios from 'axios'
import './friendsList.css'
import PropTypes from 'prop-types';

class FriendsList extends Component {
    constructor() {
        super();
        this.state = {
            Friends: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/friends')
            .then(response => {
                this.setState({ Friends: response.data });
                console.log(this.state.Friends);
            });
    }

    render() {
        return (
            <div className="Friends">
                <h1 className="Friends__Tile">Friends</h1>
                {this.state.Friends.map((friend) => {
                    return (
                        <div className="List__Friend" key={friend.id}>
                            <div className="Friend__Name">{friend.name}</div>
                            <div className="Friend__Age">age: {friend.age}</div>
                            <div className="Friend__Email">email: {friend.email}</div>
                        </div>
                    )})}
            </div>
        );
    }
}

FriendsList.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string,
}

export default FriendsList 
