import React from 'react';

const FriendForm = props => {
    return (
        <form onSubmit={props.onSubmit}>
            <input name="name" type="text" placeholder="Add friend's name..." onChange={props.onChange} />
            <input name="age" type="age" placeholder="Add friend's age..." onChange={props.onChange} />
            <input name="email" type="email" placeholder="Add friend's email..." onChange={props.onChange} />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default FriendForm;