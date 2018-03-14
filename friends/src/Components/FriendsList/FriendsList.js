import React, { Component } from 'react';
import axios from 'axios';
import './FriendsList.css';
import { Link } from 'react-router-dom';
import Friend from '../Friend/Friend';

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
                        return <Friend key={friend.id} friend={friend} />
                    })}
                </div>
                <Link to="/addfriend">Add Friend</Link>
            </div>
        );
    }
}


export default FriendsList;