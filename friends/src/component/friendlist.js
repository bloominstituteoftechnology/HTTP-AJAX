import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

class FriendList extends Component {
    constructor() {
        super();
        this.state = {
            friends: []
        };
    }

componentDidMount() {
    axios
        .get("https://localhost:5000/friends")
        .then(response => this.setState({ friends: response.data }))
        .catch(error => console.log(error));
}

  render() {
    return (
        <div className='friend-list'>
           {this.state.friends.map(friend => (friend))}
        </div>
    );
  }
}

export default FriendList;
