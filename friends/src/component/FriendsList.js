import React, { Component } from 'react';

 const FriendsList = ({ friend }) => {
     const { Id, name, age, email } = friend;
    return (
            <div className="person-wrapper">
                <h3>{name}</h3>
                <h3>{age}</h3>
                <h3>{email}</h3>

                {friends.map(friend => (
                    <div key={friend} className="friend-list">
                        {friend}
                    </div>
                ))}
            </div>
    );
}

export default FriendsList;