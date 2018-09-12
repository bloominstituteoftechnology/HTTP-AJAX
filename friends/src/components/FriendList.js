import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Friend from './Friend';

export default class FriendList extends Component {
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
            this.setState(() => ({ friends: response.data }));
          })
          .catch(error => {
            console.error('Server Error', error);
          });
      }

    render() {
        console.log(this.state.friends);
        return(
            <div>
                {this.state.friends.map(friend => (
                    <Friend key={friend.id} friend={friend} />
                ))}
            </div>
        );
    }
}