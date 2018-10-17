import React from 'react';

const ListFriend = (props) => {
    const {friends} = props;

    return (
        <div>
            <h1>Friend List</h1>
            {friends.map(friend => (
                <div key={friend.id}>
                    <h2>Name: {friend.name}</h2>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </div>
            ))}
        </div>
    )
}

export default ListFriend;