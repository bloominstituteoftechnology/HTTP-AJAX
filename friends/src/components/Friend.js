import React, {Fragment} from 'react';

const Friend = props => {
    return (
        <Fragment>
            <p>{`${props.friend.id}: ${props.friend.name}, ${props.friend.age}, ${props.friend.email}`}</p>
            <button>Edit</button>
            <button>Delete</button>
        </Fragment>
    );
}

export default Friend;