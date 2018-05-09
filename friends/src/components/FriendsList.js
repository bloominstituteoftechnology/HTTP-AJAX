import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class FriendsList extends Component {
    constructor(){ 
        super();
        this.state = {
            friends: [],
        }
    }

    render() {
        return (
            <div>
                <div className="FriendsList__container">
                    {this.state.friends.map((friend) => {
                        return(
                            <div key={friend.id}>
                                <div className="FriendsList__friend">
                                <div className="FriendsList__friendItem">{friend.name}</div>
                                <div>{`Age: ${friend.age}`}</div>
                                <div>{`Email: ${friend.email}`}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <Link to={{
                    pathname: "/addfriend",
                    state: { newID: this.state.friends.length} 
                    }}>Add Friend</Link>
            </div>
        )
    };

    componentDidMount() {
        axios.get('http://localhost:5000/friends')
        .then(response => this.setState({friends: response.data}))
        .catch(error => console.log(`You dun goofed: ${error}`))
    }
}