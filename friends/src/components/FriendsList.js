import React, { Component } from 'react';
// import Friend from './Friend';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FriendCard from './FriendCard';

class FriendsList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            friends: [],
        }
    }

    componentDidMount() {
        axios     
        .get(`http://localhost:5000/friends`)
            .then(response => {
                this.setState({friends:response.data})
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() { 
        return ( 
            <div className="friends-list">
                <Link to="/addfriend" className="add-link">Add a new friend</Link>
                <div className="friends">
                    {this.state.friends.map((friend, i) => {
                        return (
                            <Link to={`/friend/${friend.id}`} key={i} className="card">
                                <FriendCard friend={friend}/>
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}
 
export default FriendsList;