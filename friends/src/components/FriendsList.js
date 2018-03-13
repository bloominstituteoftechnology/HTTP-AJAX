import React, { Component } from  'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import './FriendsList.css';

class FriendsList extends Component {
    constructor() {
        super();
        this.state = {
            Friends: [],
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/friends`)
        .then(response => {
            this.setState({Friends: response.data});
        });
    }
    render() {
        return (
            <div className="Friends"> 
                <h3 className="Friends__Title">Friends</h3>
                {this.state.Friends.map(friend => {
                    return (
                        <div key={friend.id} className="List__Friend">
                          <div className="Friend__Name">{friend.name}</div>
                          <div className="Friend__Age">{`Age: ${friend.age}`}</div>
                          <div className="Friend__Email">{`Email: ${friend.email}`}</div>
                        </div>
                      );
                })}
            </div>
        );
    }
}

FriendsList.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string,
};

export default FriendsList;