import React from 'react';

const EditFriends = props => {
    return(
        <div>
            <input
                type ="text"
                placeholder = {props.friend.name}
                onChange = {props.editHandler}
            />
            <button onClick = {props.submitEdits}> Save </button>
        </div>
    )
}

export default EditFriends;