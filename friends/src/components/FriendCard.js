import React from 'react';
import { Button } from 'reactstrap';

const FriendCard = props => {
    const { name, age, email } = props.friend;
    return (
        <div>
                {name}, {age}, {email}
            <Button color="danger">Delete</Button>
        </div>
    );
};

export default FriendCard;