import React from 'react';

const FriendPage = props => {
    const id = props.match.params.id;
    const friend = props.friends.find(friend => `${friend.id}` === id);

    return(
        <div>
            <h1> Friend Page </h1>
                <div key={friend.id}>
                            <h1>{friend.name}</h1>
                            <p>ID: {friend.id}</p>
                            <p>AGE: {friend.age}</p>
                            <p>EMAIL: {friend.email}</p>
                </div>
        </div>
    )
}

export default FriendPage;