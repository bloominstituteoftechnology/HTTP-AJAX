import React from 'react';
// import axios from 'axios';
import Friend from './Friend';
// import NewFriendForm from './NewFriendForm';

const FriendsList = props => {
        return (
            <div>
                {props.friends.map(friend => {
                    return (
                        <Friend
                            key={friend.id}
                            friend={friend}
                        />
                    )
                })}
            </div>
        )
    }


export default FriendsList;