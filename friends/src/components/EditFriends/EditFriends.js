import React from 'react';
import AddFriendForm from './AddFriendForm';

const EditFriends = props => {
    return (
        <div>
            <AddFriendForm onClick={props.onClick} handleInput={props.handleInput} name={props.name} age={props.age} email={props.email} />
        </div>
    );
}

export default EditFriends;