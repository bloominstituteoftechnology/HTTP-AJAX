import React from 'react';

const FriendList = props => {
    if(props.loading){
        return <h2>Loading Data...</h2>
    }
    return (
        <div>
            {props.friends.map(friend =>
                <div key={friend.id}>
                    <p>Name: {friend.name}</p>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </div>
            )}
        </div>
    )


}

export default FriendList;