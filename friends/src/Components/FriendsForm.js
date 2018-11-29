import React from 'react';
import Input from './Input';

const FriendsForm = props => {
    return (
        <>
            <form onSubmit={event => props.addNewFriend(event)}>
                <Input type="text" placeholder="name" />
                <Input type="number" placeholder="age" />
                <Input type="email" placeholder="email" />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default FriendsForm;
