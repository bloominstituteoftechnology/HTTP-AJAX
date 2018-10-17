import React from 'react';

const ListFriend = (props) => {
    const {friends} = props;

    return (
        <div>
            <h2>Friend List</h2>
            {friends.map(friend => (
                <div key={friend.id}>
                    <p>Name: {friend.name}</p>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </div>
            ))}
        </div>
    )
}

export default ListFriend;