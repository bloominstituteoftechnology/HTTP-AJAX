import React from 'react';

const FriendCard = props => {
    const { name, age, email } = props.friend;
    return (
        <div>
            {name}, {age}, {email}
        </div>
    );
};

export default FriendCard;