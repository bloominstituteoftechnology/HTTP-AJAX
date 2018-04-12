import React from 'react';
import { Link } from 'react-router-dom';
import './FriendList.css';

const FriendList = props => {
    return (
        <div className="friendList">
        {console.log('props', props)}
            <Link to="/addFriend" >
                <button className="button button-add" > Wanna add a friend? </button>
            </Link>
            {props.friends.map((friend, index) => (
                <div className="friends" key={friend.id + index}>
                    <Link to={`/addFriend/${friend.id}`} >
                        <button className="button button-update" > Update </button>
                    </Link>
                    <div className="friends_name" >{friend.name}</div>
                    <div className="friends_age" >{friend.age}</div>
                    <div className="friends_email" >{friend.email}</div>
                    <button className="button button-delete" onClick={() => props.deleteInput(friend.id)} > Delete </button>
                </div>
            ))}
        </div>
    );
};

export default FriendList;