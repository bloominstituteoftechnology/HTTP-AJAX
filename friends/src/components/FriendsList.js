import React, { Component } from 'react';
import Friend from './Friend';
import axios from 'axios';

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
            <div className="friends">
                {this.state.friends.map((friend, i) => {
                    return <Friend key={i} friend={friend}/>
                })}
            </div>
        )
    }
}
 
export default FriendsList;