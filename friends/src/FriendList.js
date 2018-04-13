import React, { Component } from 'react';
import './App.css';
import './FriendList.css';
import axios from 'axios';
import { Number } from 'core-js/library/web/timers';
import Friend from './Friend';
import NewFriend from './NewFriend';
import { Link } from 'react-router-dom';

class FriendList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: {},
            newFriend: {}
        }
    }





    render() {
        console.log('props', this.props)
        return (
            <div>
                <h1>Hello</h1>
                <div className="friend-title">Lambda Friends</div>
                <ul className="friend-grid">
                    {this.props.friends.map((friend, i )=> {
                        return(
                             
                            <Friend key={i} friend={friend} deleteFriendHandler={this.props.deleteFriend}/>);})}
                            
                </ul>
                < NewFriend friends={this.props.friends} 
                newFriendHandler={this.props.newFriendHandler} />
            </div>
        );
    }
}



export default FriendList;