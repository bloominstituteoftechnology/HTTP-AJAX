import React from 'react';

export default function FriendsList(props) {
    return (
        <div className="friendslist">
            {
                props.friends.map(friend => {
                    return (
                        <div>
                            <p>Name: {friend.name}</p>
                            <p>Age: {friend.age}</p>
                            <p>Email: {friend.email}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}