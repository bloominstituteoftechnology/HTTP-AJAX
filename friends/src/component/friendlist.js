import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
        <div>

        </div>
    );
  }
}

export default FriendList;
