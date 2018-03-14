import React, { Component } from 'react';
import axios from 'axios';
import Friend from '../Friend/Friend';
import './FriendsList.css';
import AddFriend from '../AddFriend/AddFriend';

class FriendsList extends Component {
    state = {
        friends: []
    }

    componentDidMount() {
        axios
        .get('http://localhost:5000/friends')
        .then(result => {this.setState({ friends: result.data})})
        .catch( (reason: any) => console.log('You don\'t have any friends!'));
      }

    render() {
        return (
            <div className="Container">
                <div className="FriendsList">
                    {this.state.friends.map(friend => {
                        return <Friend key={friend.id}friend={friend}/>
                    })}
                </div>
                <AddFriend />
            </div>
        );
    }
}


export default FriendsList;