import React, { Component } from 'react';
import axios from 'axios';

export default class List extends Component {
    state = {
        friends: [],
    }

    componentDidMount() {
        const endpoint = 'http://localhost:5000/friends';
        axios.get(endpoint).then((response) => {
            console.log('response', response.data)
            this.setState({friends: response.data});
        });
    }

    render() {
        return (
            <div className="list">
            <h1>Friends List will be here</h1>
            <div>
                <ul className="friend-list">
                    {this.state.friends.map((friend, i) => {
                        return (
                            <li className="friend" key={i}>
                                <p>{`Friend ${i+1}`}</p>
                                <p>{`Name: ${friend.name}`}</p>
                                <p>{`Age: ${friend.age}`}</p>
                                <p>{`Email: ${friend.email}`}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
            </div>
        )
    }
}