import React, { Component } from 'react';
import axios from 'axios';

class FriendList extends Component {
    constructor() {
        super();
        this.state = {
            friends: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/friends')
            .then(function (response) {
                this.setState({
                    friends: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <p>Hello World</p>
        );
    }
}

export default FriendList;