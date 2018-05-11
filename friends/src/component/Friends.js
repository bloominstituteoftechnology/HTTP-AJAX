import React, { Component } from 'react';

const Friends = ({ friends, handleDelete }) => {
    return(
    <div>
        { friends.map(friend => {
            return (
            <div key={friend.id}>
            <button onClick={() => handleDelete(friend.id)}>X</button>
                <div>{friend.name}</div>
                <div>{friend.age}</div>
                <div>{friend.email}</div>
            </div>
            )}
        )}
    </div>
    )}


export default Friends;