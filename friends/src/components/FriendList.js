import React from 'react';
import './Friend.css'

const FriendList = (props) => {
    return (
        <div className="list">
            {props.friends.map( friend => {
                return <div className="friends">
                            <h3>Name: {friend.name}</h3>
                            <h3>Age: {friend.age}</h3>
                            <h3>Email: {friend.email}</h3>
                            <button onClick={event => props.deleteFriend(event, friend.id)}>Delete</button>
                            <button  onClick={(event) => props.editFriend(event, friend.id)}>Edit</button>
                        </div>
            })}
        </div>
    )
}

export default FriendList;