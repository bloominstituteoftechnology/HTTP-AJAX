import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class FriendsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          friends: [],
          name: '',
          age: '',
          email: ''
        };
      }

      componentDidMount() {
        axios
        .get(`http://localhost:5000/friends`)
        .then(response => {
            this.setState({ friends: response.data });
        })
        .catch(err => {
            console.log(err);
        });
    }

    

    render() {
        return (
            <div className="friend-wrapper">
                {this.state.friends.map(friend => (
                    <Link to={`/friends/${friend.id}`}>
                        <div key={friend.id} className="friend">
                            <div className="name"> {friend.name} </div>
                            <div className="age"> {`age: ${friend.age}`} </div>
                            <div className="email"> {`email: ${friend.email}`} </div>
                        </div>
                    </Link>
                ))}
            </div>
        );
    }
}