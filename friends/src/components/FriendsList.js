import React from 'react';

const FriendsList = (props) => {
    return(
        <div className="friend-list">
            {props.friend.map(friend => {
                    return (
                        <div key={friend.id}>
                            <p><strong>Name:</strong> {friend.name}</p>
                            <p><strong>Age:</strong> {friend.age}</p>
                            <p><strong>Email:</strong> {friend.email}</p>
                        </div>
                    );
                })}
        </div>
    )
    
}

export default FriendsList;