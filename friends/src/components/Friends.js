import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Friends.css';


export default class Friends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: []
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends/')
            .then(response => {
               this.setState(() => ({ friends: response.data }));
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }

    render() {
        console.log(this.state.friends)
        return (
            <div>
                {this.state.friends.map(friend => (
                    <FriendDetails key={friend.id} friend={friend} />
                ))}
            </div>
        );
    }
}


function FriendDetails({ friend }) {
    const { name, age, email } = friend;

    console.log(friend)

    return(
        <div className="container">
            <div className="friend-card">
                <h2>{ name }</h2>
                <h3>{ age }</h3>
                <h3>{ email }</h3>
            </div>
        </div>
    )
}