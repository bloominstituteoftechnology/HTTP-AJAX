import React, { Component } from 'react';
import axios from 'axios';


export default class FriendList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends:[],
            name: '',
            age: ''
        };
    }

    componentDidMount() {
        axios
        .get('http://localhost:5000/friends')
        .then(response => {
            this.setState(() => ({ friends: response.data }));
        })
        .catch(err => {
            console.error(err);
        });
    }

    render() {
        return(
            <div className="save-wrapper">
            {this.state.friends.map(friend => (
                <div key={friend.name} className="friend">
                {friend.name} | {friend.age}
                </div>
                ))}
                {console.log(`Friends ${this.state.friends}`)}
                </div>   
        );
    }
}
