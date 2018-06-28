import React, {Fragment} from 'react';

const Friend = props => {
    return (
        <Fragment>
            <p>{`${props.friend.id}: ${props.friend.name}, ${props.friend.age}, ${props.friend.email}`}</p>
            <button
                onClick={() => props.handleUpdate(
                    props.friend.id, props.friend.name, props.friend.age, props.friend.email
                )}>
                Edit
            </button>
            <button onClick={() => props.handleDelete(props.friend.id)}>Delete</button>
        </Fragment>
    );
}

export default Friend;