import React, { Component } from 'react';
import axios from 'axios';


class FriendsList extends Component {
    constructor() {
        super();
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/friends').then(response => { this.setState({ friends: response.data });
    });
    }

    render() {
        return (
            
            <div>
                <h1>Friends</h1>
                {this.state.friends.map(friend => {
                    return (
                        <div key={friend.id}>
                            <div className="friend-name">{friend.name}</div>
                            <div className="friend-age">{`Age: ${friend.age}`}</div>
                            <div className="friend-email">{`Email: ${friend.email}`}</div>
                        </div>
                    )
                })}
                
            </div>
        )
    }
}

export default FriendsList;
