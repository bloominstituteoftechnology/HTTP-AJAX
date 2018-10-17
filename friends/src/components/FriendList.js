import React from 'react';
import Friend from './Friend';
import {Link} from 'react-router-dom';

let FriendList = props => {
    return (
        <div>
            <div className='header'>
                <h1>My Personal CRM</h1>
                <Link to="/add" className='addbutton'>Add New Friend</Link>
            </div>
            <div className="friendlist">
                {props.friends.map((friend, i) => <Friend key={i} friend={friend}/>)}
            </div>
        </div>
    )
}

export default FriendList;