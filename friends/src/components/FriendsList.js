import React from 'react';
import Friend from './Friend';

const FriendsList=props => {
    return (
        <div>
            {props.name.map(friend => {
                return (
                    <Friend
                        handleData={props.handleData}
                        key= {friend.id}
                        name={friend.name}
                        age={friend.age}
                        email={friend.email}
                    />
                );
            })}
        </div>
    );
};

export default FriendsList;