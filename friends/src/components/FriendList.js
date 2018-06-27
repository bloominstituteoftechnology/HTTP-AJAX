import React from 'react';
import Friend from './Friend';
import {Button} from 'reactstrap';
import { Route, Link} from 'react-router-dom';

const FriendList = props => {
    return(
        <div className="friend-list">
            {props.friendList.map( friend => <Friend key={friend.name} friend={friend}/>)}
            <Button><Link to="/add" style={{'color': 'white', 'textDecoration': 'none'}}>Add Friend</Link></Button>
        </div>
    )
}

export default FriendList;