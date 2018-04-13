import React, { Component } from 'react';

import './FriendCard.css';

export default class FriendCard extends Component {

    render() {
        console.log('props', this.props);
        return (
            <div className='FriendCard'>
                <div className='FriendCard__Name'>
                    <h3>{this.props.friend.name}</h3>
                </div>
                <div className='FriendCard__Info'>
                    <span>Age: {this.props.friend.age}</span>
                    <span>E-mail: {this.props.friend.email}</span>
                </div>
            </div>
        );
    }
}