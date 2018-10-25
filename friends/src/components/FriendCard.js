import React from 'react';

const FriendCard = props => {
    const { name, age, email } = props.friend;
    return (
        <div>
                {name}, {age}, {email}
            <button>Delete</button>
        </div>
    );
};

export default FriendCard;