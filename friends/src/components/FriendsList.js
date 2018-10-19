import React from 'react';
import Friend from './Friends';
import './Friends.css';

const FriendsList = props => {
    return (
        <div className="container">
            {props.friends.map(item => <Friend friend={item} key={item.id} deleteItem={props.deleteItem} updateItem={props.updateItem} />)}
        </div>
    );
}

export default FriendsList;