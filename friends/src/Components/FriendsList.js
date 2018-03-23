import React, {Component} from 'react';
import './FriendsList.css'
import axios from 'axios';
import FriendsForm from './FriendsForm';

class FriendsList extends Component {
    constructor() {
        super();
        this.state = {
            friends: [],
        }
    }

    render() {
        return( 
            <div className="list-component">
                <div> Friends </div>
                    {this.state.friends.map(friend => {
                        return(
                            <ul key={friend.id}>
                                <div className="friend-name">Name: {friend.name}</div>
                                <div className="friend-age">{`Age: ${friend.age}`}</div>
                                <div className="friend-email">{`Email: ${friend.email}`}</div>
                            </ul>
                        );
                    })}
                    <FriendsForm />
            </div>
        );
    }

    componentDidMount() {
        axios.get('http://localhost:5000/friends')
        .then(response => {
            this.setState({ friends: response.data});
        });
    }
}

export default FriendsList;
    // let friends = [     {       id: 1,       name: 'Ben',       age: 30,
    // email: 'ben@lambdaschool.com'